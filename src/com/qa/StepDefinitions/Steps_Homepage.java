package com.qa.StepDefinitions;

import org.testng.Assert;

import com.qa.Pages.Methods_Homepage;
import com.qa.Pages.Methods_Menus;

import cucumber.api.java.en.Given;

public class Steps_Homepage {
	Methods_Homepage homePage = new Methods_Homepage();
	Methods_Menus menu=new Methods_Menus();

	@Given("^I am on the Rabobank homepage$")
	public void onHomePage() {

		boolean Acutal = homePage.isLogoVisible();
		Assert.assertEquals(Acutal, true, "Expecting the Rabobank logo to be visible");
	}

	@Given("^I navigate to particulieren$")
	public void toParticulieren() {

		homePage.toParticulieren();

	}
}
