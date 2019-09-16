package com.qa.StepDefinitions;

import com.common.Methods.CommonMethods;
import com.qa.Pages.Methods_ContactUs;
import com.qa.Pages.Methods_Menus;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Steps_ContactUsPage 
{
	Methods_ContactUs contact=new Methods_ContactUs();

	@Given("^I navigate to \"([^\"]*)\"$")
	public void i_navigate_to(String Menu) throws Throwable
	{
		Methods_Menus menu=new Methods_Menus();
		menu.Main_menu_Nvg(Menu);
	  
	}
	
	@Given("^I navigate to ContacUs page$")
	public void i_navigate_to_ContacUs_page() throws Throwable 
	{
		contact.Navigate_to_ContactUs();
	}

	@Then("^Verify the ContactUs Page Details\"([^\"]*)\"$")
	public void verify_the_ContactUs_Page_Details(String Title) throws Throwable {
		CommonMethods obj_com=new CommonMethods();
		
		obj_com.checkAndClickThroughCookieWall();
		contact.VerifyPage_Title(Title);
	  
	}
}
