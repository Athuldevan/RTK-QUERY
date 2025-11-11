import { Checkbox } from "@radix-ui/react-checkbox";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { useGetTodoByIdQuery } from "../services/todoApiSlice";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";

export interface Todos {
  id: number;
  limit?: number;
  skip?: number;
  todo: string;
  completed: boolean;
  userId: number;
}
type TodoListProps = {
  todos: Todos[];
};

function TodoList({ todos }: TodoListProps) {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const { data } = useGetTodoByIdQuery(selectedId);
  console.log(data);
  return (
    <div>
    
      <div className="d-flex items-center justify-center">
        <select onChange={(e) => setSelectedId(e.target.value)}>
          {Array.from({ length: 9 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      {todos?.map((todo) => (
        <Card className="zinc-950" key={todo?.id}>
          <Checkbox />
          <CardHeader> number : {todo.id}</CardHeader>
          <CardTitle>{todo?.todo}</CardTitle>
        </Card>
      ))}
      {/* Get Todo by id */};
    </div>
  );
}

export default TodoList;
