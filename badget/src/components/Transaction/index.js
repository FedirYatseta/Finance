import React from 'react'
import { Wrapper, Element } from './style'
import PropTypes from 'prop-types';

const Transaction = ({ transaction: { comment, date, value } }) => {

    return (
        <Wrapper value={value}>
            <Element> Value : {value}</Element>
            <Element> Date : {date}</Element>
            <Element> Comment : {comment}</Element>
        </Wrapper>
    )

}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        value: PropTypes.number,
        date: PropTypes.string,
        comment: PropTypes.string
    })

}

export default Transaction