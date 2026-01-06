 // src/domain/mock.ts

 import type { List, Task } from "./types";

 export const initialLists: List[] = [
    {
        id: "inbox",
        name: "Inbox",
        createdAt: new Date().toISOString(),
    },
 ];

 export const initialTasks: Task[] = [
    {
        id: "task-1",
        listId: "inbox",
        title: "Primeira tarefa do Anticaos",
        status: "todo",
        createdAt: new Date().toISOString(),
    },
 ];