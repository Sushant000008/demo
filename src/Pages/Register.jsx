import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <>
    <Formik 
    initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .required('firstname is mandatory')
        .max(20,'must be 20 character or less'),
        lastname:Yup.string()
        .required('lastname is mandatory')
        .max(20,'must be 20 character or less'),
        email:Yup.string()
        .email('invlid email formate')
        .required('email is mandatory'),
        password:Yup.string()
        .required('password is mandatory')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.[@#$?-_&!])[A-Za\d@#$?-_&!]{8,50}$/,'weak password.password must be atleast of 8 character and should be like:A@DGFG')})}


    >
    
        <div className="container my-4 ">
            <div row d-flex jiustify-content-center >
                <div className="col-md-5 shadow-lg">
                    <Form>
                        <div className='mb-2'>
                            <label htmlFor='firstname'>FirstName</label>
                            <Field type='text' name='firstname' id='firstname'className='Form-control'>
                                <ErrorMessage name='firstname'>
                                    {msg => <div style={{color:'red'}}>msg</div>}
                                </ErrorMessage>

                            </Field>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='lastname'>LastName</label>
                            <Field type='text' name='lastname' id='lastname'className='Form-control'>
                                <ErrorMessage name='lastname'>
                                    {msg => <div style={{color:'red'}}>msg</div>}
                                </ErrorMessage>

                            </Field>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'>Email</label>
                            <Field type='text' name='email' id='email'className='Form-control'>
                                <ErrorMessage name='email'>
                                    {msg => <div style={{color:'red'}}>msg</div>}
                                </ErrorMessage>

                            </Field>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Password</label>
                            <Field type='text' name='passsword' id='password'className='Form-control'>
                                <ErrorMessage name='password'>
                                    {msg => <div style={{color:'red'}}>msg</div>}
                                </ErrorMessage>

                            </Field>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='cpassword'>Conform Password</label>
                            <Field type='text' name='cpasssword' id='cpassword'className='Form-control'>
                                <ErrorMessage name='cpassword'>
                                    {msg => <div style={{color:'red'}}>msg</div>}
                                </ErrorMessage>

                            </Field>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </Formik>
    </>
  )
}

export default Register