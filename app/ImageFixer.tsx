'use client'
import { useRef, useEffect, useState } from "react"
import style from "@/styles/Home.module.css"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';
import Link from "next/link"

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
            {active && <div className={style.fixer__leftText}>
                Lorem ipsum dolor sit
            </div>}
            {!active && <div className={style.fixer__leftText}>
                consectetur adipisicing elit
            </div>}
            <AnimatePresence>
                <div className={`${style.fixer__left__img} ${active && style.fixer__leftVisible}`}>
                    <Image src="/images/home/coffee.jpg" alt="Coffee" width={500} height={500} />
                </div>
                <div className={`${style.fixer__left__img} ${!active && style.fixer__leftVisible}`}>
                    <Image src="/images/home/wheat.jpg" alt="Wheat" width={500} height={500} />
                </div>
            </AnimatePresence>
        </div>
        <div id="fixer_right" className={style.fixer__right}>
            <div className={style.fixer__right__top}>
                <div className={style.fixer__right__top__title}>
                    Lorem ipsum
                </div>
                <div className={style.fixer__right__top__content}>
                    <div className={style.fixer__right__top__text}>
                        {/* <Player autoplay loop src="https://assets7.lottiefiles.com/private_files/lf30_4lyswkde.json" style={{ height: '150px', width: '100px' }} /> */}
                        <Image src="/images/home/growth.png" alt="growth" width={500} height={500} />
                        <div>
                            <p><span>Growth</span></p>
                            <p>Lorem ipsum dolor  veniam voluptatum libero voluptates!</p>
                        </div>
                    </div>
                    <div className={style.fixer__right__top__text}>
                        {/* <Player autoplay loop src="https://assets7.lottiefiles.com/private_files/lf30_4lyswkde.json" style={{ height: '150px', width: '100px' }} /> */}
                        <Image src="/images/home/barn.png" alt="barn" width={500} height={500} />
                        <div>
                            <p><span>Industry</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur aperiam ipsam nesciunt!</p>
                        </div>
                    </div>
                </div>
                <div className={style.fixer__right__top__footer}>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dignissimos voluptas quae pariatur velit saepe! Repellendus fugiat excepturi ad, quae officia animi accusamus nihil repellat.</p>
                    <Link href="/">
                        Learn More
                    </Link>
                </div>
            </div>
            <div id="trigger" className={style.fixer__right__bottom}>
                <div className={style.fixer__right__top__title}>
                    Discover
                </div>
                <div className={style.fixer__right__top__content}>
                    <div className={style.fixer__right__bottom__text}>
                        <Image src="/images/home/tomato.jpg" alt="tomato" width={500} height={500} />
                        <div>
                            <p><span>Lorem</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit distinctio corporis nulla maxime praesentium accusamus.</p>
                        </div>
                    </div>
                    <div style={{borderLeft:"5px solid #000", height: "100%"}}></div>
                    <div className={style.fixer__right__bottom__text}>
                        <Image src="/images/home/watermelon.jpg" alt="watermelon" width={500} height={500} />
                        <div>
                            <p><span>Ipsum</span></p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae dolor accusamus error reprehenderit hic similique minima?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
