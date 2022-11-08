import React, { useEffect, useState } from 'react';
import  ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css'
import {GalleryModal} from './Modal'
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const ImageComponent = ({image, openModal, index}) => {
    const date = new Date(Date(image.date));
    const dateText = `${month[date.getMonth() ]} ${date.getDate()}, ${date.getFullYear()}`
    return (
        <div className='image-container' onClick={(e) => openModal(e, index)}>
            <div className='image-element'>
                <img src = {image.thumbnail.small} alt = 'myimage'/>
            </div>
            <div className='dot'>
                <p className='blue'></p>
                <p className='yellow'></p>
            </div>
            <div className='image-header'>{image.title}</div>
            <div className='image-text'>{image.content}</div>
            <div className='image-footer'>
                <p>{image.author.name} - {image.author.role}</p>
                <p>{dateText}</p>
            </div>
        </div>
    )
}
const Gallery = (props) => {
    const [index, setIndex] = useState(null);
    const [images, setImages] = useState([])
    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then(res => {
            setImages(res.data)
        })
    }, [])
    const openModal = (e, index) => {
        setIndex(index);
    }
    const closeModal = (e) => {
        if (e != undefined) {
          e.preventDefault();
        }
        setIndex (null);
    }
    return (
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((image, index) => {
                return (<ImageComponent image={image} openModal = {openModal} index = {index} key={index}/>)
            })}
          </div>
          <GalleryModal 
            closeModal={closeModal} 
            image={images[index]} 
          />
        </div>
      )
}
const root = ReactDOM.createRoot(
    document.getElementById('root') 
  );
  root.render(
    <React.StrictMode>
      <Gallery/>
    </React.StrictMode>
  );
  

