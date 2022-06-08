import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RAHMA CITY!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to RahMa!" />
        <p className="description">
          Get started C50 madinat RAHMA
        </p>
      </main>

      <Footer />
    </div>
  )
}
