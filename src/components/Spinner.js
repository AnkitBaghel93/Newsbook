import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner =()=> {
  return (
    <div className="text-center bg-grey">
        <img src={loading} alt="loading" className=" bg-grey" />
      </div>
    )
  }
  export default Spinner
        


