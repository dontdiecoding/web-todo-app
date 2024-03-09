import { useState } from 'react';

function TodoForm () {

  const [todo, setTodo] = useState('');

  function handleSubmit () {
    if (todo == '') {
      alert('Please enter a todo');
    } else {
    console.log(todo);
    setTodo('');
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={todo} 
        onChange={e => setTodo(e.target.value)} 
        placeholder="Add todo" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;