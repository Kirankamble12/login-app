import React from "react";
import { ReactDOM } from "react";
import Form from "./Form";
import data from "/db.json";

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
            <Form onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <h3>Fill out below information</h3>
            </Form>
        </div>
    )
}