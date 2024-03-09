import TodoForm from "../components/TodoForm";

export default function Dashboard() {

    function toggleForm() {
        const form = document.getElementById('TodoForm') as HTMLDivElement;
        const toggle = document.getElementById('toggleTodoForm') as HTMLButtonElement;
        if (form.style.display === "none") {
            form.style.display = "block";
            toggle.innerHTML = "Hide Form";
        } else {
            form.style.display = "none";
            toggle.innerHTML = "Show Form";
        }
    }


    return (
        <>
            <h1>Dashboard</h1>

            <button id="toggleTodoForm" onClick={toggleForm}>Show Form</button>

            <div id="TodoForm" style={{display: "none"}}>
                <TodoForm />
            </div>
        </>
    );
}