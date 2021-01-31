import React from 'react';
import { Form, Button, NavLink } from 'react-bootstrap';
import {withRouter} from "react-router";

function Login(props) {

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Поштова скринька:</Form.Label>
                    <Form.Control type="email" placeholder="Введіть вашу електронну адресу" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" placeholder="Введіть ваш пароль" />
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