package com.qa.Pages;

import org.openqa.selenium.WebElement;

import com.qa.Objects.Objects_HomePage;
import com.qa.util.AbstractPage;

public class Methods_Homepage extends AbstractPage {

	Objects_HomePage Obj_Home = new Objects_HomePage();

	// Method to verify the Robo Bank Logo
	public Boolean isLogoVisible() {
		WaitForPageLoad();
	
		return Obj_Home.isLogoVisible();
	}

	/*
	 * Author: Nelson 
	 * Method to Navigate to Particulieren page Implemented a Common
	 * methods in BaseClass to for Element visibility will check for isDisplayed
	 * method as well
	 */
	public void toParticulieren() {

		Obj_Home.customerMenuLinks.stream().filter(w -> w.getText().equals("Particulieren")).findFirst()
				.ifPresent(WebElement::click);

		WaitForPageLoad();
		WaitForElementvisible(Obj_Home.hypotheekLink);

	}
}
