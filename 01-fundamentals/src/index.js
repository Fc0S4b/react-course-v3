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

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// imágenes con src de enlaces externos funcionarán solo si están en carpeta public
const Image = () => <img src="asd.jpg" alt="book1" />
const Title = () => <h2>Title of the Book</h2>
const Author = () => {
  return <h2>Author</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
