import React, { useState, useEffect } from 'react';
import { Section, StudentCard, Hero, Loading } from '../../components';
import * as S from './Home.style';
function Home() {
  const [students, setStudents] = useState();
  const date = new Date();
  let disabled = true;

  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
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
          <Hero date={date} disabled={disabled} />
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
                  handleClick={() => window.confirm('Please confirm')}
                />
              ))
            ) : (
              <Loading />
            )}
          </S.FlexDiv>
        </Section>
      </>
    );
  }

  return (
    <>
      <Section>
        <S.FlexDiv>
          {students &&
            students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                surname={student.surname}
                image={student.image}
                email={student.email}
                handleClick={() => window.confirm('Please confirm')}
              />
            ))}
        </S.FlexDiv>

        <Hero disabled={disabled} />
      </Section>
    </>
  );
}

export default Home;
