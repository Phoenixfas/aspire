import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from './Hero'
import InfiniteAutoScroller from './Scroller'
import Test from './Test'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <InfiniteAutoScroller />
      <Test />
    </main>
  )
}
