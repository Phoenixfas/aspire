import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from './Hero'
import InfiniteAutoScroller from './Scroller'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <InfiniteAutoScroller />
    </main>
  )
}
