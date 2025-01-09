import ArticleDetail from '../../../components/pages/ArticleDetail';

export async function generateStaticParams() {
  const articles = [
    { id: 0 },
    { id: 1 }
  ];

  return articles.map(article => ({
    id: article.id.toString(),
  }));
}

export default function Page({ params: { id } }) {
  return <ArticleDetail id={id} />;
}
