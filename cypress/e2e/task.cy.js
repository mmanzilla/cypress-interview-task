describe('Checkbox Task', () => {
  it('should verify checkboxes', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    
    // Task 2: Verify there are 2 checkboxes
    cy.get('input[type="checkbox"]').should('have.length', 2);
    
    // Task 3: Check the first checkbox and verify it is checked
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
  });
});
