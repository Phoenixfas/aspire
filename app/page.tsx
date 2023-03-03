import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from './Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}
