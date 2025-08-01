require('cypress-xpath')
import AddTodo from '../pageObjectModel/addTodo.js'
import todolist from '../fixtures/todolist.json'
import MarkComplete from '../pageObjectModel/markComplete.js'
import DeleteTodo from '../pageObjectModel/deleteTodo.js'
import FilterCompleted from '../pageObjectModel/filterCompleted.js'
import FilterActive from '../pageObjectModel/filterActive.js'
import FilterAll from '../pageObjectModel/filterAll.js'
import ClearCompleted from '../pageObjectModel/clearCompleted.js'

describe('it should add todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.viewport(1280, 720)
  })

  it('should add todo', () => {
    const addTodo = new AddTodo()

    for (const todo in todolist) {
      addTodo.adding_steps(todolist[todo])
    }

    const markComplete = new MarkComplete()
    markComplete.mark_complete_steps()

    const deleteTodo = new DeleteTodo()
    deleteTodo.delete_todo_steps()

    const filterCompleted = new FilterCompleted()
    filterCompleted.filter_completed_steps()

    const filterActive = new FilterActive()
    filterActive.filter_active_steps()

    const filterAll = new FilterAll()
    filterAll.filter_all_steps()

    const clearCompleted = new ClearCompleted()
    clearCompleted.clear_completed_steps()  
  })

})
