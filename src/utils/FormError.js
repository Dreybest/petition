import React from 'react'

const FormError =  (props) => {
    return (
        <div className="alert alert-danger" role="alert">
          {props.children}
        </div> 
    )
}

export default FormError
