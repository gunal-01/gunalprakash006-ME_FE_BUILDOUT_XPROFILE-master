describe('XProfile Tests', () => {
  beforeEach(() => {
    // Visits the page before each test
    cy.visit('http://13.235.69.81:8081/') // Replace with your actual URL
  });

  it('has the correct title', () => {
    cy.title().should('include', 'XProfile - My Virtual Profile Card');
  });

  it('displays a profile picture', () => {
    cy.get('.profile-pic').should('be.visible');
  });

  it('shows the correct user name', () => {
    cy.get('.profile-box h3').should('have.text', 'Learner Beaver');
  });

  it('displays the correct job title', () => {
    cy.get('.profile-box p').should('have.text', 'Frontend Dev at CrioDo, Bengaluru');
  });

  it('has functioning social media links', () => {
    cy.get('.social-media img').should('have.length', 3);
  });

  it('menu and settings icons are visible', () => {
    cy.get('.menu-icon').should('be.visible');
    cy.get('.setting-icon').should('be.visible');
  });

  it('applies the correct styles to the profile box', () => {
    cy.get('.profile-box').should('have.css', 'background-color', 'rgb(255, 87, 74)') // Convert hex #ff574a to rgb
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'padding', '40px 90px')
      .and('have.css', 'color', 'rgb(255, 255, 255)') // #fff converted to rgb
      .and('have.css', 'border-radius', '20px');
  });

  it('has correctly styled menu and setting icons', () => {
    cy.get('.menu-icon').should('have.css', 'width', '25px');
    cy.get('.setting-icon').should('have.css', 'width', '25px');
  });

  it('has a profile picture with the correct styles', () => {
    cy.get('.profile-pic').should('have.css', 'width', '150px')
      .and('have.css', 'border-radius', '50%') // #fff converted to rgb
      .and('have.css', 'padding', '6px');
  });

  it('ensures social media images have the correct size and are clickable', () => {
    cy.get('.social-media img').should('have.css', 'width', '20px')
      .and('have.css', 'cursor', 'pointer');
  });
});

