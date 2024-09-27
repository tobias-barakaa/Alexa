import { useGetArticleFilesQuery } from '../../../../slices/admin/adminApiSlice';
import "./Published.css";

const Published = () => {
    const { data: articles, isLoading, error } = useGetArticleFilesQuery();

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div>Error loading article data.</div>;
    }

    // Ensure articles data exists before rendering
    if (!articles || articles.length === 0) {
        return <div>No article data available.</div>;
    }

    // Access the first article from the array
    const article = articles[0];

    return (
        <div className="article-details">
            <div className="content">
                <h2 className="title">{article.title}</h2>
                <div className="info-grid">
                    <InfoItem label="Complexity" value={article.complexity} />
                    <InfoItem label="Cost" value={`$${article.cost}`} />
                    <InfoItem label="Duration" value={article.duration} />
                    <InfoItem label="Word Count" value={article.word_count} />
                    <InfoItem label="Language" value={article.language} />
                    <InfoItem label="Status" value={article.status} />
                    <InfoItem label="Keywords" value={article.keywords} />
                    <InfoItem label="Quantity" value={article.quantity} />
                    <InfoItem label="Description" value={article.description} />
                    <InfoItem label="Created At" value={new Date(article.article_created_at).toLocaleString()} />
                    <InfoItem label="Updated At" value={new Date(article.article_updated_at).toLocaleString()} />
                </div>
            </div>
            <div className="download-section">
                <a
                    href={article.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-button"
                    download // This attribute enables downloading the file directly
                >
                    Download File
                </a>
                <p className="file-info">File ID: {article.file_id}</p>
                <p className="file-info">Public ID: {article.public_id}</p>
            </div>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div className="info-item">
        <div className="info-label">{label}</div>
        <div className="info-value">{value}</div>
    </div>
);

export default Published;
