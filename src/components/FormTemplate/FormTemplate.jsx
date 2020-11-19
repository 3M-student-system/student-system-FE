import React, { useState } from 'react';
import { InputField, Button, Notification } from '../';

function FormTemplate({ fields, callbackEndpoint, message }) {
  const [fieldValues, setFieldValues] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [notifType, setNotifType] = useState();
  return (
    <>
      {error && <Notification message={errorMessage} type={notifType} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`${process.env.REACT_APP_SERVER_URL}${callbackEndpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fieldValues),
          })
            .then((data) => {
              if (data.status === 401) {
                setNotifType('error');
                setErrorMessage('Wrong Password!');
                setError(true);
              } else {
                setNotifType('success');
                setErrorMessage('Successfully added!');
                setError(true);
              }
            })
            .catch((err) => console.log(err));
        }}
      >
        {fields.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            type={field.type}
            label={field.labelText}
            handleChange={(e) =>
              setFieldValues({ ...fieldValues, [field.name]: e.target.value })
            }
          />
        ))}
        <Button type="submit">Add Student</Button>
      </form>
    </>
  );
}

export default FormTemplate;
