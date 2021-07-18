import React from "react";
import { useState } from 'react'
function Contact() {
    const [data, setData] = useState({
        fullname: "",
        mobile: "",
        email: "",
        msg: ""
    });
    const formsubmit = (e) => {
        e.preventDefault();
        alert(` 
               ThankYou For Contacting US!
               My Name is ${data.fullname}
               Mobile number is ${data.mobile}
               Email Id is ${data.email}
               Message :> ${data.msg}`)
    }
    const InputEvent = (event) => {
        const { name, value } = event.target
        setData((preval) => {
            return {
                ...preval,
                [name]: value

            }
        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                <input type="number" class="form-control" name="mobile" value={data.mobile} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3" placeholder="write here..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;