describe('Contact us form', ()=> {
    it('should look visually perfect', function () {
        cy.visit('/contact-us');
        cy.get('#edit-name').type('Shweta Sharma');
        cy.get('#edit-email').type('shwetasharma@axelerant.com');
        cy.get('#edit-message').type('This is a test message!');
        cy.percySnapshot('Contact us form', { widths: [320, 1024, 1400] });
        cy.get('#edit-actions-submit').click();
        cy.percySnapshot('Contact form submission', { widths: [320, 1024, 1400] });
    });

    it('should fail after CSS changes', function () {
        cy.visit('/contact-us');
        cy.get('#edit-name').type('Shweta Sharma');
        cy.get('#edit-email').type('shwetasharma@axelerant.com');
        cy.get('#edit-message').type('This is a test message!');
        cy.get('#block-urbanharvestmap').invoke('hide');
        cy.percySnapshot('Contact us form', { widths: [320, 1024, 1400] });
        cy.get('#edit-actions-submit').click();
        cy.percySnapshot('Contact form submission', { widths: [320, 1024, 1400] });
    });
})