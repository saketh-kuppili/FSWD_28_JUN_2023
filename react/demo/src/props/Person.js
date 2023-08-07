import React from 'react'
import PropTypes from 'prop-types';

export default function Person(props) {
  return (
     <>
       <h2>{props.name}</h2>
       <h2>{props.age}</h2>
     </>
  )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
};