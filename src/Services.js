import React, { useState } from 'react';
import workapi from './API/WorkAPI';

export const Services = () => {


    const[workdata,setworkdata ] = useState(workapi);
    console.log(workdata);

  return (
    <section className='services'>
        <div className="container mt-3">
            <h1>Two Unequal Responsive Columns</h1>
            <p>Resize the browser window to see the effect.</p>
            <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
            <div className="row">

                { workdata.map((curElem) => {
                    const { id, logo, title, info} = curElem;

                    return <>
                         <div className="col-md-4">
                            <div className="mt-4 p-5 bg-primary text-white rounded">
                                <p> {id} </p>
                                <h3 className='${logo}'>{logo}</h3> 
                                <p>{info}</p> 
                            </div>
                        </div>
                     </>;
                }) }
               
               
            </div>
            </div>
    </section>
  )
}


export default Services;