class AddTodo {

    inputTodo(todo){
        cy.xpath("//input[@type='text']")
        .should('be.visible')
        .should('be.enabled')
        .type(todo)
    }

    press_enter(){
        cy.xpath("//input[@type='text']")
        .should('be.visible')
        .should('be.enabled')
        .type('{enter}')
    }

    adding_steps(todo){
        this.inputTodo(todo)
        this.press_enter()
    }
}

export default AddTodo;