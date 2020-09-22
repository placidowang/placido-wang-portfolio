import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import{ init } from 'emailjs-com';
init("user_10fjvwDAhJO2tzjJ3NOfh");

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  const name = watch('name') || "";
  const nameCharsLeft = 30 - name.length;

  const message = watch('message') || "";
  const messageCharsLeft = 500 - message.length;

  return (
    <div className="App-main contact">
      <h1 className='App-main-title'>Contact</h1>
      <form className='email-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='email-form-fields'>
          <input type='hidden' name='contact_number'/>

          {errors.name && errors.name.type === "required" && (
            <div><span role="alert">Name is required</span><br/></div>
          )}
          <input type='text' name='name' placeholder='Name' 
          maxLength='30'
          aria-invalid={errors.name ? "true" : "false"}
          ref={register({ required: true })}/>
          {/* <p className='chars-left'>{nameCharsLeft}</p> */}

          {errors.email && errors.email.type === "required" && (
            <div><span role="alert">Email is required</span><br/></div>
          )}
          <input type='email' name='email' placeholder='Email' aria-invalid={errors.email ? "true" : "false"}
          ref={register({ required: true })}/><br/>


          {errors.message && errors.message.type === "required" && (
            <div><span role="alert">Message is required</span><br/></div>
          )}
          <textarea type='text' name='message' placeholder='Message' maxLength='500'
          aria-invalid={errors.message ? "true" : "false"}
          ref={register({ required: true })}/>
          <p className='chars-left'>{messageCharsLeft}</p>

        </div>
        <br/>
        <input type='submit' className='submit-btn' value='Send' />
      </form>
      {/* <a href='https://www.freepik.com/vectors/background' style={{color: 'white'}}>Background vector created by pikisuperstar - www.freepik.com</a> */}
    </div>
  )
}

export default Contact;