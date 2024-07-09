//keep the name of the file the name of the component so e.g., Heading as file name 
// and Heading in line 6

import React from 'react' //rfc -> enter to get basic scaffholding 

export default function Heading({content, text}) { //{content}
    //instead of (props) then listing each inside h1 is known as, OBJECT DECONSTRUCTING
//only ONE parent element
  //anything between here is javascript boundry
  return ( //everything inside return is html boundary 
    //use {} if you want to add a javascript inside html
    <h1> 
      {content}
    </h1>
  )
}


