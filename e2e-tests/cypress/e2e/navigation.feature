Feature: Navigation from Home to Long-term page

  Background:
    When I visit Home page

  Scenario: As a user, I can navigate between pages using the header
    And I switch to "MENTORS" page
    And I switch to "RESOURCES" page
    And I switch to "LONG-TERM TIMELINE" page
    And I switch to "AD-HOC TIMELINE" page
    And I switch to "STUDY GROUP TIMELINE" page
    And I switch to "CODE OF CONDUCT" page
    And I switch to "FAQ" page
    And I switch to "TEAM" page
    And I switch to "HOME" page

  Scenario: As a user, I can navigate from Home to Long-term timeline page via Check more details button
    Then I click Check more details button

  Scenario: As a user, I can navigate from Home to Mentors page via Check our mentors button
    Then I click Check our mentors button
  
  Scenario: As a user, I can navigate back to Home clicking WWC logo
    Then I switch to "TEAM" page
    And I get back to the Home page using WWC logo