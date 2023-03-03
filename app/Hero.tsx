'use client'
import style from "@/styles/Home.module.css"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Hero() {
  return (
    <ParallaxProvider>
        <div className={style.hero}>
            <div className={style.heroText__container}>
                <Parallax speed={-20} className={style.heroText}>SOW PROSPERITY</Parallax>
            </div>
            <div className={style.heroText__container}>
                <Parallax speed={20} className={style.heroText}>HARVEST SUCCESS</Parallax>
            </div>
        </div>
    </ParallaxProvider>
  )
}
