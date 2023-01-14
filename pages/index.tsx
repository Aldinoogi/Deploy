import type { NextPage } from 'next'
import Head from 'next/head'
import { CTA, ContactForm, Hero, Slider, SliderData, Card, Portfolio } from '../components'

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <Head>
        <title> Beranda | PT BSL </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <CTA />

      <Card />

      <Portfolio />

      <ContactForm />

    </div>
  )
}

export default Home