import { NewsArticle } from "@/models/news-article"
import { Card } from 'react-bootstrap'
import Image from 'next/image'
interface NewsArticlesEntryProps {
    article: NewsArticle
}

const NewsArticleEntry = ({article: {title, description, url, urlToImage}}: NewsArticlesEntryProps) => {
 
   const validImageUrl = urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://') ? urlToImage : undefined
    return (
        <a href={url}>
            <Card className="h-100">
                <Image src={validImageUrl} width={500} height={200} alt="News Artcle Image" className="card-img-top"/>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}

export default NewsArticleEntry