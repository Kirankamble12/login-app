import React from "react";
import Registration from "./Registration";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
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
        event.preventDefault()

        if (formData.password === formData.conpassword) {
            console.log("Successfully signed up!..");
        }
        else {
            console.log("Password do not match!..");
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Submit</h1>
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
        </div>
    )
}