Feature: Playwright Website

  Scenario: Has title
    Given I am on the Playwright website
    Then the title should contain "Playwright"

  Scenario: Get started link
    Given I am on the Playwright website
    When I click the get started link
    Then the page should have a heading with the name of "Installation"
