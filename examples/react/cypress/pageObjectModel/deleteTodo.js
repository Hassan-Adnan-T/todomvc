class DeleteTodo {

    delete_todo(){
        cy.xpath("(//li//label)[2]")
        .should('exist')
        .trigger('mouseenter')
        .trigger('mouseover')
        cy.xpath("(//button[@class='destroy'])[2]")
        .should('exist')
        .should('be.enabled')
        .click({force: true})
    }

    delete_todo_steps(){
        this.delete_todo()
    }
}

export default DeleteTodo;