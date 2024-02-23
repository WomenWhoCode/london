Feature: Mentors Page - UI

  Background:
    When I visit Home page
    Then I switch to "Mentors" page

  Scenario: As a user, I can open Mentors page and verify UI elements
    Then I verify all the header's tabs
    And I verify the header's logo
    And I verify all UI elements on the Mentors page
    And I scroll the page to "bottom"
    And I verify the footer