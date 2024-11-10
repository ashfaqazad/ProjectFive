import React from 'react'

export const Data = () => {

    const students = ['Ashfaque', 'Rameez', 'Imdad'];

  return (
    <>
    
    <div className="App">
        <h1>Handle Array With Map</h1>
        {
          students.map((data) => (
            
            <h1>{data}</h1>
          ))
        }
      </div>

    </>
  )
}
