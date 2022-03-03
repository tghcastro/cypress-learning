describe('Add new items', function() {
    let newItem = "learning cypress"

    beforeEach(function() {
        // TODO: Something todo before each test
        cy.visit('/')
    })

    afterEach(function () {
        cy.screenshot()
    })

    it('Add a new item', function(){
        cy.get('.new-todo').type('learn cypress')
    })

    it('Add two items saving them', function(){
        cy.get('.new-todo').type(`${newItem}{enter}forget Webdriver{enter}`)
    })

    context('No Todos', function(){
        it('Item field footer should not be available', function (){
            cy.get('.todo-list li').should('not.exist')
        })
        it('No item should exist', function (){
            cy.get('.main').should('not.exist')
        })
    })

    context('After item added', function() {
        beforeEach(function() {
            cy.get('.new-todo').type(`${newItem}{enter}`)
        })

        it('should display item in the list', function() {
            cy.contains(newItem)
            cy.get('.todo-list li').should('have.length', 1)
        })

        it('should display all items after adding more', function() {
            cy.get('.new-todo').type(`One More{enter}`)
            cy.get('.new-todo').type(`Another One{enter}`)
            cy.get('.todo-list li').should('have.length', 3)
        })
    })


})