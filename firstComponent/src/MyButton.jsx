import React from 'react'

const MyButton = (props) => {
    const {buttonText:text, bgColor:colors, clickMe}=props;


  return (
    <button style={{backgroundColor:colors}} onClick={clickMe}>{text}</button>
  )
}

export default MyButton