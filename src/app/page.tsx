"use client";
import Image from "next/image";
import styles from "./css/static/static.module.css";
import Header from "./components/static/Header";
import waves from "../../public/waves.jpg";
import CaurvedText from "./components/CaurvedText";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import model1 from '../../public/model1.webp';
import model2 from '../../public/model2.webp';
import model3 from '../../public/model3.webp';
import model4 from '../../public/model4.webp';
import Banner from "./components/ModelsScroll";

import logo from '../../public/logo.png';
import logo2 from '../../public/logoLight.png';
import Footer from "./components/Footer";
import ChatAi from "./components/ChatAi";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const pointControl = useAnimation();
  const [maskRadius, setMaskRadius] = useState(10);
  useEffect(() => {
    const mouseMove = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: cursorPosition.x - 5,
      y: cursorPosition.y - 5,
      transition: { duration: 0.2, ease: "circOut"},
    });
  }, [controls, cursorPosition]);

  useEffect(() => {
    pointControl.start({
      x: cursorPosition.x - 25,
      y: cursorPosition.y -25,
      transition: { duration: 0.4, ease: "circOut"},
    });
  }, [pointControl, cursorPosition]);
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
    controls.start({ opacity: 1 });
    pointControl.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    controls.start({ opacity: 0 });
    pointControl.start({ opacity: 0 });
  };
  const  images = [
    { 
      src: 'https://64.media.tumblr.com/5401b0cb8e41f73cc896780ba2d618a1/db627140ce89d863-81/s250x400/370a5cd50c80793152b7392edd4e6e897ea67564.jpg',
      name: 'Gigi Hadid'
    },{
      src: 'https://i.pinimg.com/originals/f8/80/d8/f880d8e859223ecd2fc7dde1c2cb34b4.jpg',
      name: 'Kendall Jenner'
    },
    {
      src: 'https://i.pinimg.com/564x/4b/ae/33/4bae3309bdf5ac8f3e44c1520d006537.jpg',
      name: 'Bella Hadid'
    },
    {
      src: 'https://avatarfiles.alphacoders.com/227/227304.jpg',
      name: 'Adriana Lima'
    },
    {
      src: 'https://en.vogue.me/wp-content/uploads/2021/03/DIOR_GEM_CARA_DELEVINGNE_4-promo.jpg',
      name: 'Cara Delevingne'
    },
    {
      src: 'https://hips.hearstapps.com/hmg-prod/images/karlie-kloss-1549565171.jpg',
      name: 'Karlie Kloss'
    },
    {
      src: 'https://www.byrdie.com/thmb/83QMTRn8BROshtf-g8SZ2InV7wc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/joansmalls-9a0557d732d149ca9f27252171978273.jpg',
      name: 'Joan Smalls'
    },
    {
      src: 'https://images.hellomagazine.com/horizon/square/684da5aa2f39-cindy-t.jpg',
      name: 'Cindy Crawford'
    },
    {
      src: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-622477880.jpg?crop=1xw:1.0xh;center,top&resize=640:*',
      name: 'Naomi Campbell'
    },
    {
      src: 'https://imageio.forbes.com/specials-images/imageserve/6501fad2fbd9c06b113e675b/Tyra-Banks-in-Karen-Millen/960x0.jpg?format=jpg&width=960',
      name: 'Tyra Banks'
    }
  ]
  const [listOpen, setListOpen] = useState(false);
  const handleAiBox = ()=>{
    setListOpen(!listOpen)
  }
  const handleListClose = ()=>{
    setListOpen(false)
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.container}>
      <Header />
        <motion.div
        animate={controls}
        className={styles.point} style={{ pointerEvents: "none"}}></motion.div>
      <div className={styles.curveBox}>
        {!listOpen && <div className={styles.inner}>
          <i className="fa-solid fa-messages"></i>
        </div>}
        {!listOpen && <div className={styles.curveTextBox} onClick={handleAiBox}>
          <CaurvedText text='ASK TO LEARN - ASK TO LEARN - ASK TO LEARN - ' />
        </div>}
        {listOpen && <ChatAi close={handleListClose}/>}
      </div>
      <main className={styles.main}>
        <h1>
          ELEVATE YOUR STYLE WITH <span>US</span>.
        </h1>
        <Image width={1000} height={1000} src={waves} alt="wavys" />
      </main>
      <section className={styles.runwaysec}>
        <div className={styles.nestSec}>
          <Image src={model1} alt='model'/>
          <div className={styles.text}>
            <h2>01.RUNWAY</h2>
            <p>Modeling runway style is an art form that embodies elegance, confidence, and creativity. As models strut down the catwalk, they showcase the latest designs with poise and precision, captivating audiences with every step. From the graceful movements to the fierce expressions, each element contributes to the allure of runway style. It's not just about wearing clothes; it's about embodying a vision, transforming fabric into a statement, and leaving an unforgettable impression in the minds of onlookers. Runway style celebrates individuality while setting trends and pushing boundaries in the world of fashion.</p>
            <p>Though the job of a runway model may seem easy and fun, it can be quite difficult. The days of a runway show are very long and often include multiple fittings and rehearsals. Models must also be willing to wear swimsuits, lingerie, or other revealing clothing and wear shoes that are incredibly uncomfortable or don't fit properly. However, even if they are extremely uncomfortable or do not have properly fitting shoes, they will still be expected to walk well and confidently while ensuring that all the garment aspects are being shown off correctly and as the designer requested. They may also have multiple looks within one show, and quickly changing from one complicated look into another can be pretty tedious. </p>
          </div>
        </div>
        <div className={styles.nestSec}>
          <div className={styles.text}>
            <h2>02.FASION STYLES</h2>
            <p>Fashion styles encompass a vast array of options, each reflecting a unique personality and taste. From the relaxed vibes of casual wear to the refined elegance of formal attire, there's a style for every occasion and mood. Whether you're drawn to the simplicity of minimalist fashion, the free-spirited charm of bohemian attire, or the rebellious edge of streetwear, expressing yourself through clothing is an art form. Experimenting with different styles allows you to discover what resonates most with your identity, helping you curate a wardrobe that speaks volumes about who you are. Ultimately, fashion is about embracing what feels authentic and empowering, letting your personal style shine through with confidence and flair.</p>
            <p>Casual fashion style is all about effortless comfort and relaxed elegance. It's the go-to choice for those who want to look fashionable without putting in too much effort. Casual attire typically consists of comfortable basics like jeans, t-shirts, sweaters, and sneakers. The key is to create a laid-back yet stylish look that can be worn on a daily basis or for casual outings. This style emphasizes comfort and practicality while still allowing room for personal flair through choice of colors, textures, and accessories. Whether you're running errands or meeting friends for brunch, casual fashion lets you express yourself in a comfortable and chic way.</p>
          </div>
          <Image src={model2} alt='model'/>
        </div>
        <div className={styles.nestSec}>
          <div id="mask" className={styles.mask}></div>
          <Image src={model3} alt='model'/>
          <div className={styles.text}>
            <h2>03.FASION JOURNEY</h2>
            <p>Fashion has undergone a transformative journey from ancient history to the contemporary era, reflecting the evolution of societies, cultures, and technologies. In ancient civilizations, such as ancient Egypt and Mesopotamia, clothing served not only as a form of protection but also as a symbol of social status and cultural identity, with intricate designs and materials denoting wealth and power. Throughout the medieval period, clothing styles were largely dictated by one's social class, with sumptuary laws regulating what individuals could wear based on their rank.</p>
            <p>The Renaissance era saw a shift towards more elaborate and ornate clothing, showcasing intricate tailoring and luxurious fabrics favored by the aristocracy. The Industrial Revolution heralded significant changes in fashion, with mass production leading to the democratization of clothing and the emergence of fashion as a consumer-driven industry. Twentieth-century fashion witnessed unprecedented innovation and experimentation, with the rise of haute couture houses, ready-to-wear lines, and the influence of subcultures shaping mainstream trends. Today, fashion is characterized by its diversity, inclusivity, and rapid cycles of change, propelled by globalization, technology, and the democratization of design through social media platforms, reflecting a dynamic interplay between tradition, innovation, and individual expression.</p>
          </div>
        </div>
      </section>
      <section className={styles.autoScrollSec}>
        <Banner speed={20000} images={images}/>
      </section>
      <section className={styles.contactSec}>
        <h1>CONTACT US</h1>
        <div className={styles.Cbox}>
          <div className={styles.contactBox}>
            <h2>GET IN TOUCH</h2>
            <p>Fill out the form below to get in touch with us. We will get back to you as soon as possible.</p>
            <form action="">
              <input type="text" placeholder="NAME"/>
              <input type="email" placeholder="EMAIL"/>
              <textarea placeholder="YOUR MESSAGE"></textarea>
              <button type="submit"><i className="fa-solid fa-arrow-right"></i> Submit</button>
            </form>
          </div>
          <div className={styles.aboutBox}>
            <div className={styles.top}>
                <Image src={logo2} alt="logo"/>
                <h2>FASION</h2>
            </div>
            <p>Welcome to Model, where we turn dreams into reality. From runways to shoots, we're your portal to the fashion world. Our embrace of diversity celebrates every model's uniqueness. Join us in redefining beauty standards. Welcome to a world where your aspirations know no bounds.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
