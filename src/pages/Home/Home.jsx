import React from 'react';
import { Section, StudentCard } from '../../components';
import students from '../../Utils/students';
import * as S from './Home.style';
function Home() {
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
      </Section>
    </>
  );
}

export default Home;
