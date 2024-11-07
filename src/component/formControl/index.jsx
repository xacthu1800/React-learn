import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  const { formState } = form;
  const { errors } = formState;

  /*   console.log('name:', name);
  console.log('type of name: ', formState.defaultValues[name]);
  console.log('formstate: ', formState); */

  const hasError = !!errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={hasError}
          helperText={hasError ? errors[name]?.message : ''}
        />
      )}
    />
  );
}

export default InputField;
