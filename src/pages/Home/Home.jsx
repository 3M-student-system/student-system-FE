import React, { useState, useEffect } from 'react';
import {
  Section,
  StudentCard,
  Hero,
  Loading,
  Button,
  Notification,
  InputField,
} from '../../components';
import * as S from './Home.style';
import { useHistory } from 'react-router-dom';

function sendAttendency(
  history,
  setError,
  setErrorMessage,
  setNotifType,
  studentId,
  password
) {
  if (password) {
    fetch(`${process.env.REACT_APP_SERVER_URL}/add-attendency`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentId: studentId, password: password }),
    })
      .then((data) => {
        if (data.status === 400) {
          setNotifType('error');
          setErrorMessage('Already Registered today!');
          setError(true);
        } else if (data.status === 401) {
          setNotifType('error');
          setErrorMessage('Wrong Password!');
          setError(true);
        } else {
          history.push('/view');
        }
      })
      .catch((err) => console.log(err));
  } else {
    setNotifType('error');
    setErrorMessage('Please enter the password!');
    setError(true);
  }
}

function scrollToButton() {
  document.documentElement.scrollTop = 0;
}

function Home() {
  const [students, setStudents] = useState();
  const [formValue, setFormValue] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  const date = new Date();
  const history = useHistory();
  let upcomingLec = '';

  if (date.getDay() >= 4) {
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
    return (
      <Section>
        {error && (
          <S.Wrapper>
            <Notification message={errorMessage} type={notifType} />
          </S.Wrapper>
        )}
        <S.Wrapper>
          <Hero color="primary" date={date} />
        </S.Wrapper>

        <S.Wrapper>
          <S.FlexDiv>
            {students && (
              <Button
                handleClick={(e) => {
                  e.preventDefault();
                  sendAttendency(
                    history,
                    setError,
                    setErrorMessage,
                    setNotifType,
                    formValue,
                    password
                  );
                  console.log(formValue + password);
                  setFormValue('');
                }}
              >
                {formValue
                  ? students.filter((student) => student.id === formValue)[0]
                      .name + ', CLICK to confirm your attendance'
                  : 'Regsiter attendance'}
              </Button>
            )}
          </S.FlexDiv>
        </S.Wrapper>
        <InputField
          type="password"
          label="Password"
          name="password"
          handleChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />

        <S.FlexDiv>
          {students ? (
            students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                surname={student.surname}
                image={student.image}
                email={student.email}
                handleClick={(e) => {
                  setFormValue(student.id);
                  scrollToButton();
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
        <Hero color="primary" disabled lectureDate={upcomingLec} />
      </Section>
    );
}

export default Home;
