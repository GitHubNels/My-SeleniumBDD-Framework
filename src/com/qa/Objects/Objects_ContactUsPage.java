package com.qa.Objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.AbstractPage;

public class Objects_ContactUsPage extends AbstractPage
{
	@FindBy(xpath = "//a[@class='icon-link'][2]")
	public WebElement ContactUS_Link;

	public Objects_ContactUsPage() {
		PageFactory.initElements(driver, this);
	}
}
