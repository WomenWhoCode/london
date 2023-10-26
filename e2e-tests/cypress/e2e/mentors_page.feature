Feature: Home Page

  Scenario: As a user, I can open Mentros page and verify mentors data
    When I visit Home page
    And I switch to "Mentors" page
    Then I verify mentors data