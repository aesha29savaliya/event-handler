import React, { useState } from 'react';

const Form = () => {
     const [formData, setFormData] = useState({
          name: '',
          email: ''
     });
     const [getdata, setGetdata] = useState([])

     const handleInputChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });
     };



     const handleSubmit = (e) => {
          e.preventDefault();
          setGetdata([...getdata, formData])

          setFormData({
               name: '',
               email: ''
          })
     };

     return (
          <div>
               <h1>File Upload Form</h1>
               <form onSubmit={handleSubmit}>

                    <label>
                         Name:
                         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                         Email:
                         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </label>
                    <br />

                    <button type="submit">Submit</button>
               </form>

               <div>
                    {
                         getdata.map((e, index) => {
                              return (
                                   <div key={index}>
                                        <p>{e.name}</p>
                                        <p>{e.email}</p>
                                   </div>
                              )
                         })
                    }
               </div>
          </div>
     );
};

export default Form;
