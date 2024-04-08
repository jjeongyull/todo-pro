import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({items, toggleComplete, deleteItem}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${items.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{items.task}</div>

          <div>
            <button className="button-delete"  onClick={() => deleteItem(items._id)}>삭제</button>
            <button className="button-delete" onClick={() => toggleComplete(items._id)}>{items.isComplete ? `안끝남` : `끝남`}</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
