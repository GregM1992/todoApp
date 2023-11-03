import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getTodoItems } from '../../api/todoData';
import TodoCard from '../../components/TodoCard';

export default function ShowTodo() {
  const [todoItems, setTodoItems] = useState([]);

  const { user } = useAuth();

  const getAllTodoItems = () => {
    getTodoItems(user.uid).then(setTodoItems);
  };

  useEffect(() => {
    getAllTodoItems();
  }, []);

  return (
    <>
      <Link href="/todoPage/new" passHref className="addTodoBtn">
        <Button>Add A Team</Button>
      </Link>
      <div className="text-center my-4 team-page">
        {todoItems.map((item) => <TodoCard key={item.firebaseKey} todoObj={item} onUpdate={getAllTodoItems} />)}
      </div>
    </>
  );
}
