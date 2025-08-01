class FilterCompleted {

    filter_completed(){
        cy.xpath("//a[text()='Completed']")
        .should('exist')
        .click()
    }

    filter_completed_steps(){
        this.filter_completed()
    }
}

export default FilterCompleted;