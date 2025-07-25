import React from 'react'
import homeImg from '../../assets/imgi_1_avataaars.svg'
import styles from './Home.module.css'

export default function Home() {
  return <>
    <div className={`${styles.bgColor} vh-100 d-flex flex-column justify-content-center align-items-center text-center`}>
      <div className='p-5'><img src={homeImg} className={`${styles.img} w-100`} alt="Home" /></div>
      <div><h2 className={`${styles.titleText} text-white text-uppercase`}>start Framework</h2></div>
      <div className='d-flex align-items-center justify-content-center mt-3'>
        <div className={`${styles.line} me-3`}></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className={`${styles.line} ms-3`}></div>
      </div>
      <div className='text-white mt-3'><p>Graphic Artist - Web Designer - Illustrator</p></div>
    </div>
  </>
}
