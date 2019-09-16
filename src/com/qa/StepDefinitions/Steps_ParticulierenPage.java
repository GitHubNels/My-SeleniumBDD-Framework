package com.qa.StepDefinitions;

import org.openqa.selenium.By;
import org.testng.Assert;

import com.common.Methods.CommonMethods;
import com.qa.Pages.Methods_ParticulierenPage;
import com.qa.Pages.Methods_SearchModule;
import com.qa.util.AbstractPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps_ParticulierenPage extends AbstractPage {

	Methods_ParticulierenPage obj_particul = new Methods_ParticulierenPage();
	Methods_SearchModule obj_Search = new Methods_SearchModule();

	/*
	 * Corrected the Test Data Parameter 
	 * Author: Nelson
	 */
	@When("^I search for \"([^\"]*)\" open$")
	public void searchFor(String searchTerm) throws InterruptedException {

		obj_particul.enterValueInSearchField(searchTerm);
	}

	@Then("^search results contain page with title \"([^\"]*)\" open$")
	public void searchResultContains(String SearchResult) throws InterruptedException {
		CommonMethods obj_Cookie = new CommonMethods();

		obj_Cookie.checkAndClickThroughCookieWall();
		if (obj_Search.searchModuleElementIsVisible()) {
			String expe="true";
				Assert.assertEquals(obj_Search.searchResults(SearchResult).toString(),expe, "Search results not matches as expected");
		} else
			throw new

			AssertionError("Error: Unable to find search results");
	}

	@When("^I select \"([^\"]*)\" to filter the search results$")
	public void filterSearchResultsByType(String filterValue) throws InterruptedException {
		obj_Search.selectDropDownValue(filterValue);
	}

	/*
	 * Author:Nelson
	 * Created a New Method to verify the Page Title
	 */
	@Then("^search results contain page with title \"([^\"]*)\"$")
	public void search_results_contain_page_with_title(String FilterResult) throws Throwable {

		WaitForPageLoad();
		String Expected = FilterResult.toLowerCase();
		String Actual = driver.findElement(By.xpath("//h1[@class='title-block__title']")).getText().trim()
				.toLowerCase();
		Assert.assertEquals(Actual, Expected);
	}

}
