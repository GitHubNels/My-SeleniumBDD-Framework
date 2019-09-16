package com.common.Methods;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import com.qa.Objects.Objects_ParticulierenPage;
import com.qa.util.AbstractPage;

public class CommonMethods extends AbstractPage {

	/*
	 * Common Methods to ScrollIntoElement based on the application behviour
	 */
	public void scrollIntoElement(WebElement element) throws InterruptedException {
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
		Thread.sleep(500);
	}

	/*
	 * Placed the Common Re-usable methods here to handle cookies 
	 * 
	 */
	public void checkAndClickThroughCookieWall() throws InterruptedException {
		
		Objects_ParticulierenPage obj=new Objects_ParticulierenPage();

		List<WebElement> isCookieWallPresent = driver.findElements(By.xpath("//*[@id='cookiewall_popup']"));
		if (isCookieWallPresent.size() != 0) {
			driver.findElement(obj.cookieWallButton).click();
			System.out.println("Cookies Handled Sucessfully");
			Thread.sleep(2000);
			WaitForPageLoad();
		}
	}

}
