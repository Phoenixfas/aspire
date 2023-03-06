'use client'
import { useRef, useEffect, useState } from "react"
import style from "@/styles/Home.module.css"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

export default function ImageFixer() {
    const [active, setActive] = useState(false)
    const [rTopActive, setRTopActive] = useState(true)

    useEffect(() => {
        const fixer: any = document.getElementById('fixer')
        const fixer_left: any = document.getElementById('fixer_left')
        const fixer_right: any = document.getElementById('fixer_right')
        const trigger: any = document.getElementById('trigger')

        const onScroll = () => {
            const fixerPosition = fixer.offsetTop;
            const scrollPosition = window.scrollY;
            const imageTriggerd =  scrollPosition >= (fixerPosition + ( fixer.clientHeight / 4 ))
            const leftPosition = fixer_left.offsetTop;
            const rightPosition = fixer_right.offsetTop;
            const triggerPosition = trigger.offsetTop;
            
            // console.log(imageTriggerd)
            if(imageTriggerd){
                setActive(true)
            }else{
                setActive(false)
            }

            if (scrollPosition >= leftPosition &&  scrollPosition >= rightPosition) {
                fixer_left.classList.add(style.fixed);
            } else {
                if(scrollPosition >= triggerPosition){
                    // fixer.style.alignItems = 'flex-end';
                }else{
                    // fixer.style.alignItems = 'flex-start';
                }
                fixer_left.classList.remove(style.fixed);
            }



        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
  return (
    <div id="fixer" className={style.fixer}>
        <div id="fixer_left" className={style.fixer__left}>
            <AnimatePresence>
                {active && <div className={style.fixer__left__img}>
                    <Image src="/images/home/coffee.jpg" alt="Coffee" width={500} height={500} />
                </div>}
                {!active && <div className={style.fixer__left__img}>
                    <Image src="/images/home/wheat.jpg" alt="Wheat" width={500} height={500} />
                </div>}
            </AnimatePresence>
        </div>
        <div id="fixer_right" className={style.fixer__right}>
            <div className={style.fixer__right__top}></div>
            <div id="trigger" className={style.fixer__right__bottom}></div>
        </div>
    </div>
  )
}
