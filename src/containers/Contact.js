import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

// const handleSubmit = (e) => {
//   e.preventDefault()
//   const name = e.target[0].value
//   const email = e.target[1].value
//   const message = e.target[2].value
//   // debugger
//   alert(`Name: ${name}, email: ${email}, Message: ${message}`)
//   // console.log(e)
// }

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch('name'));

  return (
    <div className="App-main contact">
      <h1 className='App-main-title'>Contact</h1>
      <form className='email-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='email-form-fields'>
          {/* <label htmlFor='name'>Name </label> */}
          <input type='text' name='name' placeholder='Name' 
          // ref={register} 
          aria-invalid={errors.name ? "true" : "false"}
        ref={register({ required: true, maxLength: 30 })}/><br/>
              {/* use role="alert" to announce the error message */}
      {errors.name && errors.name.type === "required" && (
        <div><span role="alert">This is required</span><br/></div>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <div><span role="alert">Max length exceeded</span><br/></div>
      )}
          {/* <label htmlFor='email'>email </label> */}
          <input type='email' name='email' placeholder='Email' ref={register}/><br/>
          {/* <label htmlFor='message'>Message </label> */}
          <textarea type='text' name='message' 
          // rows='5' cols='80' 
          placeholder='Message' ref={register}/>
        </div>
        <input type='submit' className='submit-btn' value='Go' />
      </form>
      {/* <a href='https://www.freepik.com/vectors/background' style={{color: 'white'}}>Background vector created by pikisuperstar - www.freepik.com</a> */}
    </div>
  )
}

export default Contact;