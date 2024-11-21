import React, { useEffect } from "react";



export default function Form() {
    /* const [formData, setFormData] = React.useState(
         {
             fname: "",
             lname: "",
             email: "",
             password: "",
             conpassword: "",
             keepSigned: true
         }
     )
     console.log(formData)
 
     function handleChange(event) {
         setFormData(prevFormData => {
             const { name, value, type, checked } = event.target
             return {
                 ...prevFormData,
                 [name]: type === "checkbox" ? checked : value
             }
         }
 
         )
     }
     function handleSubmit(event) {
         event.preventDefault();
 
     }
     useEffect(() => {
         fetch('http://localhost:8000/userInfo')
             .then(res => {
                 return res.json()   //asynchronous
             })
             .then((data) => {
 
                 setFormData(data)
             })
 
     }, []); */
    return (
        /*<div>
 
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <input type="fname"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="fname"
                    value={formData.fname} /><br />
                <input type="lname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lname"
                    value={formData.lname} /><br />
                <input type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email} />
                <br />
                <input type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password} /><br />
 
                <input type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="conpassword"
                    value={formData.conpassword} />
 
                <br />
                <input type="checkbox"
                    id="keepSigned"
                    checked={formData.keepSigned}
                    onChange={handleChange}
                    name="keepSigned" />
                <label htmlFor="check">Keep me signed in</label><br />
                <a href="/Registration">Don't have account?</a><br />
                <button>Submit</button>
            </form>
        </div> */
        <div>
            <div>THis is login</div>
        </div>
    )
}