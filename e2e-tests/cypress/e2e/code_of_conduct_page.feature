Feature: Code of Conduct Page

  Background:
    When I visit Home page
    And I switch to "Code of conduct" page

  Scenario: As a user, I can open Code of Conduct page and verify UI elements
    And I verify the header's logo
    And I verify the footer
    Then I verify all UI elements on the Code of conduct page

  Scenario: As a user, I can open WWC Code of Conduct from Code of Conduct page
    Then I open WWC Code of Conduct
  
  Scenario: As a user, I can open Code of Conduct page and verify hidden elements
    Then I expand Code of Conduct for Mentees
    And I collapse Code of Conduct for Mentees
    Then I expand Code of Conduct for Mentors
    And I collapse Code of Conduct for Mentors