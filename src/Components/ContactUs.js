// 

import { Formik } from 'formik';
import React from 'react'
import "./contactus.css";
const ContactUs = () => {
  return (
    <div>ContactUs
        <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
          <div className="screen-header-ellipsis" />
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +91 333 0000</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input
                className="app-form-control"
                placeholder="NAME"
                defaultValue=""
              />
              
            </div>
            <div className="app-form-group">
                {/* <Formik
                initialValues={{name: "",email: "",contact no: "",message: ""}}
                onSubmit={userSubmit}
                >
                    {({ values, handleChange, handleSubmit})}
                </Formik> */}
            {/* <Formik
                initialValues={{
                  name: "", 
                  email: "", 
                  contact no: ""
                  message: "" }}
                  onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}> */}
                  {/* <!-- Password input --> */}
                {/* <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    value={values.password}
                    onChange={handleChange}
                    
                  />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div> */}

              <input className="app-form-control"

               placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ContactUs;


