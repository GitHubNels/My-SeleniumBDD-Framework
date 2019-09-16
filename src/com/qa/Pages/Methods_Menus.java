package com.qa.Pages;

import org.openqa.selenium.WebElement;

import com.common.Methods.CommonMethods;
import com.qa.Objects.Objects_HomePage;
import com.qa.util.AbstractPage;

public class Methods_Menus extends AbstractPage {

	Objects_HomePage obj = new Objects_HomePage();
	CommonMethods com = new CommonMethods();

	/*
	 * Author: Nelson
	 * Created a Common method for menu navigation
	 */
	public void Main_menu_Nvg(String Menu) {

		obj.customerMenuLinks.stream().filter(w -> w.getText().equals(Menu)).findFirst().ifPresent(WebElement::click);
		WaitForPageLoad();
	}

	
}
