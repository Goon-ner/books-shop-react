import { NavLink } from 'react-router-dom'
import './main.css'
import books from './data/books'

const Main = () => {
  return (
    <div className="mainPage">
      <h2>Главная страница</h2>
      <div className="description">
        Добро пожаловать в интернет-магазин "Букинист". В нашем магазине вы
        можете приобрести книги с доставкой по всему миру. На данной странице
        представлены "бестселлеры" этой недели. С полным ассортиментом магазина
        вы можете ознакомиться во вкладке "Магазин"
      </div>
      <div className="bestsellers">
        <div className="firstBook">
          <NavLink to={'shop/' + books[0].title} key={books[0].id}>
            <img
              className="bookImg"
              src={books[0].img}
              title={books[0].title}
              alt={books[0].title}
            />
            <h2>{books[0].title}</h2>
            <h3>{books[0].author}</h3>
          </NavLink>
        </div>
        <div className="secondBook">
          <NavLink to={'shop/' + books[1].title} key={books[1].id}>
            <img
              className="bookImg"
              src={books[1].img}
              title={books[1].title}
              alt={books[1].title}
            />
            <h2>{books[1].title}</h2>
            <h3>{books[1].author}</h3>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Main
