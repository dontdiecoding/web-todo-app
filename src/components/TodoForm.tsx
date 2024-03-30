import { PlusCircleIcon } from "@heroicons/react/20/solid";
import fs from 'fs';

function TodoForm () {

  function handleSubmit () {
    const todo = (document.querySelector('input') as HTMLInputElement).value;
    if (todo == '') {
      alert('Please enter a todo');
    } else {

      const formInput = {
        timestamp: Date.now(),
        data: todo,
        completed: false
      }

      const dataString = JSON.stringify(formInput);

      fs.writeFile('data.json', dataString, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
  }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input 
        type="text"
        placeholder="Add todo"
        className="rounded-lg my-2 px-2 py-2 border-2 border-stone-300 placeholder:text-stone-300"
      />
      <button type="submit" className="rounded-lg mx-2 my-2 px-2 py-2 text-stone-100 bg-stone-900"><PlusCircleIcon className="h-6"/> </button>
    </form>
  );
}

export default TodoForm;