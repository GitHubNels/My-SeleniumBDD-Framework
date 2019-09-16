Feature: Test Rabobank.nl search functionality 

@SearchFilter
Scenario Outline:
The search results page is populated when I use the search function 
	Given I am on the Rabobank homepage 
	And I navigate to particulieren 
	When I search for "<Rekening>" open 
	Then search results contain page with title "<Rekening>" open 
	
	Examples: 
		|Rekening|
		| Rekening openen|


@SearchFilter
Scenario Outline: I can filter the search results for "Particulieren" or "Bedrijven" 
	Given I am on the Rabobank homepage 
	And I navigate to particulieren 
	When I search for "<Sparen>" open 
	When I select "<Sparen>" to filter the search results
	Then search results contain page with title "<Sparen>"
	
	Examples: 
		|Sparen|
		| Sparen|