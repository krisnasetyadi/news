import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/news-article'
import NewsArticleEntry from '@/components/news-article-entry'
import NewsArticlesGrid from '@/components/news-articles-grid'
import {Alert} from 'react-bootstrap'
const inter = Inter({ subsets: ['latin'] })

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[]
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
  await new Promise(r=> setTimeout(r,3000))
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.NEWS_API_KEY)
  const newsResponse: NewsResponse = await response.json()

  return {
    props: {
      newsArticles: newsResponse.articles
    }
  }
}

export default function BreakingNewsPage({newsArticles}: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS News App</title>
      </Head>
      <main >
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data serverr-side on every .
          This allows search engines to crawl the page content and <strong>improves SEO</strong>
        </Alert>
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  )
}
