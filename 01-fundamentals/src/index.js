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

const Image = () => <img src="asd.jpg" alt="book1" />
const Title = () => <h2>Title of the Book</h2>
const Author = () => {
  return (
    //styles en el css no funcionarán, inline tiene prioridad
    // style recibe un objeto JS así que puedes definir el objeto en cualquier parte
    <h2 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
      Author
    </h2>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
