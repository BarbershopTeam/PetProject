import React, { useEffect, useState } from 'react';
import { errors } from '../../errors';

function Input(props) {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState();

  const validator = (value) => {
    setError('');
    if (!value) {
      setError(errors.REQUIRED_FIELD);
      return;
    }
    if (!props.pattern.test(value)) {
      setError(props.error);
    }
  };

  useEffect(() => {
    setError('');
    if (!props.isAvailable) {
      if (props.type === 'email') {
        setError(errors.EMAIL_IS_NOT_AVAILABLE);
        return;
      }
      if (props.type === 'number') {
        setError(errors.NUMBER_IS_NOT_AVAILABLE);
      }
    }
  }, [props.isAvailable]);

  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(event) => validator(event.target.value)}
        onBlur={async (event) => {
          if (!error && props.availabilityChecker) {
            props.availabilityChecker(props.type, event.target.value);
          }
        }}
        onInput={(event) => setInputValue(event)}
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
