Feature: Mentors Page - Search & Filters

  Background:
    When I visit Home page
    Then I switch to "Mentors" page
    And I copy "mentors.yml" test data to temporary folder

  Scenario: As a user, I can search mentors based on filter set
    And I expand Advanced filters
    Then I set "2 - 4 years" filter to "Experience" filter
    And I set "Backend Developer" filter to "Expertise" filter
    And I set "Grow from mid-level to senior-level" filter to "Mentee focus" filter
    And I set "Both" filter to "Format" filter
    Then I can see correct search results for "Leo Parkes-Neptune" query

  Scenario: As a user, I can search mentors with no filters set
    And I type "Anastasia" in the mentors search input
    And I click the Search button
    Then I verify that the mentors search input contains "Anastasia" text
    And I can see correct search results for "Anastasia" query
    Then I clear the mentors search input
    And I click the Search button
    And I can see the list as the previous mentor list
   
  Scenario: As a user, I cannot Search anything without entering a search query
    And I can see the list as the previous mentor list
    Then I click the Search button
    And I can see the list as the previous mentor list

  Scenario: As a user, I can search mentors based on Expertise filter
    And I expand Advanced filters
    And I set "Data Science" filter to "Expertise" filter
    And I verify that the number of found mentors is equal to "9"
    
  Scenario: As a user, I can search mentors based on Format filter
    And I expand Advanced filters
    And I set "Ad-Hoc" filter to "Format" filter
    And I verify that the number of found mentors is equal to "13"
    
  Scenario: As a user, I can search mentors based on multiple filters and reset them
    And I expand Advanced filters
    Then I set "2 - 4 years" filter to "Experience" filter
    And I set "DevOps" filter to "Expertise" filter
    And I can see correct search results for "Atibhi Agrawal" query
    Then I clear all filters
    And I can see the list as the previous mentor list

  Scenario: As a user, I can search mentors and get no results
    And I type "Ivan" in the mentors search input
    And I expand Advanced filters
    Then I set "2 - 4 years" filter to "Experience" filter
    And I set "Backend Developer" filter to "Expertise" filter
    And I set "Grow from mid-level to senior-level" filter to "Mentee focus" filter
    And I set "Both" filter to "Format" filter
    Then I can see a message that no results found