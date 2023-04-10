import NewsArticlesGrid from '@/components/news-articles-grid'
import { NewsArticle } from '@/models/news-article'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import {Form, Button, Spinner, Alert} from 'react-bootstrap'

const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false)
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get('searchquery')?.toString().trim()
        if(searchQuery) {
            try {
                setSearchResults(null)
                setSearchResultsLoading(true)
                setSearchResultsLoadingIsError(false)
                const response = await fetch('/api/search-news?q=' + searchQuery)
                const articles: NewsArticle[] = await response.json()
                setSearchResults(articles)
            } catch (error) {
                setSearchResultsLoadingIsError(true)
            } finally {
                setSearchResultsLoading(false)
            }
        }
    }
    return (
        <>
        <Head>
            <title>News Search</title>
        </Head>
        <main>
            <h1>Search News</h1>
            <Alert>
                This page uses <strong>client side data fetching</strong> to show fresh data for every search. 
                Request are handle by ouur backend via <strong>Api Routes</strong>
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='search-input' >
                    <Form.Label>Search query</Form.Label>
                    <Form.Control name="searchquery" placeholder="E.g. politics, sports, ..." />
                </Form.Group>
                <Button type="submit" className='mb-3' disabled={searchResultsLoading}>Search</Button>
            </Form>
            <div className='d-flex flex-column align-items-center'>
                {searchResultsLoading && <Spinner animation="border"/>}
                {searchResultsLoadingIsError && <p>Something went wront. Please try again.</p>}
                {searchResults?.length === 0 && <p>Nothing found. Try different query</p>}
                {searchResults && <NewsArticlesGrid articles={searchResults} />}
            </div>
        </main>
        </>
    )
}

export default SearchNewsPage