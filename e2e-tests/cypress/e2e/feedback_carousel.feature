Feature: Feedback carousel on Home page

 Background:
    When I visit Home page

  Scenario: As a user, I can validate mentors carousel
    And I validate the Feedback header
    And I validate that mentors feedback carousel exists

  Scenario: As a user, I can switch between mentors carousel slides
    And I compare slide "1" of the carousel with reference
    And I can switch to the next carousel slide
    And I can switch to the previous carousel slide
    And I compare slide "1" of the carousel with reference
  
  Scenario: As a user, I can switch next carousel slides and get back to the first one
    And I click the next arrow in carousel "4" times
    And I compare slide "1" of the carousel with reference
  
  Scenario: As a user, I can compare each slide with its reference 
    And I compare slide "1" of the carousel with reference
    And I can switch to the next carousel slide
    And I compare slide "2" of the carousel with reference
    And I can switch to the next carousel slide
    And I compare slide "3" of the carousel with reference
    And I can switch to the next carousel slide
    And I compare slide "4" of the carousel with reference
    And I can switch to the next carousel slide
    