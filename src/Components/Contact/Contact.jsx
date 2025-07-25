import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return <>
        <div className={`vh-100 d-flex flex-column justify-content-center align-items-center `}>
          <div className="container">
            <div><h2 className={`${styles.titleText} text-center text-uppercase`}>conatct section
</h2></div>
          <div className='text-center d-flex align-items-center justify-content-center mt-3'>
            <div className={`${styles.line} me-3`}></div>
            <i className={`${styles.icon} fa-solid fa-star`}></i>
            <div className={`${styles.line} ms-3`}></div>
          </div>
            
          <form className='w-50 p-3 mx-auto mt-5'>
  <div className="form-floating mb-3">
  <input type="text" className="form-control border-0 border-bottom" id="userNameInput" placeholder="name@example.com"/>
  <label htmlFor="userNameInput">userName</label>
</div>
  <div className="form-floating mb-3">
  <input type="text" className="form-control  border-0 border-bottom" id="userAgeInput" placeholder="name@example.com"/>
  <label htmlFor="userAgeInput">userAge</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control  border-0 border-bottom" id="userEmailInput" placeholder="name@example.com"/>
  <label htmlFor="userEmailInput">userEmail</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control  border-0 border-bottom" id="userPasswordInput" placeholder="name@example.com"/>
  <label htmlFor="userPasswordInput">userPassword</label>
</div>
<button type="submit" className={`${styles.button} btn text-white mt-4`}>Send Message</button>

</form>

          </div>
  
        </div>
      </>
}
