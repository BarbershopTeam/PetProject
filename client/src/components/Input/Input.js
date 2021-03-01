import React, { useEffect, useState } from 'react';
import { errors } from '../../errors';

function Input(props) {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const validator = (value) => {
    setError('');
    if (!value) {
      setError(errors.REQUIRED_FIELD);
      return;
    }
    if (props.pattern && !props.pattern.test(value)) {
      setError(props.error);
    }
  };

  useEffect(() => {
    setError('');
    if (!props.isEmailAvailable && props.type === 'email') {
      setError(errors.EMAIL_IS_NOT_AVAILABLE);
    }

    if (!props.isPhoneAvailable && props.type === 'tel') {
      setError(errors.NUMBER_IS_NOT_AVAILABLE);
    }
    if (props.name === 'confirmPassword' && props.passwords.confirmPassword !== '') {
      props.passwords.confirmPassword === props.passwords.password ? setError('') : setError(errors.PASSWORDS_DO_NOT_MATCH);
    }
  }, [props.isEmailAvailable, props.isPhoneAvailable, props.passwords]);

  useEffect(() => {
    props.setIsError(error);
  }, [error]);

  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event) => {
          setInputValue(event.target.value);
          validator(event.target.value);
          if (props.name === 'password') {
            props.setPasswords((prevState) => ({
              password: event.target.value, confirmPassword: prevState.confirmPassword,
            }));
          }
          if (props.name === 'confirmPassword') {
            props.setPasswords((prevState) => ({
              password: prevState.password, confirmPassword: event.target.value,
            }));
          }
        }}
        onBlur={(event) => {
          if (!error && props.availabilityChecker && event.target.value) {
            props.availabilityChecker(props.type, event.target.value);
          }
          if (props.name !== 'confirmPassword' && !error && event.target.value) {
            props.setUser((prevState) => ({ ...prevState, [props.name]: event.target.value }));
          }
          props.setIsError(error);
        }}
      />
      <span
        style={inputValue ? { display: '' } : { display: 'none' }}
        className={error ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-ok'}
      />
      <p>{error || null}</p>
    </div>
  );
}

export default Input;
