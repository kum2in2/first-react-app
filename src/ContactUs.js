import React, {useState} from 'react'
export const ContactUs = () => {
const [userData, setUserData]= useState(
{
FullName:"",
EmailID:"",
Message:"",
}
);

let name, value;
const postUserData = (event) => {
  name = event.target.name;
  value = event.target.value;

setUserData({ ...userData, [name] : value});
};




// Connect with firebase
const submitData = async (event) => {
  event.preventDefault();
    const { FullName, EmailID, Message } = userData;
    if(FullName && EmailID && Message){

      const res = fetch(
            "https://react-d706b-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
            {
              method:"POST", 
              headers: { "content-Type": "application/json" },
              body: JSON.stringify({
                FullName, EmailID, Message,
              }),
            },
           
      );


      if(res){
        setUserData({
          FullName:"",
          EmailID:"",
          Message:"",
                })
                alert("Data Stored");
      }

      else {
        alert("Not Stored Data");
      }
    }
    else {
      alert("plz Fill Data");
    }

};




return (
<>
<div className="container py-4">
   <div className='row'>
      <div className='col-md-6'>
         <img className='img-responsive img-thumbnail' src='/images/chicago.jpg' />
      </div>
      <div className='col-md-6'>
         <form method='POST' id="contactForm">
            <div className="mb-3">
               <label className="form-label" for="name">Name</label>
               <input 
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="FullName"
                  value={userData.FullName}
                  onChange={postUserData}
                  />
            </div>
            <div className="mb-3">
               <label className="form-label" for="emailAddress">Email Address</label>
               <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  name="EmailID"
                  value={userData.EmailID}
                  onChange={postUserData}
                  />
            </div>
            <div className="mb-3">
               <label className="form-label" for="message">Message</label>
               <textarea 
                  className="form-control" 
                  id="message" 
                  type="text" 
                  placeholder="Message"
                  name="Message"
                  value={userData.Message}
                  onChange={postUserData}>
               </textarea>
            </div>
            <div className="d-grid">
               <button onClick={submitData} className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
         </form>
      </div>
   </div>
</div>
</>
)
}
export default ContactUs;