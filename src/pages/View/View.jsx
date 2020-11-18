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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/view`)
      .then((res) => res.json())
      .then((data) => {
        setAlldata(data);
        groupAttendance(data);
        setTimeout(() => {
          console.log(groupedAttend);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  function groupAttendance(attendance) {
    let groupedByDay = {};
    let selectedMonthDigit = parseInt(selectedMonth);

    attendance.forEach((attendance) => {
      if (
        selectedMonthDigit &&
        new Date(attendance.timestamp).getMonth() + 1 !== selectedMonthDigit
      ) {
        return;
      }
      let [date, time] = attendance.timestamp.split("T");
      if (typeof groupedByDay[date] === "undefined") {
        groupedByDay[date] = { date: date, attendance: [] };
      }
      groupedByDay[date]["attendance"].push(attendance);
    });
    setGroupedAttend(Object.values(groupedByDay));
  }

  const monthArr = [
    { name: "November", value: 11 },
    { name: "December", value: 12 },
  ];
  const classArr = ["Petro vakariniai", "Petro dieniniai"];

  return (
    <Section background="999" fullWidth={false}>
      <S.InputCont>
        <S.InputWrapp>
          <S.InputLabel>Class</S.InputLabel>
          <SelectInput options={classArr} />
        </S.InputWrapp>
        <S.InputWrapp>
          <S.InputLabel>Month</S.InputLabel>
          <SelectInput
            options={monthArr}
            handleChange={(e) => setSelectedMonth(e.target.value)}
          />
        </S.InputWrapp>
      </S.InputCont>
      <CalendarTable days={groupedAttend} month={selectedMonth} />
    </Section>
  );
}

export default View;
