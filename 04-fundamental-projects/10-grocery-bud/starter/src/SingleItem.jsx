import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className="single-item">
      <input
        type="checkbox"
        // checked={isChecked}
        checked={item.completed}
        // onChange={() => setIsChecked(!isChecked)}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
