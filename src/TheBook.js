import { NavLink, useParams } from 'react-router-dom'
import books from './data/books'
import './theBook.css'

const TheBook = () => {
  const params = useParams()
  const book = books.find((book) => book.title === params.title)

  return (
    <div className="theBookPage">
      <NavLink className="linkReturn" to="../shop">
        Назад в магазин
      </NavLink>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <div className="bookDescription">
        <img
          className="bookImg"
          src={book.img}
          title={book.title}
          alt={book.title}
        />
        <text className="bookText">{book.description}</text>
      </div>
    </div>
  )
}

export default TheBook
