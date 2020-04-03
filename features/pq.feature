Feature: Mortage calculator
  Rule: Logged in user as broker will be able to see this screen

    Scenario: Mortgage payment calculator navigation
      Given the application is launched
      When user click on mortage calculator
      Then user end up on Mortage payment calculator screen


    Scenario: Mortgage payment calculator screen
      Given mortgage payment calculator screen is shown
      When initially
      Then user is shown editable form
      And following fields
        | Field           |
        | Purchase Price  |
        | Down Payment    |
        | Amortization    |
        | Interest Rate   |
        | Amount          |
      And dropdown fields with options
        | Field             | Options                                                                           |
        | Payment Frequency | Monthly, Semi-Monthly, Biweekly, Accelerated BiWeekly, Weekly, Accelerated Weekly |
        | Rate Type         | Fixed, Adjustable, Capped Variable, Variable, Buydown                             |
      And Percentage in read only format


    Scenario Outline: Down payment formula
      Given mortgage payment calculator screen is shown
      And purchase price is entered <payment>
      When down payment amount is entered <down>
      Then down payment percentage is calculated <result>

    Examples:
      | payment   | down   | result  |
      | 100       | 40     | 40      |
      | 200       | 200    | 100       |
      | 0         | 20     | 0       |


    Scenario: Add lump sum to pay mortgage faster
      Given mortgage payment calculator screen is shown
      When initially
      Then screen should have lump sump payment section
      And frequency field should have
        | Field             | Options
        | Payment Frequency | Monthly, Semi-Monthly, Biweekly, Accelerated BiWeekly, Weekly, Accelerated Weekly

    Scenario: Fields calculations
      Given mortgage payment calculator screen is shown
      When user fills in the form values
      Then fields Monthly Payments, Mortage Amount, Amortization are calculated
      And Amortization is same what is filled
      And Mortage Amount will be Purchase Price - Down Payment

    Scenario: Compare two mortgages
      Given mortgage payment calculator screen is shown
      When initially
      Then user is shown Compare two mortages button

    Scenario: Compare two mortgages screen
      Given mortgage payment calculator screen is shown
      When user clicks on Compare two mortgages button
      Then screen shows two tabs "Mortage 1" and "Mortage 2"
      And  following fields
        | Field           |
        | Purchase Price  |
        | Down Payment    |
        | Amortization    |
        | Interest Rate   |
        | Amount          |

      And dropdown fields with options
        | Field             | Options                                                                           |
        | Payment Frequency | Monthly, Semi-Monthly, Biweekly, Accelerated BiWeekly, Weekly, Accelerated Weekly |
        | Rate Type         | Fixed, Adjustable, Capped Variable, Variable, Buydown                             |


    Scenario: Auto calculated values for Mortgage 1 and 2
      Given mortgage payment calculator screen is shown
      When user fills in the form values
      Then fields Monthly Payments, Mortage Amount, Amortization are calculated for both screens
      And Amortization is same what is filled
      And Mortage Amount will be Purchase Price - Down Payment

    Scenario: Exit comparison
      Given mortgage payment calculator screen is shown
      When user clicks on Exit comparison button
      Then tabs are no longer there

    Scenario When no values are entered
      Given mortgage payment calculator screen is shown
      When any of the form valueis missing
      Then Monthly payment should be 0.00
      And Mortage Amount should be 0.00
      And Amortization should be -
