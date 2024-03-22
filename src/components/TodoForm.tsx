
function TodoForm () {

  function handleSubmit () {
    const todo = (document.querySelector('input') as HTMLInputElement).value;
    if (todo == '') {
      alert('Please enter a todo');
    } else {
    console.log(todo);
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;