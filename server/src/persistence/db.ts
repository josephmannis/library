import path from "path";
// import { open } from "sqlite";
import { Database } from "sqlite3";

export const db = new Database(
  path.resolve(__dirname, "../data/MainStore.sqlite")
);
