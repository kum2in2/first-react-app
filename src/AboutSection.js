import React, { useState } from 'react';
import aboutapi from './API/AboutAPI';

export const AboutSection = () => {

const[aboutdata,setworkdata ] = useState(aboutapi);
console.log(aboutdata);

return (
<>
<div className="container mt-3 section1">
   <h2>About Us 1</h2>
   <p>Combine .badge classes with utility/helper classes to add badges inside the list group:</p>
   <ul className="list-group">
      { aboutdata.map((curElem) => {
      const {title, infoID} = curElem;
      return <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
         {title}
         <span className="badge bg-primary rounded-pill"> {infoID} </span>
      </li>
      </>;
      }) }
   </ul>
</div>

<div className="container mt-3 section2">
   <h2>About Us 2</h2>
   <p>Combine .badge classes with utility/helper classes to add badges inside the list group:</p>
   <ul className="list-group">
      { aboutdata.map((curElem) => {
      const {title, infoID} = curElem;
      return <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
         <span className="badge bg-primary rounded-pill"> {infoID} </span>
         {title}
      </li>
      </>;
      }) }
   </ul>
</div>
</>
)
}
export default AboutSection;