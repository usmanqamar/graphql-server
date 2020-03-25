Feature: Notifying sales person about survey
  Scenario: Email sending
    Given I prepare required data for email sending
    When I hit the email sending
    Then the api should respond with success
