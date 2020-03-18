Feature: Addition with table
  Background: Some background
      Scenario Outline: adding
        Given I start with <a>
        When I add <b>
        Then I end up with <answer>

        Examples:
        | a | b | answer |
        | 1 | 1 | 2      |
        | 2 | 4 | 6      |

