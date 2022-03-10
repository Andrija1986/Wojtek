import NewsItem from "./NewsItem"
import { addIndex } from "../helpers"

const NewsList= ({data}) => {

  if (data.loading) return <p>Loading...</p>
  if (data.error) return <p>{data.error}</p>

  const newData = addIndex(data.results.articles);

  const newsItems = newData.map((item) => (
  <NewsItem 
    key={item.id}
    title={item.title}
    author={item.author}
    url={item.url}
    image={item.urlToImage} />))

  return (
    <section className="main-body">
      {newData.length > 0 ? 
      (<ul>{newsItems}</ul>) : 
      (<h1 className="loading">No Results Found!</h1>) }
    </section>
  )
}

export default NewsList
