import React, { Fragment } from 'react'
import questions from './data';
import Question from './Question';

const Questions = () => {

    return (
        <Fragment>
            {questions.map((q) => {
                return <Question {...q}></Question>
            })}
        </Fragment>
    )
}

export default Questions
