import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export const Header=()=> {
  return (
    <header>
      <h1>音楽アプリ</h1>
    </header>
  )
}
