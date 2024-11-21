import React from "react";
import { ReactDOM } from "react";




export default function Registration() {
    const [subData, setSubData] = React.useState(
        {
            id: "",
            name: "",
            email: "",
            conpassword: "",
        }
    )
    console.log(subData);
    function handleChange(event) {
        event.preventDefault()
    }
    function handleSubmit(event) {

    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <input type="fname"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="fname"
                    value={subData.fname} /><br />
                <input type="lname"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lname"
                    value={subData.lname} /><br />
                <input type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={subData.email} />
                <br />
                <input type="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={subData.password} /><br />

                <input type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="conpassword"
                    value={subData.conpassword} />

                <br />
                <input type="checkbox"
                    id="keepSigned"
                    checked={subData.keepSigned}
                    onChange={handleChange}
                    name="keepSigned" />
                <label htmlFor="check">Keep me signed in</label><br />
                <a href="/Registration">Don't have account?</a><br />
                <button>Submit</button>
            </form>

        </div>
    )
}