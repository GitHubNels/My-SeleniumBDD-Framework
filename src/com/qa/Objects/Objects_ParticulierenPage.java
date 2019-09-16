package com.qa.Objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.AbstractPage;

public class Objects_ParticulierenPage extends AbstractPage {

	@FindBy(xpath = "//input[@class='rfs2-input-search__input']")
	public WebElement searchField;

	/*
	 * Author: Nelson Corrected this help block xpath
	 */
	@FindBy(xpath = "//input[@class='rfs2-input-search__input']")
	public WebElement helpBlock;

	/*
	 * Added a xpath for Search icon
	 */
	@FindBy(xpath = "//span[@class='rfs2-input-search__button rfs2-input-search__search-button']")
	public WebElement Search_Icon;

	public By searchResultsPage = By.xpath("//*[@id='content-selection-search-result']");
	public By cookieWallButton = By.xpath("//*[@id='cookiewall_popup']//p/button");
	public By searchFilterDropDownButton = By.className("rfs-select__button");

	@FindBy(className = "center-button")
	public WebElement centerButton;

	public Objects_ParticulierenPage() {
		PageFactory.initElements(driver, this);
	}
}
