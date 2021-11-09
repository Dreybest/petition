
import React from 'react'
// import { Link } from 'react-router-dom'

const FormSuccess = (props) => {
    return (
        <div className="alert alert-success" role="alert">
          {props.children}
         
        </div> 
    )
}

export default FormSuccess
