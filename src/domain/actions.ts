// src/domain/actions.ts

 import type { List, Task } from "./types";

 export function createList(name: string): List {

    return {
        id: crypto.randomUUID(),
        name,
        createdAt: new Date().toISOString(),
    }
 }

 export function createTask(listId: string, title: string): Task {
    return {
        id: crypto.randomUUID(),
        listId,
        title,
        status: "todo",
        createdAt: new Date().toISOString(),
    }
 }

 export function completeTask(task: Task): Task {
    return {
        ...task,
        status: "done",
        createdAt: task.createdAt,
        completedAt: new Date().toISOString(),
    }
 }