import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';
import {
  NAME, PASSWORD, EMAIL, PHONE_NUMBER,
} from '../../config/regexp.enum';
import { errors } from '../../errors';
import Input from '../Input/Input';
import './Registration.css';

function Registration(props) {
  const [user, setUser] = useState({
    name: '', password: '', phoneNumber: '', email: '',
  });
  const [passwords, setPasswords] = useState({ password: '', confirmPassword: '' });

  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isPhoneAvailable, setIsPhoneAvailable] = useState(true);
  const [isError, setIsError] = useState(null);
  const [checked, setChecked] = useState(false);

  const {
    name, password, email, phoneNumber,
  } = user;

  const availabilityChecker = async (type, value) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [type]: value }),
    };

    const response = await fetch('http://localhost:420/auth/email', request);

    if (type === 'email') {
      (response.status === 400) ? setIsEmailAvailable(false) : setIsEmailAvailable(true);
    }
    if (type === 'tel') {
      (response.status === 400) ? setIsPhoneAvailable(false) : setIsPhoneAvailable(true);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch('http://localhost:420/auth/signup', request);
    console.log(response);
  };

  return (

    <Container>
      <Form onSubmit={(event) => register(event)}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Ваше ім'я</Form.Label>
          <Input
            name="name"
            type="text"
            placeholder="Введіть ваше ім'я"
            pattern={NAME}
            error={errors.INVALID_NAME}
            setUser={setUser}
            user={user}
            setIsError={setIsError}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Поштова скринька</Form.Label>
          <Input
            name="email"
            type="email"
            placeholder="Введіть вашу пошту"
            pattern={EMAIL}
            error={errors.INVALID_EMAIL}
            availabilityChecker={availabilityChecker}
            isEmailAvailable={isEmailAvailable}
            setUser={setUser}
            user={user}
            setIsError={setIsError}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Номер телефону</Form.Label>
          <Input
            name="phoneNumber"
            type="tel"
            placeholder="Введіть номер телефону"
            pattern={PHONE_NUMBER}
            error={errors.INVALID_PHONE}
            availabilityChecker={availabilityChecker}
            isPhoneAvailable={isPhoneAvailable}
            setUser={setUser}
            user={user}
            setIsError={setIsError}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Input
            name="password"
            type="password"
            placeholder="Введіть пароль"
            pattern={PASSWORD}
            error={errors.INVALID_PASSWORD}
            passwords={passwords}
            setPasswords={setPasswords}
            setUser={setUser}
            user={user}
            setIsError={setIsError}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Повторіть пароль</Form.Label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Повторіть пароль"
            passwords={passwords}
            setPasswords={setPasswords}
            setIsError={setIsError}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={() => setChecked(!checked)}
            label={(
              <span>
                <span>Погодитись з </span>
                <button
                  id="link-button"
                  type="button"
                  onClick={() => props.history.push('/user-agreement')}
                >
                  користувацькою
                  угодою
                </button>
              </span>
)}

          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={
            isError
            || !(name && password && phoneNumber && email && passwords.confirmPassword)
            || !checked
          }
        >
          Зареєструватись
        </Button>
      </Form>
    </Container>

  );
}

export default withRouter(Registration);
