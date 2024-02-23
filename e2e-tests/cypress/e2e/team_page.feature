Feature: Team Page

 Background:
    When I visit Home page
    Then I switch to "Team" page

  Scenario: As a user, I can open Team page and verify team data
    And I verify team data
    And I verify collaborators data

  Scenario: As a user, I can open Team page and verify UI elements
    And I verify all the header's tabs
    And I verify the header's logo
    And I verify the footer
    And I verify the "Team" active tab url
    And I verify all UI elements on the Team page
