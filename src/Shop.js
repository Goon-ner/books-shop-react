import { NavLink } from 'react-router-dom'
import books from './data/books'
import './shop.css'

const Shop = () => {
  return (
    <>
      <h2 className="shopTitle">Магазин</h2>
      <div className="shopPage">
        {books.map((book) => (
          <div className="singleBook">
            <NavLink to={book.title} key={book.id}>
              <img
                className="bookImg"
                src={book.img}
                title={book.title}
                alt={book.title}
              />
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop
