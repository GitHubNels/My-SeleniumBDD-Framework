package com.qa.Objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.AbstractPage;

public class Objects_SearchModule extends AbstractPage {
	
	@FindBy(xpath = "//a[contains(text(), 'Hypotheek')]")
	public WebElement hypotheekLink;
	
	@FindBy(xpath = "//a[@class='rbr-context-menu__item rbr-menu-toggle']")
	public WebElement searchFilterDropDownButton;

	public By searchResultsPage = By.xpath("//*[@class='search-result-items']");
	public By cookieWallButton = By.xpath("//*[@id='cookiewall_popup']//p/button");
	public By centerButton = By.className("center-button");

	public Objects_SearchModule() {
		PageFactory.initElements(driver, this);
	}

}
