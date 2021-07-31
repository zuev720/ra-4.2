import React, {useState} from 'react';
import './FitnessTracking.css';
import {FitnessTable} from './FitnessTable/FitnessTable';
import {Form} from './Form/Form';

export function FitnessTracking() {
    const INITIAL_FORM_STATE = {
        date: '',
        kilometers: '',
    }
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const [fitness, setFitnessObject] = useState([]);

    const onChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const date = form.date;
        const kilometers = form.kilometers;
        const matchDate = fitness.find((elem) => elem.date === date);
        if (matchDate) {
            fitness.forEach((elem) => {
                if (elem.date === date) {
                    elem.kilometers += Number(kilometers);
                }
            })
            setFitnessObject((prev) => [...prev]);
        } else {
            setFitnessObject((prev) => ([...prev, {date: date, kilometers: Number(kilometers)}]));
        }
        e.target.date.value = '';
        e.target.kilometers.value = '';
    }

    return (
        <div className={'FitnessTracking'}>
            <Form onChange={onChange} formSubmit={formSubmit}/>
            <FitnessTable fitness={fitness} setFitness={setFitnessObject}/>
        </div>
    )
}
