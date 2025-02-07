import React from 'react';
import './mystyles.css';
export default function FunctionalComponents(props) {
    let applystyle=props.apply ? 'heading':''
    console.log(props)
    let inlinestyle={
        color:'red',
        fontSize:'100px',
    }
  return (
    <div>
      <h1 class={`${applystyle} font-style`}>Welcome</h1>
      <h2 style={inlinestyle}>inline style</h2>
    </div>
  )
}
