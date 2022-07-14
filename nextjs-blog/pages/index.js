import Head from 'next/head'
import SearchBar from "../components/SearchBar"
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } 
    from "react-instantsearch-dom";
import FuckThis from './api/scraper';
// import Sidebar from "../components/sidebar/Sidebar"
// import Layout from '../components/Layout';

const searchClient = algoliasearch(
  "XJKWXUI2BM",
  "595a1f63030718fe0b164a2c2fbfe686",
);

// const apiGet = () => {
//   const articles = []
//   axios(url)
//       .then(response=>{
//           const html=response.data
//           const $ = cheerio.load(html)
//           $('.s-link',html).each(function () {
//               const title = $(this).text()
//               console.log(html)
//               const url2 = $(this).attr('href')
              
//               articles.push(
//                   title,
//                   'https://stackoverflow.com' + url2)
              
//           })
//   })
// }


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FooScraper
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          FooScraper
        </h1>

        {/* <div>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div> */}

        <div className="grid">
          <InstantSearch 
            searchClient={searchClient} 
            indexName="gfg_dev">
      
            {/* Adding Search Box */}
            <SearchBar/>
            
            {/* Adding Data */}
            <Hits />
          </InstantSearch>

        </div>



      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
