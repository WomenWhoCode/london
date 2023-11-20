Feature: Mentors Page

  Background:
    When I visit Home page
    Then I switch to "MENTORS" page

  Scenario: As a user, I can open Mentors page and verify mentors data on Presentation tab
    And I verify mentors cards: Presentation tab
  
  Scenario: As a user, I can open Mentors page and verify mentors data on Skills tab
    And I verify mentors cards: Skills tab
  
  Scenario: As a user, I can open Mentors page and verify mentors data on Mentees tab
    And I verify mentors cards: Mentees tab

  Scenario: As a user, I can open Mentors page and verify UI elements
    Then I verify all the header's tabs
    And I verify the header's logo
    And I verify all UI elements on the Mentors page
    And I scroll the page to "bottom"
    And I verify the footer