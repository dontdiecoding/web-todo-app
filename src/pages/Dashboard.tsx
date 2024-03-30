import TodoForm from "../components/TodoForm";

export default function Dashboard() {


    return (
        <>
            <h1>Dashboard</h1>
            <hr className="w-full"></hr>

            <div id="TodoForm">
                <TodoForm />
            </div>

            <div id="TodoList">
                <h2>Todo List</h2>

                <ul>
                    {}
                </ul>
            </div>
        </>
    );
}