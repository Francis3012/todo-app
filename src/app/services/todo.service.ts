import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	public todos: Todo[] = [];

	constructor() { }

	getAllTodos(): Todo[] {
		if(localStorage.getItem('localData') !== null){
			this.todos = JSON.parse(localStorage.getItem('localData')!);
		} else {
			const todoArrayData = [
				{
					id: 1,
					title: 'Prof.',
					salution: 'Mr.',
					firstName: 'Mark',
					middleName: 'Jacob',
					lastName: 'Otto',
					phone: '1234567890',
					email: 'mark_otto@gmail.com'
				},
				{
					id: 2,
					title: 'Dr.',
					salution: 'Mr.',
					firstName: 'Jacob',
					middleName: 'Mark',
					lastName: 'Thornton',
					phone: '0987654321',
					email: 'jacob_thornton@gmail.com'
				}
			];
			localStorage.setItem('localData', JSON.stringify(todoArrayData));
			this.todos = JSON.parse(localStorage.getItem('localData')!);
		}
		return this.todos;
	}

	getTodoById(id: number): Todo {
		const todoArray = JSON.parse(localStorage.getItem('localData')!);
		return todoArray
			.filter((todo: Todo) => todo.id === id)
			.pop();
	}

	updateTodoById(todo: Todo): Todo {
		if (todo.id === 0) {
			const todoArray = JSON.parse(localStorage.getItem('localData')!);
			let todoId = todoArray.length;
			todo.id = ++todoId;
			todoArray.push(todo);
			localStorage.setItem('localData', JSON.stringify(todoArray));
		} else {
			const todoSaveArray = JSON.parse(localStorage.getItem('localData')!);
			for (let i in todoSaveArray) {
				if (todoSaveArray[i].id === todo.id) {
					todoSaveArray[i] = todo;
					localStorage.setItem('localData', JSON.stringify(todoSaveArray));
				}
			}
		}
		return todo;
	}

	deleteTodo(id: number) {
		const todoArray = JSON.parse(localStorage.getItem('localData')!);
		for (let i in todoArray) {
			if (todoArray[i].id === id) {
				todoArray.splice(i, 1);
				localStorage.setItem('localData', JSON.stringify(todoArray));
			}
		}
	};
}
