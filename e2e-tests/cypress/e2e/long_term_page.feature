Feature: Long-term timeline Page

  Background:
    When I visit Home page

  Scenario: As a user, I can open Long-term timeline page and verify UI elements
    And I switch to "LONG-TERM TIMELINE" page
    And I verify the header's logo
    And I verify the footer
    And I verify all UI elements on the Long-term timeline page