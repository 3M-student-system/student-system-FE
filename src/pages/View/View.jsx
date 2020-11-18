import React, { useEffect, useState } from "react";
import { Section, CalendarTable, SelectInput } from "../../components";
import * as S from "./View.style";

function View() {
  const [selectedMonth, setSelectedMonth] = useState({
    name: "All months",
    value: null,
  });
  const [alldata, setAlldata] = useState();
  const [groupedAttend, setGroupedAttend] = useState();
  const [studentCount, setStudentCount] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view`)
      .then((res) => res.json())
      .then((data) => {
        setAlldata(data);
      })
      .catch((err) => console.log(err));

    fetch(`${process.env.REACT_APP_SERVER_URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudentCount(data.length);
        setStudents(data);
      });
  }, []);

  useEffect(() => {
    groupAttendance(alldata || []);
  }, [alldata, selectedMonth, students]);

  function groupAttendance(attendance) {
    let groupedByDay = {};

    attendance.forEach((attendance) => {
      if (
        selectedMonth &&
        selectedMonth.value &&
        new Date(attendance.timestamp).getMonth() + 1 !== selectedMonth.value
      ) {
        return;
      }
      let [date, time] = attendance.timestamp.split("T");
      if (typeof groupedByDay[date] === "undefined") {
        groupedByDay[date] = {
          date: date,
          attendance: [],
          attendedCount: 0,
          notAttendedCount: studentCount,
          attendedPercent: 0,
        };
      }
      groupedByDay[date]["attendance"].push({
        id: attendance.id,
        studentId: attendance.studentId,
        student: (students || []).find((s) => s.id === attendance.studentId),
        timestamp: attendance.timestamp,
      });

      groupedByDay[date].attendedCount++;
      groupedByDay[date].notAttendedCount--;
      groupedByDay[date].attendedPercent = Math.round(
        (groupedByDay[date].attendedCount / studentCount) * 100
      );
    });
    setGroupedAttend(Object.values(groupedByDay));
  }

  const monthArr = [
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];

  return (
    <Section background="999" fullWidth={false}>
      <S.InputCont>
        {/* <S.InputWrapp>
          <S.InputLabel>Class</S.InputLabel>
          <SelectInput options={classArr} />
        </S.InputWrapp> */}
        <S.InputWrapp>
          <S.InputLabel>Month</S.InputLabel>
          <SelectInput
            options={monthArr}
            handleChange={(e) => {
              let monthNumber = parseInt(e.target.value);
              let selectedMonth = monthArr.find((m) => m.value === monthNumber);
              setSelectedMonth(selectedMonth);
            }}
          />
        </S.InputWrapp>
      </S.InputCont>
      <CalendarTable days={groupedAttend} month={selectedMonth} />
    </Section>
  );
}

export default View;
