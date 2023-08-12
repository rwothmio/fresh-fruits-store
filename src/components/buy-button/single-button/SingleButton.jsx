import React from 'react'
import './single-button.css'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/actions'

function SingleButton({fruit, handleAdd}) {
  return (
    <button className='singelButton' onClick={()=>handleAdd(fruit)}>Add</button>
  )
}

export default connect(null, mapDispatchToProps)(SingleButton)