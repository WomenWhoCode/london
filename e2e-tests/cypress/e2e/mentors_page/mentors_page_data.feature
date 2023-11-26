Feature: Mentors Page - Data testing

  Background:
    When I visit Home page
    Then I switch to "Mentors" page

  Scenario: As a user, I can open Mentors page and verify mentors data on Presentation tab
    And I verify mentors cards: Presentation tab
  
  Scenario: As a user, I can open Mentors page and verify mentors data on Skills tab
    And I verify mentors cards: Skills tab
  
  Scenario: As a user, I can open Mentors page and verify mentors data on Mentees tab
    And I verify mentors cards: Mentees tab