import React from 'react';

// const handleSubmit = (e) => {
//   e.preventDefault()
//   const name = e.target[0].value
//   const email = e.target[1].value
//   const message = e.target[2].value
//   // debugger
//   alert(`Name: ${name}, email: ${email}, Message: ${message}`)
//   // console.log(e)
// }

const Contact = () => <div className="App-main contact">
  <h1 className='App-main-title'>Contact</h1>
  {/* <form className='email-form' onSubmit={(e)=> handleSubmit(e)}>
    <div className='email-form-fields'>
      <label htmlFor='name'>Name </label>
      <input type='text' name='name' placeholder='Name' /><br/>
      <label htmlFor='email'>email </label>
      <input type='email' name='email' placeholder='email' /><br/>
      <label htmlFor='message'>Message </label>
      <textarea type='text' name='message' rows='5' cols='80' placeholder='Your message here' />
    </div>
    <input type='submit' value='Go' />
  </form> */}
  {/* <a href='https://www.freepik.com/vectors/background' style={{color: 'white'}}>Background vector created by pikisuperstar - www.freepik.com</a> */}
</div>

export default Contact;