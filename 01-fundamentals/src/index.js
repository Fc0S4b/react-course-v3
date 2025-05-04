import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const author = 'Name'

const Book = () => {
  const title = 'Title of the book'
  return (
    <article className="book">
      <img src="asd.jpg" alt="book1" />
      <h2>{title}</h2>
      <h2>{author.toUpperCase()}</h2>
      {/* <p>{let x = 6}</p> error, solo expresiones */}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
