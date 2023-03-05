'use client'
import style from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import items from '@/data/items';
import Image from 'next/image';
import { ImLeaf } from 'react-icons/im';

export default function InfiniteAutoScroller() {
    // Define state variables for the scroll position and whether the mouse is hovering
    // const [scrollPos, setScrollPos] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
  
    // Define an effect to update the scroll position every 50 milliseconds
    useEffect(() => {
      const scroller: any = document.getElementById('scroller');
      const scrollerWidth = scroller.clientWidth;
      scroller.style.setProperty('--scroll-width', `${-scrollerWidth/3}px`);


      if (isHovering) {
        scroller.classList.add(style.pause);
      }else{
        scroller.classList.remove(style.pause);
      }
      // const interval = setInterval(() => {
      //   if (!isHovering) {
      //     if (scrollPos >= scrollerWidth) setScrollPos(0);
      //     setScrollPos((scrollPos) => scrollPos + 1);
      //   }
      // }, 5);
  
      // return () => clearInterval(interval);
    }, [isHovering]);
  
    // Define an event handler for when the mouse enters the container
    function handleMouseEnter() {
      setIsHovering(true);
    }
  
    // Define an event handler for when the mouse leaves the container
    function handleMouseLeave() {
      setIsHovering(false);
    }
  
    return (
      <div className={style.autoScroller}>
          <h2 className={style.scroller__title}>OUR PRODUCTS</h2>
          <div
              className={style.infinite_auto_scroller}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          >
              <div id='scroller' className={style.content}>
                  {items.map((item, index) => (
                    <div key={index} className={style.scroll__item}>
                      <div className={style.scroll__itemImg}>
                        <Image src={item.image} alt={item.title} width={300} height={300} quality={100} priority />
                        <div className={style.scroll__itemImg__icon}>
                          <ImLeaf />
                        </div>
                      </div>
                      <div className={style.scroll__itemContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                  {items.map((item, index) => (
                    <div key={index} className={style.scroll__item}>
                      <div className={style.scroll__itemImg}>
                        <Image src={item.image} alt={item.title} width={300} height={300} quality={100} priority />
                        <div className={style.scroll__itemImg__icon}>
                          <ImLeaf />
                        </div>
                      </div>
                      <div className={style.scroll__itemContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                  {items.map((item, index) => (
                    <div key={index} className={style.scroll__item}>
                      <div className={style.scroll__itemImg}>
                        <Image src={item.image} alt={item.title} width={300} height={300} quality={100} priority />
                        <div className={style.scroll__itemImg__icon}>
                          <ImLeaf />
                        </div>
                      </div>
                      <div className={style.scroll__itemContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
          </div>
          <div className={style.scroll__moreBtn}>
            more
          </div>
      </div>
    );
}
  