class FilterAll {

    filter_all(){
        cy.xpath("//a[text()='All']")
        .should('exist')
        .click()
    }

    filter_all_steps(){
        this.filter_all()
    }
}

export default FilterAll;