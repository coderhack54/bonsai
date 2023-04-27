import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.scss";
import Navbar from "./../components/Navbar";
import Banner from '@/components/Banner';
import Addons from '@/components/Addons';
import Footer from './../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Addons />
      <Footer />
    </>
  );
}
