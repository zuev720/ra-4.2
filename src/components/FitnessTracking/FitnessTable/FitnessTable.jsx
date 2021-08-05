import React from 'react';
import './FitnessTable.css'
import PropTypes from 'prop-types';

const shortid = require('shortid');

export function FitnessTable(props) {

    const fitness = props.fitness.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    });

    const editFitness = (e) => {
        const date = e.target.closest('.rowTable').firstChild.textContent;
        const editElementIndex = props.fitness.findIndex((elem) => elem.date === date);
        props.setEditFitnessIndex(editElementIndex);
        const fitnessMatch = fitness.find((elem) => elem.date === date);
        e.target.closest('.FitnessTracking').firstChild.date.value = fitnessMatch.date;
        e.target.closest('.FitnessTracking').firstChild.kilometers.value = fitnessMatch.kilometers;
    }

    const deleteFitness = (e) => {
        const date = e.target.closest('.rowTable').firstChild.textContent;
        props.setFitness(props.fitness.filter((elem) => elem.date !== date))
    }

    return (
        <table className={'FitnessTable'}>
            <thead>
                <tr>
                    <th>Дата (дд.мм.гг)</th>
                    <th>Км пройдено</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody className={'TableBody'}>
            {
                fitness.map((elem) =>
                    <tr key={shortid.generate()} className={'rowTable'}>
                        <th>{elem.date}</th>
                        <th>{elem.kilometers}</th>
                        <th>
                            <button className={'FitnessTableButton'} type={'button'} onClick={editFitness}>&#9998;</button>
                            <button className={'FitnessTableButton'} type={'button'} onClick={deleteFitness}>&#10008;</button>
                        </th>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

FitnessTable.prototypes = {
    fitness: PropTypes.array.isRequired,
    setFitness: PropTypes.func.isRequired,
}
