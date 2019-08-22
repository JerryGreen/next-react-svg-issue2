import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '~/nav'
import Shape from '@assets/shape.svg'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <div className='titleBlock'>
        <h1 className='title'>Welcome to Next.js!</h1>
        <Shape className='icon' />
      </div>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className='row'>
        <Link href='https://github.com/zeit/next.js#setup'>
          <a className='card'>
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on GitHub and in their examples.</p>
          </a>
        </Link>
        <Link href='https://github.com/zeit/next.js/tree/master/examples'>
          <a className='card'>
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </Link>
        <Link href='https://github.com/zeit/next.js'>
          <a className='card'>
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        color: #333;
      }
      .titleBlock {
        text-align: center
      }
      .title {
        display: inline;
        margin: 0;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .icon {
        display: inline;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
