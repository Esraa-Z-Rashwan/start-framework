import React, { useState } from 'react';
import styles from './Portfolio.module.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'


export default function Portfolio() {


    const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };



  return (
  <>
    <div className="py-5 d-flex flex-column justify-content-center align-items-center">
      <div className="container pt-5 mt-5">
        <div>
          <h2 className={`${styles.titleText} text-center text-uppercase`}>
            portfolio component
          </h2>
        </div>

        <div className="text-center d-flex align-items-center justify-content-center mt-3">
          <div className={`${styles.line} me-3`}></div>
          <i className={`${styles.icon} fa-solid fa-star`}></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <div className="row g-5 mt-2">

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img1} className="w-100 rounded-3 overflow-hidden" alt="Home" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img1)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img2} className="w-100 rounded-3 overflow-hidden" alt="Cake" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img2)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img3} className="w-100 rounded-3 overflow-hidden" alt="Circus" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img3)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img1} className="w-100 rounded-3 overflow-hidden" alt="Home" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img1)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img2} className="w-100 rounded-3 overflow-hidden" alt="Cake" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img2)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
            <div className="inner rounded-3 position-relative">
              <img src={img3} className="w-100 rounded-3 overflow-hidden" alt="Circus" />
              <div className={`${styles.hoverLayout} rounded-3`}
                onClick={() => openLightbox(img3)}>
                <i className={`${styles.plusIcon} fa-solid fa-plus fa-6x text-white`}></i>
              </div>
            </div>
          </div>

        </div> 
      </div> 
    </div> 




    {selectedImage && (
        <div className={`${styles.lightboxOverlay} bg-primary bg-opacity-25`} onClick={closeLightbox}>
          <img src={selectedImage} alt="Enlarged" className={styles.lightboxImage} />
        </div>
      )}
  </>
);

}
