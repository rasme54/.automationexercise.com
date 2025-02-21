class SignupPage {
  chooseRadioWithTitle(radio) {
    cy.get(radio).click();
    //cy.get(radio).should("be.checked");
  }
  isInputDataCorrect(selector, valueToCheck) {
    cy.get(selector).should("have.value", valueToCheck);
  }
  markCheckbox(selector) {
    cy.get(selector).check();
    cy.get(selector).should("be.checked");
  }
  selectFormDropdown(selektor, dateValueString) {
    cy.get(selektor).select(dateValueString);
    cy.get(selektor).should("have.value", dateValueString);
  }
  typeSignUpData(selector, data) {
    cy.get(selector).type(data);
    cy.get(selector).should("have.value", data);
  }
}

export default SignupPage;
