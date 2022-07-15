import Head from 'next/head'
import Filter from "../components/filter/Filter";
import SearchBar from "../components/SearchBar"
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } 
    from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "XJKWXUI2BM",
  "595a1f63030718fe0b164a2c2fbfe686",
);
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

        <Filter className="filter-container"/>

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

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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

        .filter-container{
          margin-top: 10 px;
          padding: 10 px;
          display: flex;
          align-content: center;
          justify-content: left;
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

        // styles sophia added
        p {
          margin-top: 0;
          margin-bottom: 0;
        }
        
        .filter-title {
          font-weight: bold;
          size: 12px;
          color: #b3b2b3;
          margin-bottom: 10px;
        }

        .filter-option {
          vertical-align: middle;
          padding: 7px;
        }
        
        .rounded-checkbox {
          width:20px;
          height: 20px;
          /* border-radius: 50%; */
          vertical-align: middle;
          border: 5px solid black;
          /* appearance: none;
          -webkit-appearance: none; */
          /* outline: none;
          cursor: pointer; */
        }
        
        .rounded-checkbox:hover {
          background-color: #ccc;
        }
        
        
        .rounded-checkbox:checked {
          background-color: #2196F3;
        }

        // styles for productsList
        .search-entries {
          list-style-type: none;
        }
        
        // styles for product
        .article {
          padding: 10px;
        }

        // styles for product text (title, link, time, blurb)
        .article-link {
          font-size: 14px;
        }

        .article-title{
          color: blue;
        }

        p, .article-title{
          display:inline;
        }


      `}</style>
    </div>
  )
}
