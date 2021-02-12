import React, {useState} from 'react';
import {errors} from '../../errors'

function Input (props) {

const [error, setError] = useState(null)

const validator = (value) => {
    setError(null);
    if(!value) {
        setError(errors.REQUIRED_FIELD);
        return
    }
    if(!props.pattern.test(value)) {
        setError(props.error)
        return
    }

}

        return (
            <div>
                <input name={props.name} type={props.type} placeholder={props.placeholder} onBlur={event => validator(event.target.value)}/>
                <p>{error ? error : null}</p>
            </div>
        );
}

export default Input;