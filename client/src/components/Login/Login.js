import React, { useState } from 'react';
import { Form, Button, NavLink } from 'react-bootstrap';
import { withRouter } from 'react-router';

function Login(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const login = async (event) => {
    event.preventDefault();
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };

    const response = await fetch('http://localhost:420/auth/login', request);
    console.log(response);
  };

  return (
    <div>
      <Form onSubmit={(event) => login(event)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Поштова скринька:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введіть вашу електронну адресу"
            onChange={(event) => setCredentials((prevState) => ({
              email: event.target.value, password: prevState.password,
            }))}
          />
          <Form.Text className="text-muted" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введіть ваш пароль"
            onChange={(event) => setCredentials((prevState) => ({
              email: prevState.email, password: event.target.value,
            }))}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Увійти
        </Button>
        <NavLink onClick={() => props.history.push('/signup')}>Немає аккаунта? Зареєструватись.</NavLink>
      </Form>
    </div>
  );
}

export default withRouter(Login);
