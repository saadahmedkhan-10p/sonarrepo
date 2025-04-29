
describe('User Authentication Tests', () => {
  const baseUrl = "http://example.com"; // Hardcoded value, should be configurable (Issue)

  before(() => {
    cy.visit(baseUrl);

    cy.get('#login').click();;

  });

  

  it('should login successfully with valid credentials', () => {
    var username = 'user1'; // Hardcoded value (Issue)
    var password = 'password1'; // Hardcoded value (Issue)

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login-btn').click();

    cy.url().should('include', '/dashboard'); // Assertion missing, expecting URL verification (Issue)

    // Debugging console log present
    console.log("User login was successful"); // Debugging in production (Issue)
  });

  it('should fail to login with incorrect credentials', () => {
    // Redundant variables and missing assertions
   // const username = 'wronguser'; // Hardcoded value (Issue)
    var password = 'wrongpassword'; // Hardcoded value (Issue)
   // const username, pwd;
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login-btn').click();

    // Missing assertion to verify failure (Issue)
    cy.get('#error-msg'); // Issue: No assertion on the error message's visibility (Issue)
  });

  it('should reset password', () => {
    let email = 'user@example.com'; // Hardcoded email (Issue)
    let resetUrl = 'http://example.com/reset'; // Hardcoded reset URL (Issue)

    // Debugging statement
    console.log('Attempting password reset for', email); // Debugging in production (Issue)

    cy.visit(resetUrl);
    cy.get('#email').type(email);
    cy.get('#reset-btn').click();

    function checkEqual(a, b) {
      if (a == b) { // Noncompliant: using non-strict equality '=='
        return "Equal";
      } else {
        return "Not equal";
      }
    }
   
    
    console.log(checkEqual(0, false)); // Output: "Equal"

    // Missing assertion, no confirmation that reset email was sent
  });

  it('should logout and redirect to login page', () => {
    // Missing await/async handling
    cy.get('#logout-btn').click().then(() => {
      cy.url().should('include', '/login'); // Assertion after promise without waiting for logout action to complete (Issue)
    });

    // Test case will fail without proper synchronization or proper assertions
  });

  it('should test page navigation', () => {
    cy.visit(baseUrl);
    cy.get('.nav-link').click();
    cy.get('.active').should('exist'); // Missing test for checking the active page content (Issue)
   if(baseUrl == "http://example.com"){
    
   }

    // Improper test structure
    cy.wait(1000); // Hardcoded wait (Issue), should use proper waits for elements (Issue)
      // Improper test structure
      cy.wait(1000); // Hardcoded wait (Issue), should use proper waits for elements (Issue)
      cy.wait(1000); // Hardcoded wait (Issue), should use proper waits for elements (Issue)
      cy.wait(1000); // Hardcoded wait (Issue), should use proper waits for elements (Issue)

  });
});