import React from 'react'
import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="heading m-4   ">
              <span className="rounded shadow p-3">Contact me</span>
            </div>
            <form className="container shadow d-flex justify-content-center flex-column align-items-center form   ">
                <div className="row d-flex justify-content-center align-items-center flex-column  mb-3">
                    <div className="col-12">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col ">
                            <input type="text" className="form-control email" id="inputEmail3" autoComplete="off"  />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col ">
                            <input type="email" className="form-control email" id="inputEmail3" autoComplete="off" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Message</label>
                        <div className="col ">
                           <textarea className="email h-75 rounded-3 p-2" name="" id="" cols="10" rows="10"></textarea>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary submit mb-3">SUBMIT</button>
            </form>
        </>
    )
}

export default Contact
