Feature: Addition
  Background: Some background
    Rule: Some rule
      Scenario: 1 + 0
        Given I start with 10
        When I add 1
        Then I end up with 11

      Scenario: 1 + 1
        Given I start with 1
        When I add 1
        Then I end up with 2