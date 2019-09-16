package com.qa.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractPage {
	public static WebDriver driver;
	public static Properties prop;

	public AbstractPage() {
		// Declared a constructor to read the Properties file
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\com\\qa\\config\\config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// Initialization to call the browser and Delete all cookies
	public static void initialization() throws IOException {
		String browserName = prop.getProperty("browser");

		if (browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Constant.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Constant.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.get(prop.getProperty("url"));

	}

	public WebDriver getDriver() {
		return driver;
	}

	/*
	 * Static method to create a Waitmethod to Page Load Wait
	 */
	public void WaitForPageLoad() {
		WebDriverWait wait = new WebDriverWait(driver, Constant.PAGE_LOAD_TIMEOUT);
		wait.withMessage("Wait");
	}

	/*
	 * Static method to wait for element to be clickable
	 */
	public void WaitForElementClickable(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, Constant.element_clickable);
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	/*
	 * Static method to wait for element to be visible
	 */
	public void WaitForElementvisible(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, Constant.element_visible);
		wait.until(ExpectedConditions.visibilityOf(element));
		element.isDisplayed();
	}



}
