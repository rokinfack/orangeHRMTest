Feature: fonctionnalité employee
# c'est dylane

  @smoke
  Scenario Outline: login avec mot de passe et username correctes
    Given je navigue sur le site orangeHRM "<env>"
    When je renseigne mon username "<username>"
    And je renseigne mon mot de passe "<password>"
    And je clique sur le bouton login
    Then jaccede sur dashboard

  @env1
    Examples:
      | username | password | env                                                                |
      | Admin    | admin123 | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login |
