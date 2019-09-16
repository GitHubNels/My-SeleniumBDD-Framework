package com.qa.StepDefinitions;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import com.qa.util.AbstractPage;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class DriverManager extends AbstractPage {
	// Hooks from cucumber
	@Before
	public void Setup() throws InterruptedException, IOException {
		System.out.println("SETUP STARTED ");
		AbstractPage.initialization();
	}

	@After
	public void TearDown() {
		System.out.println("TEARDOWN ENDED");
		driver.close();
		driver.quit();
	}

	@After
	public void endTest(Scenario scenario) {
		try {
			if (scenario.isFailed()) {
				final byte[] screenshot = ((TakesScreenshot) AbstractPage.driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} else
				scenario.embed(((TakesScreenshot) AbstractPage.driver).getScreenshotAs(OutputType.BYTES), "image/png");
		} catch (WebDriverException e) {
			e.printStackTrace();
		}
	}
}
