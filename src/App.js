import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import Shop from './Shop'
import TheBook from './TheBook'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:title" element={<TheBook />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
