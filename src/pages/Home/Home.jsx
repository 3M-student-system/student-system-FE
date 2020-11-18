import React, { useState, useEffect } from 'react';
import { Section, StudentCard, Hero, Loading } from '../../components';
import * as S from './Home.style';
import { useHistory } from 'react-router-dom';

function sendAttendency(history, studentId) {
  fetch(`${process.env.REACT_APP_SERVER_URL}/add-attendency`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ studentId: studentId }),
  })
    .then(() => history.push('/view'))
    .catch((err) => console.log(err));
}

function Home() {
  const [students, setStudents] = useState();
  const date = new Date();
  let disabled = true;
  const history = useHistory();
  let upcomingLec = '';

  if (date.getDay() > 4) {
    upcomingLec = `Next Monday 18:00`;
  } else if (date.getDay() < 5 && date.getHours() >= 18) {
    upcomingLec = 'Tomorrow 18:00';
  } else if (date.getHours() < 18) {
    upcomingLec = 'Today 18:00';
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
      <>
        <Section>
          <S.Wrapper>
            <Hero date={date} disabled={disabled} />
          </S.Wrapper>
        </Section>
        <Section>
          <S.FlexDiv>
            {students ? (
              students.map((student) => (
                <StudentCard
                  key={student.id}
                  name={student.name}
                  surname={student.surname}
                  image={student.image}
                  email={student.email}
                  handleClick={() =>
                    window.confirm('Please confirm')
                      ? sendAttendency(history, student.id)
                      : console.log('Canceled')
                  }
                />
              ))
            ) : (
              <Loading />
            )}
          </S.FlexDiv>
        </Section>
      </>
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
