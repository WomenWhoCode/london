Feature: Study Group Page

  Background:
    When I visit Home page

  Scenario: As a user, I can open Study group page and verify UI elements
    Then I switch to "STUDY GROUP" page
    And I verify the header's logo
    And I verify the footer
    And I verify all UI elements on the Study group page