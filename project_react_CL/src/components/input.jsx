import React from 'react'

export default function Input({className, ...props}) {
  return (
    <input className={`px-3 py-2 border border-gray-400 rounded-md ${className}`} {...props} />
  )
}

//creates a base form so everytime you add a username its not just piling on top of each other 