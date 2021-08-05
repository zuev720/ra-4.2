import React, {useState} from 'react';
import './FitnessTracking.css';
import {FitnessTable} from './FitnessTable/FitnessTable';
import {Form} from './Form/Form';
import {INITIAL_FORM_STATE} from '../INITIALS';

export function FitnessTracking() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const [fitness, setFitnessObject] = useState([]);

    const [editFitnessIndex, setEditFitnessIndex] = useState(null);

    const onChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (editFitnessIndex !== null) {
            const date = e.target.date.value;
            const kilometers = e.target.kilometers.value;
            fitness[editFitnessIndex].date = date;
            fitness[editFitnessIndex].kilometers = kilometers;
            setEditFitnessIndex(null);
        } else {
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
        }
        e.target.date.value = '';
        e.target.kilometers.value = '';
    }

    return (
        <div className={'FitnessTracking'}>
            <Form onChange={onChange} formSubmit={formSubmit}/>
            <FitnessTable
                fitness={fitness}
                setFitness={setFitnessObject}
                // editFitnessIndex={editFitnessIndex}
                setEditFitnessIndex={setEditFitnessIndex}/>
        </div>
    )
}
