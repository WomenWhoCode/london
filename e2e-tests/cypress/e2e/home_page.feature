Feature: Home Page

  Scenario: As a user, I can open Home page and verify UI elements
    When I visit Home page
    Then I verify all the header's tabs
    And I verify the header's logo
    And I verify the header
    And I verify the footer
    And I verify the "Home" active tab url
    And I verify all UI elements on the Home page
