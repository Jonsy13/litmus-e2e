/// <reference types="Cypress" />
let user;
describe("Testing the agent registration", () => {
  before("Visit Login Page", () => {
    cy.clearCookie("token");
    indexedDB.deleteDatabase("localforage");
    cy.fixture("Users").then((User) => {
      user = User;
    });
    cy.visit("/login");
  });

  it("Testing the only single input sign in [ Should not be possible ]", () => {
    cy.intercept("POST", Cypress.env("authURL") + "/login").as("loginResponse");
    cy.login(user.AdminName, " ");
    cy.wait("@loginResponse").its("response.statusCode").should("eq", 401);
    cy.contains("Wrong Credentials").should("be.visible");
  });

  it("Registering an Agent in Cluster-Scope", () => {
    // cy.exec("kubectl config use-context kind-testing");
    // Now Agent can be registered from here.
    cy.task("listPod", "litmus").then((res) => {
      console.log(res);
    });
    cy.task("listDeployment", "litmus").then((res) => {
      console.log(res);
    });
  });
});
