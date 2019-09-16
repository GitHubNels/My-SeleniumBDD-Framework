Feature: Test Rabobank.nl ContactUs page 

@ContactUS 
Scenario Outline: Customer type Particulieren User access ContactUs page 
	Given I am on the Rabobank homepage 
	And I navigate to "<Menu>" 
	And I navigate to ContacUs page 
	Then Verify the ContactUs Page Details"<Page_Title>" 
	
	Examples: 
		|Menu|Page_Title|
		|Particulieren|contact opnemen met de rabobank – particulieren|
		
		@ContactUS 
		Scenario Outline: Customer type Private Banking User access ContactUs page 
			Given I am on the Rabobank homepage 
			And I navigate to "<Menu>" 
			And I navigate to ContacUs page 
			Then Verify the ContactUs Page Details"<Page_Title>" 
			
			Examples: 
				|Menu|Page_Title|
				|Private Banking|Private Banking - Rabobank|
				
				@ContactUS 
				Scenario Outline: Customer type Bedrijven User access ContactUs page 
					Given I am on the Rabobank homepage 
					And I navigate to "<Menu>" 
					And I navigate to ContacUs page 
					Then Verify the ContactUs Page Details"<Page_Title>" 
					
					Examples: 
						|Menu|Page_Title|
						|Bedrijven|contact – contactgegevens voor bedrijven - rabobank|