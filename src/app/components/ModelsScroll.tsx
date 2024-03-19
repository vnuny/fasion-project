"use client";
import '../css/static/modelsScroll.css'

interface BannerPorps {
    images: {
      src: string;
      name: string;
    }[];
    speed: number;
  }
  
  export function ImageSection({ images, speed }: BannerPorps) {
    const imagesStyle = {
      animation: `swipe ${speed}ms linear infinite`,
    };
  
    return (
      <div className='images' style={imagesStyle}>
        {images.map(({ src, name }) => (
          <div className='image' key={name}>
            <div className="avatar">
              <img src={src} alt={name} />
            </div>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    );
  }
  
  export default function Banner({ images, speed }: BannerPorps) {
    return (
      <div className='banner-wrapper'>
        <div className='wrapper'>
          <ImageSection images={images} speed={speed} />
          <ImageSection images={images} speed={speed} />
          <ImageSection images={images} speed={speed} />
        </div>
      </div>
    );
  }