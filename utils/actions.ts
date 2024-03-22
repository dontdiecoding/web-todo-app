import db from "./db.ts";
import { TaskObject } from "./types.ts";

export function addTask(task: TaskObject) {
    const query = db.query("insert into tasks (task) values (?)" [task.task]);
    query.run();
}