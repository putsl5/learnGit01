Feature: Login to Application


    As a valid user
    I want to login into Application

    Scenario: Valid Login
    Given I open login page
    When I submit login
    Then I should see homepage
