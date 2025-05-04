import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//     </>
//   )
// }

function Greeting() {
  return (
    <React.Fragment>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">Hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
