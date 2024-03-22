import { Database } from "bun:sqlite";

const db = new Database("../data/data.sqlite");

const queryTaskTable = db.query("create table if not exists tasks (id integer primary key, task text, done integer default 0)");

queryTaskTable.run();

export default db;