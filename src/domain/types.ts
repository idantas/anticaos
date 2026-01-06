// src/domain/types.ts

export type ID = string;

export type ISODateTime = string;
// Ex: "2026-01-06T14:30:00Z"

export type TaskStatus = "todo" | "done";

export interface List {
  id: ID;
  name: string;
  createdAt: ISODateTime;
}

export interface Task {
  id: ID;
  listId: ID;
  title: string;
  status: TaskStatus;
  createdAt: ISODateTime;
  completedAt?: ISODateTime;
}