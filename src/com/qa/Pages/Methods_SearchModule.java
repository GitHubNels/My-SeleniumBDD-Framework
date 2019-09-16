package com.qa.Pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.common.Methods.CommonMethods;
import com.qa.Objects.Objects_SearchModule;
import com.qa.util.Constant;
import com.qa.util.AbstractPage;

public class Methods_SearchModule extends AbstractPage {

	Objects_SearchModule Obj_Search = new Objects_SearchModule();

	/*
	 * Corrected this Method and also Corrected the Search Results Xpath in the objects page 
	 * Author: Nelson
	 */
	public Boolean searchModuleElementIsVisible() {

		WebDriverWait wait = new WebDriverWait(driver, Constant.element_visible);
		wait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(Obj_Search.searchResultsPage, By.xpath("//h1")));

		return driver.findElement(Obj_Search.searchResultsPage).isDisplayed();
	}

	/*
	 * Author: Nelson
	 * Corrected the below method to Verify the Search Results
	 * matches with the expected
	 */
	public Boolean searchResults(String expectedResult) throws InterruptedException {
		Thread.sleep(1000);
		boolean expectedResultFound = false;

		List<String> searchResultText = new ArrayList<>();
		List<WebElement> searchResults = driver.findElements(By.xpath("//*[@class='search-result-items']//h1"));
		for (WebElement searchResult : searchResults) {
			searchResultText.add(searchResult.getText());
		}

		for (String result : searchResultText)
			if (result.contains(expectedResult)) {
				expectedResultFound = true;
				break;
			}

		return expectedResultFound;
	}

	/*
	 * Author:Nelson 
	 * Removed the Switch cases and Handled using the parameterized
	 * xpath Reduced the 10 lines code into 3 lines using the parameterized xpath
	 */
	public void selectDropDownValue(String filterValue) throws InterruptedException {
		CommonMethods common = new CommonMethods();
		String expectedValue = filterValue.toLowerCase();

		common.checkAndClickThroughCookieWall();
		WaitForPageLoad();
		common.scrollIntoElement(Obj_Search.searchFilterDropDownButton);
		Obj_Search.searchFilterDropDownButton.click();

		List<WebElement> dropDownItems = driver.findElements(By
				.xpath("//*[@id='context-menu-main-nav-target']//ul[@class='rfs-text js_context_menu_link_list']//a"));
		List<String> dropDownValues = new ArrayList<>();
		for (WebElement item : dropDownItems) {
			dropDownValues.add(item.getText().toLowerCase());
		}
		if (!dropDownValues.contains(expectedValue)) {
			throw new AssertionError("Entered value can not be found in dropdown list");
		}

		WebElement Dropdwn_Link = driver.findElement(
				By.xpath("//*[@id='context-menu-main-nav-target']//a[@href='/particulieren/" + expectedValue + "/']"));

		if (Dropdwn_Link.isDisplayed() == true) {
			Dropdwn_Link.click();

		} else
			throw new AssertionError("No locator defined to be clicked");
	}

}
