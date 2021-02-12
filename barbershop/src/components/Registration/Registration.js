import React, { useState } from 'react';
import {Form, Button, Container} from 'react-bootstrap'
import {withRouter} from "react-router";
import { NAME, PASSWORD, EMAIL, PHONE_NUMBER } from '../../config/regexp.enum';
import {errors} from '../../errors'
import Input from '../Input/Input';
import "./Registration.css";


function Registration(props) {

    const [user, setUser] = useState({})

    return (

        <Container>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Ваше ім'я</Form.Label>
                    <Input name="name" type="text" placeholder="Введіть ваше ім'я" pattern={NAME} error={errors.INVALID_NAME}/>

                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Поштова скринька</Form.Label>
                    <Input name="email" type="email" placeholder="Введіть вашу пошту" pattern={EMAIL} error={errors.INVALID_EMAIL}/>
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                    <Form.Label>Номер телефону</Form.Label>
                    <Input name="phoneNumber" type="number" placeholder="Введіть номер телефону" pattern={PHONE_NUMBER}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Input name="password" type="password" placeholder="Введіть пароль" pattern={PASSWORD}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Повторіть пароль</Form.Label>
                    <Input name="confirmPassword" type="password" placeholder="Повторіть пароль"/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={<label>Погодитись з <button id="link-button"
                     onClick={() => props.history.push('/user-agreement')}>користувацькою угодою</button></label>}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Зареєструватись
                </Button>
            </Form>
        </Container>

    );

}

export default withRouter(Registration);