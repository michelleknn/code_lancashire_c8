//**components tag name MUST start with capital letter and end with .jsx (otherwise 
//it will be registered as a html rather than REACT file)
import React from 'react' //rfc -> enter to get basic scaffholding 
import Heading from './components/Heading' //this was automatically generated when i
import Paragraph from './components/Paragraph'
// added in line 9-10. 

export default function App() { //only ONE parent element
  //anything between here is javascript boundry
  return ( //everything inside return is html boundary 
    //use {} if you want to add a javascript inside html
    <div> 
      <Heading content = "this is heading 1"/>
      <Heading content = "this is heading 2"/>
      <Heading content = "this is heading 3"/>
      <Paragraph>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptate temporibus? Recusandae dicta a aliquam reprehenderit pariatur voluptatem quidem! Cumque nostrum architecto ipsa fuga soluta tempora pariatur autem facere placeat.</p>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur obcaecati temporibus harum qui, pariatur aspernatur culpa incidunt iusto quis ipsa. Neque nam veniam dignissimos nulla inventore unde in laudantium nihil!
        </span>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque possimus odio adipisci facere quod repellendus aut quibusdam. Eius quae ipsam quam culpa neque quaerat est. Dolore excepturi consectetur facilis!</span>
      </Paragraph>

    </div>
    //if you cba typing all the html code just type the component name 
  )
}
