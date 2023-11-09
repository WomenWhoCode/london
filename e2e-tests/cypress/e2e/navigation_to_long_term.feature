Feature: Navigation from Home to Long-term page

  Background:
    When I visit Home page

  Scenario: As a user, I can navigate from Home to Long-term timeline page via website's header 
    Then I switch to "LONG-TERM TIMELINE" page

  Scenario: As a user, I can navigate from Home to Long-term timeline page via Check more details button
    Then I click Check more details button