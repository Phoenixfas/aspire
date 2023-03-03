'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { FaSignInAlt } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenu } from "react-icons/hi"

export default function Navbar() {
    const mobileRef: any = useRef(null)
    const [mobile, setMobile] = useState(false)
    
    const toggleMobile = () => {
        
        setMobile(!mobile)
    }

     // hide and show the header based on the scroll direction
  useEffect(() => {
    if (mobile) {
        mobileRef.current.style.transform = 'translateX(0%)'
    } else {
        mobileRef.current.style.transform = 'translateX(100%)'
    }

    var lastScrollTop = 0
    const header: HTMLElement|any = document.getElementById('header')
    window.addEventListener("scroll", function(){
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        header.style.transform = 'translateY(-100%)'
      } else {
        header.style.transform = 'translateY(0%)'
      }
      lastScrollTop = st;
    })

    return removeEventListener('scroll', () => {})
  }, [mobile])


  return (
    <>
        <div id='header' className='nav'>
            <div className="navItems__container">
                <div className="nav__logo">
                    <Image src="/icon_light.png" alt="logo" fill />
                </div>
            </div>
            <div className="navItems__container">
                <div className="navItems">
                    <Link href={"/"} className="navItems__item">ABOUT</Link>
                    <Link href={"/"} className="navItems__item">SOMETHING</Link>
                    <Link href={"/"} className="navItems__item home">
                        <span>ASPIRE</span>
                        <svg>
                            <text
                                fill='white'
                                x="0"
                                y="90"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform="rotate(180 50 50)"
                            >
                                ETHIOPIA
                            </text>
                        </svg>
                    </Link>
                    <Link href={"/"} className="navItems__item">SERVICE</Link>
                    <Link href={"/"} className="navItems__item">CONTACT US</Link>
                </div>
            </div>
            <div className="navItems__container">
                <Link href={"/"} className="nav__signIn">
                    <span>sign in</span>
                    <FaSignInAlt />
                </Link>
            </div>
            <div className="nav__mobile" onClick={() => toggleMobile()}>
                <div className="nav__menuContainer">
                    <HiOutlineMenu />
                </div>
            </div>
        </div>


        <div ref={mobileRef} className="navItems__container__mobile">
            <div className="mobile__close" onClick={() => toggleMobile()}>
                <AiOutlineClose />
            </div>
            <div className="navItems__mobile">
                <Link href={"/"} className="navItems__item">ABOUT</Link>
                <Link href={"/"} className="navItems__item">SOMETHING</Link>
                <Link href={"/"} className="navItems__item home">
                    <span>ASPIRE</span>
                    <svg>
                        <text
                            fill='white'
                            x="-50"
                            y="80"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform="rotate(180 50 50)"
                        >
                            ETHIOPIA
                        </text>
                    </svg>
                </Link>
                <Link href={"/"} className="navItems__item">SERVICE</Link>
                <Link href={"/"} className="navItems__item">CONTACT US</Link>
            </div>
            <Link href={"/"} className="nav__signIn">
                <span>Sign In</span>
                <FaSignInAlt />
            </Link>
        </div>
    </>
  )
}
