import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import {init, sendForm } from 'emailjs-com';
init("user_10fjvwDAhJO2tzjJ3NOfh");

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const contactNumber = Math.random() * 1000000 | 0;

  const onSubmit = data => {
    const form = document.querySelector('#contact-form')
    const successMsg = document.querySelector('.success-message')

    sendForm('default_service', 'template_cv55kbl', 'contact-form')
      .then(r => console.log('SUCCESS!', r.status, r.text), error => console.log('FAILED...', error));
    form.reset();
    
    successMsg.className = 'success-message sent';
    setTimeout(()=> {
      successMsg.className = 'success-message'
    }, 4000)
  };


  const name = watch('name') || "";
  // eslint-disable-next-line
  const nameCharsLeft = 30 - name.length;

  const message = watch('message') || "";
  const messageCharsLeft = 1000 - message.length;

  return (
    <div className="App-main contact">
      <h1 className='App-main-title'>Contact</h1>
      <p className='success-message'>Message sent!</p>
      <form className='contact-form' id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='contact-form-fields'>
          <input type='hidden' name='contact_number' value={contactNumber} />

          {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">Name is required<br/></div>
          )}
          <input type='text' name='user_name' placeholder='Name' 
          maxLength='30'
          aria-invalid={errors.user_name ? "true" : "false"}
          ref={register({ required: true })}/>
          {/* <p className='chars-left'>{nameCharsLeft}</p> */}
          <br/>

        
          {errors.user_email && errors.user_email.type === "required" && (
            <div role="alert">Email is required<br/></div>
          )}
          <input type='email' name='user_email' placeholder='Email' aria-invalid={errors.user_email ? "true" : "false"}
          ref={register({ required: true })}/><br/>


          {errors.message && errors.message.type === "required" && (
            <div role="alert">Message is required<br/></div>
          )}
          <textarea type='text' name='message' placeholder='Message' maxLength='1000'
          aria-invalid={errors.message ? "true" : "false"}
          ref={register({ required: true })}/>
          <p className='chars-left'>{messageCharsLeft}</p>

        </div>
        <br/>
        <input type='submit' className='submit-btn' value='Send' />
      </form>
    </div>
  )
}

export default Contact;