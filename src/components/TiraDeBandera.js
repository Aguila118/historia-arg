import React from 'react'

export const TiraDeBandera = () => {
  return (
    <>
      <div 
        className="tiraAzul"
        style={{
          width:'calc(100vw -10px)',
          height:'5px',
          backgroundColor: '#00c0ff',
          boxShadow: 'inset 2px 2px 3px rgba(0,0,0,0.3)'
        }}
        ></div>
      <div 
        className="tiraBlanca"
        style={{
          width:'calc(100vw -10px)',
          height:'5px',
          backgroundColor: '#ffffff',
          boxShadow: 'inset 2px 0px 3px rgba(0,0,0,0.3)'
        }}
        ></div>
      <div 
        className="tiraAzul"
        style={{
          width:'calc(100vw -10px)',
          height:'5px',
          backgroundColor: '#00c0ff',
          boxShadow: 'inset 2px 0px 3px rgba(0,0,0,0.3)',
          marginBottom: '15px'
        }}
        ></div>
    </>
  )
}
