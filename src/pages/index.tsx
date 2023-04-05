import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.scss";
import Navbar from "./../components/Navbar";
import Banner from '@/components/Banner';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />

    </>
  );
}
