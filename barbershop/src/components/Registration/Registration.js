import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import {withRouter} from "react-router";
import "./Registration.css"


function Registration(props) {

    return (
        <Container>
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Ваше ім'я</Form.Label>
                <Form.Control type="text" placeholder="Введіть ваше ім'я"/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Поштова скринька</Form.Label>
                <Form.Control type="email" placeholder="Введіть вашу пошту"/>
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
                <Form.Label>Номер телефону</Form.Label>
                <Form.Control type="number" placeholder="Введіть номер телефону"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введіть пароль"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Повторіть пароль</Form.Label>
                <Form.Control type="password" placeholder="Повторіть пароль"/>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={<label>Погодитись з <button id="link-button" onClick={() => props.history.push('/user-agreement')}>користувацькою угодою</button></label>}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Зареєструватись
            </Button>
        </Form>
        </Container>
    );
}

export default withRouter(Registration);