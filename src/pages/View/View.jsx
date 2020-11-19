import React, { useEffect, useState } from "react";
import { Section, CalendarTable, SelectInput } from "../../components";
import * as S from "./View.style";

function View() {
  const monthArr = [
    { name: "All months", value: "all" },
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];
  const [selectedMonth, setSelectedMonth] = useState(monthArr[0]);
  const [allAttendance, setAllAttendance] = useState();
  const [groupedAttend, setGroupedAttend] = useState();
  const [studentCount, setStudentCount] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view`)
      .then((res) => res.json())
      .then((data) => {
        setAllAttendance(data);
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
    groupAttendanceByDate(allAttendance || []);
  }, [allAttendance, selectedMonth, students]);

  function groupAttendanceByDate(allAttendanceItems) {
    let groupedDates = {};

    allAttendanceItems.forEach((attendanceItem) => {
      let currentAttendanceMonth = parseInt(
        attendanceItem.timestamp.split("-")[1] // 2020-11-03T17:49:57.000Z
      );

      if (
        selectedMonth &&
        selectedMonth.value !== "all" &&
        selectedMonth.value !== currentAttendanceMonth
      ) {
        return;
        // ignore if different month selected
      }

      let timestampSplit = attendanceItem.timestamp.split("T"); // 2020-11-03T17:49:57.000Z
      let fullDate = timestampSplit[0]; // 2020-11-03

      // group represents one date (2020-11-03, or 2020-11-04, or 2020-11-05 etc)
      let group = groupedDates[fullDate];

      if (typeof group === "undefined") {
        // if an object for this date was not created already
        groupedDates[fullDate] = {
          date: fullDate,
          studentList: students.map((student) => {
            return {
              ...student,
              attended: false,
              attendedTimestamp: null,
            };
          }),
          attendedCount: 0,
          notAttendedCount: studentCount,
          attendedPercent: 0,
        };

        group = groupedDates[fullDate];
      }

      let student = group.studentList.find(
        (s) => s.id === attendanceItem.studentId
      );

      if (student) {
        student.attended = true;
        student.attendedTimestamp = attendanceItem.timestamp;

        group.attendedCount = group.studentList.filter(
          (s) => s.attended === true
        ).length;

        group.notAttendedCount = group.studentList.filter(
          (s) => s.attended === false
        ).length;

        group.attendedPercent = Math.round(
          (group.attendedCount / studentCount) * 100
        );
      }
    });
    setGroupedAttend(Object.values(groupedDates));
  }

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
