import React from "react";
import { Section, StudentCard, Hero } from "../../components";
import students from "../../Utils/students";
import * as S from "./Home.style";
function Home() {
  const date = new Date();
  let disabled = true;

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
            {students &&
              students.map((student) => (
                <StudentCard
                  key={student.id}
                  name={student.name}
                  surname={student.surname}
                  image={student.image}
                  handleClick={() => window.confirm("Please confirm")}
                />
              ))}
          </S.FlexDiv>
        </Section>
      </>
    );
  }

  return (
    <>
      <Section>
        <Hero disabled={disabled} />
      </Section>
    </>
  );
}

export default Home;
