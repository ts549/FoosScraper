const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const app = express()
const PORT=8000

const search='c++'

const url='https://stackoverflow.com/search?q=' + search + '&s=22cf9f4c-05b1-47ff-9e69-b5349ba052d0'

axios(url)
    .then(response=>{
        const html=response.data
        const $ = cheerio.load(html)
        const articles=[]
        $('.s-link',html).each(function () {
            const title = $(this).text()
            const url2 = $(this).attr('href')
            
            articles.push(
                title,
                'https://stackoverflow.com' + url2)
        })
    console.log(articles[5])
    
})


app.listen(PORT, () => console.log(url))

