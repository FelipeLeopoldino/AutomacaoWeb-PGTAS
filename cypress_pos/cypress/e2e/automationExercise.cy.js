/// <reference types="cypress" />

describe("Automation Exercise", () => {
  const USER_EMAIL = `teste${Date.now()}@pgtas.com.br`;

  it("Test Case 1: Register User", () => {
    //Entrar no site e validar que esta na pagina
    cy.visit("/");
    //Importar Fixture
    cy.fixture("dadosBasicoAberturaConta").then((dadosBasicos) => {
      const FULL_NAME = `${dadosBasicos.firstName} ${dadosBasicos.lastName}`;
      cy.get("#slider-carousel > div").should("contain", "AutomationExercise");

      //Clicar no botão para fazer login/cadastro
      cy.get("a[href*=login]").should("be.visible").click();

      //Preencher campo de novo usuario07
      cy.get('[data-qa="signup-name"]').type(FULL_NAME);
      cy.get('[data-qa="signup-email"]').type(USER_EMAIL);
      cy.get('[data-qa="signup-button"]').click();
      cy.screenshot();

      //Preencher informações da conta
      ///Title
      cy.get('[id="id_gender1"]').check();
      //Password
      cy.get('[data-qa="password"]').type(dadosBasicos.password);

      //Date of birth
      //day
      cy.get('[id="days"]').select(dadosBasicos.day);
      //month
      cy.get('[id="months"]').select(dadosBasicos.month);
      //year
      cy.get('[id="years"]').select(dadosBasicos.year);

      //First name
      cy.get('[data-qa="first_name"]').type(dadosBasicos.firstName);
      //Last name
      cy.get('[data-qa="last_name"]').type(dadosBasicos.lastName);

      //Company
      cy.get('[data-qa="company"]').type(dadosBasicos.company);

      //address
      cy.get('[data-qa="address"]').type(dadosBasicos.address);
      //Country
      cy.get('[data-qa="country"]').select(dadosBasicos.country);
      //State
      cy.get('[data-qa="state"]').type(dadosBasicos.state);
      //City
      cy.get('[data-qa="city"]').type(dadosBasicos.city);
      //Zipcode
      cy.get('[data-qa="zipcode"]').type(dadosBasicos.zipCode);

      //Mobile Number
      cy.get('[data-qa="mobile_number"]').type(dadosBasicos.mobileNumber);
      cy.screenshot();

      //Create Account
      cy.get('[data-qa="create-account"]').should("be.visible").click();

      //Validar criação de conta
      cy.get('[data-qa="account-created"]')
        .should("be.visible")
        .and("contain", "Account Created!");
      cy.screenshot();

      //Ir para pagina logada
      cy.get('[data-qa="continue-button"]').click();

      //Validar nome do usuario
      cy.contains(FULL_NAME);
      cy.screenshot();
    });
  });

  ///implementar testes do 2 ao 4
  it("Test Case 2: Login User with correct email and password", () => {});

  it("Test Case 3: Login User with incorrect email and password", () => {});

  it("Test Case 4: Logout User", () => {});

  it("Test Case 5: Register User with existing email", () => {
    //Entrar no site e validar que esta na pagina
    cy.visit("/");
    //Importar Fixture
    cy.fixture("dadosBasicoAberturaConta").then((dadosBasicos) => {
      const FULL_NAME = `${dadosBasicos.firstName} ${dadosBasicos.lastName}`;
      cy.get("#slider-carousel > div").should("contain", "AutomationExercise");

      //Clicar no botão para fazer login/cadastro
      cy.get("a[href*=login]").should("be.visible").click();

      //Preencher campo de novo usuario07
      cy.get('[data-qa="signup-name"]').type(FULL_NAME);
      cy.get('[data-qa="signup-email"]').type(USER_EMAIL);
      cy.get('[data-qa="signup-button"]').click();

      //Validar usuari cadastrado
      cy.get(".signup-form > form > p")
        .should("be.visible")
        .and("contain", "Email Address already exist!");
      cy.screenshot();
    });
  });
});
