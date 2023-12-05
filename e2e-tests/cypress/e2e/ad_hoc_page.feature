Feature: Ad-hoc Page

  Background:
    When I visit Home page

  Scenario: As a user, I can open Ad-hoc page and verify UI elements
    Then I switch to "AD-HOC TIMELINE" page
    And I verify the header's logo
    And I verify the footer
    And I verify all UI elements on the Ad-hoc page