Feature: Logging AMM evaluation history
  Scenario: Incomplete journey
    Given I prepare required data for api
    When I hit the logging api
    Then the api should respond with isCompleted false
    And with provided data
      | TaskName                              | Priority |
      | Watch cat videos on YouTube all day   | high     |

  Scenario: Complete journey
    Given I prepare required data for api
    When I hit the logging api
    Then the api should respond with isCompleted true
    And with provided data

