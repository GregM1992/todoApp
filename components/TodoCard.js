import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteTodoItem } from '../api/todoData';

// TODO: add an onUpdate parameter and a window for confirming delete and reintegrate the on update in proptypes

export default function TodoCard({ todoObj, onUpdate }) {
  const deleteATodoItem = () => {
    if (window.confirm(`Do you want to delete ${todoObj.task}?`)) {
      deleteTodoItem(todoObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{todoObj.task}</Card.Title>
          <Card.Text>{todoObj.type}</Card.Text>
          <Button variant="outline" onClick={deleteATodoItem}>Finished?</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

TodoCard.propTypes = {
  todoObj: PropTypes.shape({
    type: PropTypes.string,
    task: PropTypes.string,
    finished: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
