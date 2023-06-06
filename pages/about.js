import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';

const about = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src='/logo.png' width={100} />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" href="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <div >
          <h1 className='text-4xl'>About PWA with Next JS</h1>
        </div>

        <div className={styles.grid}>

        <Link className={styles.card} href="/about">
            <h2>
              About PWA<span>-&gt;</span>
            </h2>
            <p>
              Learn more about PWA 
            </p>
          </Link>

          <a
            href="https://github.com/ervkgithub/pwa-next-poc"
            className={styles.card}
            target="_blank"
          >
            <h2>
              Gihub <span>-&gt;</span>
            </h2>
            <p>
              Github Path Url
            </p>
          </a>

          <a
            href="https://www.npmjs.com/package/next-pwa"
            className={styles.card}
            target="_blank"
          >
            <h2>
              Next-PWA <span>-&gt;</span>
            </h2>
            <p>
            Learn more about next-pwa
            </p>
          </a>

          <a
            href="https://tailwindcss.com/docs/guides/nextjs"
            className={styles.card}
            target="_blank"
          >
            <h2>
              Tailwind with NextJS <span>-&gt;</span>
            </h2>
            <p>
              Learn more about Tailwind with NextJS
            </p>
          </a>

         
        </div>
      </main>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src='/logo.png' width={100} />
          </a>
        
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
        </div>
  )
}

export default about