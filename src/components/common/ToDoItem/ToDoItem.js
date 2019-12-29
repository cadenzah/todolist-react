import React from 'react'
import './ToDoItem.scss'

import Button from '../Button'

const ToDoItem = (props) => {
  return (
    <div className={props.item.status === 'PENDING'
      ? `common-to-do-item`
      : `common-to-do-item done`
    }>
      <div className="common-to-do-item-checkbox">
        <label htmlFor="to-do-checkbox">
          <input
            id="to-do-checkbox"
            type="checkbox"
            value={props.item.id}
            checked={props.item.status === 'DONE' ? "checked" : ""}
          />
          <span />
        </label>
      </div>
      <div className="common-to-do-item-desc">
        <span>{props.item.desc}</span>
      </div>
      <Button buttonStyle="caution">Delete</Button>
    </div>
  )
}

export default ToDoItem