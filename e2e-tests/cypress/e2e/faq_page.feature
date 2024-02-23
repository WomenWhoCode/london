Feature: FAQ Page

  Background:
    When I visit Home page
    Then I switch to "FAQ" page

  Scenario: As a user, I can open FAQ page and verify UI elements
    And I verify the header's logo
    And I verify the footer
    And I verify all UI elements on the FAQ page
  
  Scenario: As a user, I can expand and collapse each section
    Then I can expand and collapse each section on the FAQ page