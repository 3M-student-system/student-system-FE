import React, { useState, useEffect } from "react";
import { Section, StudentCard, Hero, Loading, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";

function sendAttendency(history, setError, studentId) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/add-attendency`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ studentId: studentId }),
  })
    .then((data) => {
      if (data.status === 400) {
        setError(true);
      } else {
        history.push("/view");
      }
    })
    .catch((err) => console.log(err));
}

function Home() {
  const [students, setStudents] = useState();
  const [formValue, setFormValue] = useState();
  const [error, setError] = useState(false);
  const date = new Date();
  let disabled = true;
  const history = useHistory();
  let upcomingLec = "";

  if (date.getDay() > 4) {
    upcomingLec = `Next Monday 18:00`;
  } else if (date.getDay() < 5 && date.getHours() >= 18) {
    upcomingLec = "Tomorrow 18:00";
  } else if (date.getHours() < 18) {
    upcomingLec = "Today 18:00";
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/students`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (
    date.getHours() >= 18 &&
    date.getHours() < 22 &&
    date.getDay() >= 1 &&
    date.getDay() < 5
  ) {
    disabled = false;
    return (
      <Section>
        {error && <S.ErrorText>Already Registered today!</S.ErrorText>}
        <S.Wrapper>
          <Hero date={date} disabled={disabled} />
        </S.Wrapper>

        <S.Wrapper>
          <Button
            className="class"
            handleClick={(e) => {
              e.preventDefault();
              sendAttendency(history, setError, formValue);
            }}
          >
            {formValue
              ? students.filter((student) => student.id === formValue)[0].name +
                ", confirm your attendance"
              : "Regsiter attendance"}
          </Button>
        </S.Wrapper>

        <S.FlexDiv>
          {students ? (
            students.map((student) => (
              <StudentCard
                className="class"
                key={student.id}
                name={student.name}
                surname={student.surname}
                image={student.image}
                email={student.email}
                handleClick={(e) => {
                  setFormValue(student.id);
                }}
              />
            ))
          ) : (
            <Loading />
          )}
        </S.FlexDiv>
      </Section>
    );
  } else
    return (
      <Section>
        <S.Wrapper>
          <Hero disabled={disabled} lectureDate={upcomingLec} />
        </S.Wrapper>
      </Section>
    );
}

export default Home;
