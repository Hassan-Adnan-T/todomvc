class FilterActive {

    filter_active(){
        cy.xpath("//a[text()='Active']")
        .should('exist')
        .click()
    }

    filter_active_steps(){
        this.filter_active()
    }
}

export default FilterActive;