import React from 'react'
import styles from './About.module.css'

export default function About() {
  return <>
      <div className={`${styles.bgColor} vh-100 d-flex flex-column justify-content-center align-items-center text-center`}>
        <div className="container">
          <div><h2 className={`${styles.titleText} text-white text-uppercase`}>About Component</h2></div>
        <div className='d-flex align-items-center justify-content-center mt-3'>
          <div className={`${styles.line} me-3`}></div>
          <i className='fa-solid fa-star text-white'></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>
          <div className="row px-5 py-3">
            <div className="col-md-6 ps-md-5">
              <div className="inner text-start text-white"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
             <div className="col-md-6 pe-5">
              <div className="inner text-start text-white"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
          </div>
        </div>

      </div>
    </>
}
