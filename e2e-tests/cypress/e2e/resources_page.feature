Feature: Resources Page

  Background:
    When I visit Home page
    Then I switch to "Resources" page

  Scenario: As a user, I can open "Resources" Page and verify UI elements
    Then I verify all the header's tabs
    And I verify UI elements on Resources Section
    And I verify UI elements on Events Section
    And I verify UI elements on Blog Posts Section
    And I scroll the page to "bottom"
    And I verify the footer
