class MarkComplete {

    mark_complete(){
        cy.xpath("(//input[@type='checkbox'])[2]")
        .should('exist')
        .should('be.enabled')
        .click()
    }

    mark_complete_steps(){
        this.mark_complete()
    }
}

export default MarkComplete;