import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

export function Form (props) {

    return (
        <form className={'Form'} onSubmit={props.formSubmit}>
            <label htmlFor="date" className={'label'}>
                Дата (дд.мм.гг)
                <input type="text" className={'FormInput'} id={'date'} name={'date'} onChange={props.onChange} pattern={'[0-9]{2}.[0-9]{2}.[0-9]{2}'} required={true}/>
            </label>
            <label htmlFor="kilometers" className={'label'}>
                Км пройдено
                <input type="text" className={'FormInput'} id={'kilometers'} name={'kilometers'} onChange={props.onChange} pattern={'^[0-9]*[.,]?[0-9]+$'} required={true}/>
            </label>
            <button type={'submit'} className={'FormButtonSubmit'}>Ok</button>
        </form>
    )
}

Form.prototypes = {
    formSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}
