import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './forgot.css';

// below validation is old method 
// const validate = values => {
//   var errors = {}
//   if (!values.email) {
//     errors.email = "Please Enter the Email!"
//     console.log(errors.email);
//   }
//   return errors;
// }

const Forgot = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    // this val schema is a new meth of validation form 
    validationSchema: yup.object({
      email: yup.string().email().required('Please Enter the Email!')
    }),
    onSubmit: UserInput => {
      console.log(UserInput);
    }
  })

  return (
    <div className="background">
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className="row d-flex  justify-content-center">
            <div className='col-md-5 top'>
              <div className="card">
                <img src={require('../images/nipp.png').default} class="rounded mx-auto d-block mt-3" alt="" height={100} width={100} />
                <div className="card-body" >
                  <div className="form-group">
                    <label for="forgot password" id="fp" >Forgot Password</label> <br />
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />

                    {formik.errors.email ?
                      <div className="text-danger" style={{ fontSize: '13px' }}> {formik.errors.email} </div>
                      : null}

                    <br />
                  </div>
                </div>
                <div className="text-center ">
                  <button type="submit" className="btn btn-primary btn-md mb-3" >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forgot;