import { NewsArticle } from "@/models/news-article"
import { Row, Col } from 'react-bootstrap'
import NewsArticlesEntry from './news-article-entry'
interface NewsArticlesGridProps {
    articles: NewsArticle[]
}

const NewsArticlesGrid = ({articles} : NewsArticlesGridProps) => {
    console.log('articles', articles)
    return (
        <Row xs={1} sm={2} xl={3} className="g-4">
                {articles?.map((article) => {
                    return (
                    <Col key={article.url}>
                        <NewsArticlesEntry article={article} />
                    </Col>
                    )
                  
                })}
        </Row>
    )
}

export default NewsArticlesGrid