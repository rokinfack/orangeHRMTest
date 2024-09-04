class LoginPage {
    elements = {
        username: () => cy.get("input[name=username]"),
        password: () => cy.get("input[name=password]"),
        submitButton: () => cy.get("button[type=submit]"),
    }

    saisirUserName(username) {
        this.elements.username().clear().type(username);
    }

    saisirPassword(password) {
        this.elements.password().clear().type(password);
    }

    clickButton() {
        this.elements.submitButton().click();
    }
}

module.exports = new LoginPage();