import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from './Hero'
import InfiniteAutoScroller from './Scroller'
import Test from './Test'
import ImageFixer from './ImageFixer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <InfiniteAutoScroller />
      <ImageFixer />
      {/* <Test /> */}
    </main>
  )
}
