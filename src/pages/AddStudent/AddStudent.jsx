import React from 'react';
import { FormTemplate, Section } from '../../components';
import formData from '../../Utils/formData';

function AddStudent() {
  return (
    <div>
      <Section fullWidth={false}>
        <h1>Add Student</h1>
        <FormTemplate
          callbackEndpoint={'/add-student'}
          fields={formData}
          message={'Thank you!'}
        />
      </Section>
    </div>
  );
}

export default AddStudent;
