package com.qa.Objects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.AbstractPage;

public class Objects_HomePage extends AbstractPage {

	/*
	 * Author: Nelson
	 * Corrected this CSS Logo
	 */
	@FindBy(css = "a.rbr-logo")
	protected WebElement raboLogo;
	
	/*
	 * Author: Nelson
	 * Corrected this CSS Path Header Menu
	 */
	@FindBy(css = ".rbr-header__sub-header a")
	public List<WebElement> customerMenuLinks;

	@FindBy(xpath = "//a[contains(text(), 'Hypotheek')]")
	public WebElement hypotheekLink;
	
	@FindBy(xpath = "//a[@class='icon-link'][2]")
	public WebElement ContactUS_Link;

	public Objects_HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	

	public Boolean isLogoVisible() {
		return raboLogo.isDisplayed();
	}

	public void toParticulieren() {
		customerMenuLinks.stream().filter(w -> w.getText().equals("Particulieren")).findFirst()
				.ifPresent(WebElement::click);
	}
}
