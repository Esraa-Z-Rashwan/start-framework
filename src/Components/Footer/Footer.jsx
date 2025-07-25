import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return <>
    <footer className={`${styles.mainBg} text-white pt-5`}>
      <div className="container">
        <div className="card-group m-4">


          <div className="card bg-transparent border-0">
            <div className="card-body text-center text-white">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>


          <div className="card bg-transparent border-0 text-white">
            <div className="card-body text-center">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex justify-content-center gap-2">
                <div className={`${styles.iconCircle}`}><i className={`${styles.icon} fa-brands fa-facebook icon`}></i></div>
                <div className={`${styles.iconCircle}`}><i className={`${styles.icon} fa-brands fa-twitter icon`}></i></div>
                <div className={`${styles.iconCircle}`}><i className={`${styles.icon} fa-brands fa-linkedin-in icon`}></i></div>
                <div className={`${styles.iconCircle}`}><i className={`${styles.icon} fa-solid fa-globe icon`}></i></div>
              </div>
            </div>
          </div>


          <div className="card bg-transparent border-0 text-white">
            <div className="card-body text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div>

        </div>


        
      </div>
      <div className={`${styles.copyBg} text-center py-4`}>
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
    </footer>
  </>
}
