"use client"
import Image from 'next/image'
import styles from '../../css/static/static.module.css'
import logo from '../../../../public/logo.png'
import '../../css/header.css'
import { useState } from 'react'
export default function Header(){
  const [open, setOpen] = useState(false);
  const handleList = (e:any) => {
    if(e.target.checked){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }
    return(
        <header className={styles.header}>
          <a href="/" className={styles.logo}><Image src={logo} alt="logo" width={100} height={100} />FASION</a>
          <nav>
            <a href="">HOME</a>•
            <a href="">RUNWAY</a>•
            <a href="">ABOUT/CONTACT</a>
          </nav>
          <label className="hamburger">
            <input onChange={handleList} type="checkbox"/>
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
          <div style={{height: open ? '151px' : '0'}} className="dropList">
            <a href="">HOME</a>
            <a href="">RUNWAY</a>
            <a href="">ABOUT/CONTACT</a>
          </div>
        </header>
    )
}