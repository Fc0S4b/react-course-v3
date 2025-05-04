import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const author = 'Name'
const title = 'Title of the book'
const img = './images/book-1.jpg'

const BookList = () => {
  return (
    <section className="bookList">
      <Book job="developer" />
      <Book title="random title" number={22} />
      <Book />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={img} alt="book1" />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
