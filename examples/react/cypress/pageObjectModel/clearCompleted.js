class ClearCompleted {

    clear_completed(){
        cy.xpath("//button[text()='Clear completed']")
        .should('exist')
        .should('be.visible')
        .click()
    }

    clear_completed_steps(){
        this.clear_completed()
    }
}

export default ClearCompleted;