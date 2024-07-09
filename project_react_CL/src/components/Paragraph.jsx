import React from 'react'

export default function Paragraph({children}) { //children is a reserved name, comes from
    //react and you cannot use it as a unique name 
  return (
    <p>{children}</p>
  )
}
