package com.qa.Pages;

import com.common.Methods.CommonMethods;
import com.qa.Objects.Objects_ParticulierenPage;
import com.qa.util.AbstractPage;

public class Methods_ParticulierenPage extends AbstractPage {
	Objects_ParticulierenPage obj_particul = new Objects_ParticulierenPage();

	// All the Re-usable common methods are declared here for re-usability
	CommonMethods common = new CommonMethods();

	public void enterValueInSearchField(String searchTerm) throws InterruptedException {

		common.scrollIntoElement(obj_particul.searchField);
		WaitForElementvisible(obj_particul.searchField);
		obj_particul.helpBlock.clear();
		obj_particul.helpBlock.sendKeys(searchTerm);
		obj_particul.Search_Icon.click();
		WaitForPageLoad();
		Thread.sleep(2000);
	}


}
