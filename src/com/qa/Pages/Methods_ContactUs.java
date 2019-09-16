package com.qa.Pages;

import org.testng.Assert;

import com.common.Methods.CommonMethods;
import com.qa.Objects.Objects_ContactUsPage;
import com.qa.util.AbstractPage;

public class Methods_ContactUs extends AbstractPage {

	public void Navigate_to_ContactUs() throws InterruptedException {
		Objects_ContactUsPage contact = new Objects_ContactUsPage();
		CommonMethods com = new CommonMethods();

		com.scrollIntoElement(contact.ContactUS_Link);
		contact.ContactUS_Link.click();

	}
	
	public void VerifyPage_Title(String PageTitle) throws InterruptedException {
		
			WaitForPageLoad();
			String Actual_title=driver.getTitle().toLowerCase();
			String Expected_title=PageTitle.toLowerCase();
			
			Assert.assertEquals(Actual_title, Expected_title);
	}

}
