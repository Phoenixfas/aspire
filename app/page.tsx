import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Aspire Ethiopia Home</h1>
    </main>
  )
}
