@TODO Need to confirm from ISK if user comes without address then do we have to verify it?
  Also how the hidden fields like phone, email will be filled? from where its data would be come ?
  What are the required fields

Feature: I4G user form

    Scenario: Accessing the I4G form with address passed in
      Given user is landed on I4G form page
      And address is sent from address eligiblity
      When initally
      Then user will be able to see the form component
      And following fields:
        | Field |
        | Full Name  |
        | Full Address |
        | SIN  |
        | CCB Entitle Amount |
        | Cheque Amount  |
        | Upload CCB |
      And Address field as read only
      And hidden fields atleast:
        | Field |
        | X_show_form  |
        | X_file_types |
        | X_api_key |
        | X_redirect_url |

  Scenario: Accessing the I4G form without address passed in
    Given user is landed on I4G form page
    And address is not sent from address eligiblity
    When initally
    Then user will be able to see the form component
    And following fields:
      | Field |
      | Full Name  |
      | Full Address |
      | SIN  |
      | CCB Entitle Amount |
      | Cheque Amount  |
      | Upload CCB Notice|
    And hidden fields atleast:
      | Field |
      | X_show_form  |
      | X_file_types |
      | X_api_key |
      | X_redirect_url |

  Scenario: Submit the I4G form without validation error
    Given user has filled the form with all valid data
    When user submits the form
    Then user is redirected to SFC with form post

  Scenario: Submit the I4G form with validation error
    Given user has not filled the form with missing fields
    When user submits the form
    Then user is shown validation message

  Scenario: Landing on form with RRN
    Given user is returned back from sfc with RRN in query string
    When initally
    Then user is shown prepopulated form
    And file from sfc fetched based on RRN
