import { NavLink, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useState } from 'react'
import books from './data/books'
import './shop.css'

function sortBooks(books, key) {
  const sortedBooks = [...books]
  if (!key) {
    return sortedBooks
  }
  sortedBooks.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedBooks
}

const Shop = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedBooks, setSortedBooks] = useState(sortBooks(books, sortKey))

  function newSort() {
    setSortKey(query.sort)
    setSortedBooks(sortBooks(books, sortKey))
    console.log(sortKey)
  }
  // useEffect(() => newSort(), [])

  return (
    <>
      <h2 className="shopTitle">Магазин</h2>
      <div className="sort">
        <button className="sortButton">Сортировать:</button>
        <div className="sortList">
          <NavLink
            className="sortLink"
            to=".?sort=author"
            onClick={() => newSort()}
          >
            По автору
          </NavLink>
          <NavLink className="sortLink" to=".?sort=title">
            По названию
          </NavLink>
          <NavLink className="sortLink" to=".?sort=price">
            По цене
          </NavLink>
        </div>
      </div>
      <div className="shopPage">
        {sortedBooks.map((book) => (
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
              <h3>{book.price + ' руб'}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop
