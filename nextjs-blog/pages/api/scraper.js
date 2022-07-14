// const axios = require('axios')
// const cheerio = require('cheerio')

// const search='c++'

// const url='https://stackoverflow.com/search?q=' + search + '&s=22cf9f4c-05b1-47ff-9e69-b5349ba052d0'

// export default function handler(req, res) {

//     const articles = []
//     axios(url)
//         .then(response=>{
//             const html=response.data
//             const $ = cheerio.load(html)
//             $('.s-link',html).each(function () {
//                 const title = $(this).text()
//                 console.log(html)
//                 const url2 = $(this).attr('href')
                
//                 articles.push(
//                     title,
//                     'https://stackoverflow.com' + url2)
                
//             })
//     })
//     res.status(200).json({ text: articles[0]});
// }

export default function handler(req, res) {
    res.status(200).json({jhjhj : ['a','b']});
}

// import Layout from '../components/layout';

// const FuckThis = ({articles}) => {
//     console.log("hello")
//     console.log(articles)
//     return (
//         <Layout>
//             <div>
//                 <h1>Welcome to Next Application</h1>
//                 <h3>Songs List</h3>
//                 {articles.map((item, i) => {
//                    return (
//                    <li key={i}>{item.title}</li>
//                    )
//                })}
//             </div>
//         </Layout>
//     );
// }

// FuckThis.getInitialProps = async function() {
//     return {articles: []}
// }
// export default FuckThis;