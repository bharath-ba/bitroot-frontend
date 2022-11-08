import React from "react";
import "./index.css";
export const GalleryModal = (props) => {
  const { closeModal, image } = props;

  if (!image) {
    return null;
  }
console.log('9: ', props)
  return (
    <div className="modal-container" >
      <div className="modal-overlay" >
      
      </div>
      <div className="modal" isOpen={!!image} >
        <p className="close" onClick={closeModal}> </p>
        <div className="modal-body">
          <img src={image.thumbnail.large} alt = 'myimage'/>
          <div className='image-header'>{image.title}</div>
            <div className='image-text'>{image.content}</div>
            <div className='avatar-footer'>
                <img className = 'avatar-person' src = {image.author.avatar} alt='avatar'/>
                <p>{image.author.name} - {image.author.role}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
