import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rating= ({rating}) => {
  return (
    <div className='book__ratings'>
        {
            new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
        }
        {/* If it's not an integer, I want you to print the half star icon*/}
        {
            !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
  )
}

export default Rating