$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_SearchFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Test Rabobank.nl search functionality",
  "description": "",
  "id": "test-rabobank.nl-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "The search results page is populated when I use the search function",
  "id": "test-rabobank.nl-search-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SearchFilter"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to particulieren",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search for \"\u003cRekening\u003e\" open",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "search results contain page with title \"\u003cRekening\u003e\" open",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-rabobank.nl-search-functionality;;",
  "rows": [
    {
      "cells": [
        "Rekening"
      ],
      "line": 12,
      "id": "test-rabobank.nl-search-functionality;;;1"
    },
    {
      "cells": [
        "Rekening openen"
      ],
      "line": 13,
      "id": "test-rabobank.nl-search-functionality;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27063073300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "The search results page is populated when I use the search function",
  "id": "test-rabobank.nl-search-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SearchFilter"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to particulieren",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search for \"Rekening openen\" open",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "search results contain page with title \"Rekening openen\" open",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Homepage.onHomePage()"
});
formatter.result({
  "duration": 307958400,
  "status": "passed"
});
formatter.match({
  "location": "Steps_Homepage.toParticulieren()"
});
formatter.result({
  "duration": 1380279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rekening openen",
      "offset": 14
    }
  ],
  "location": "Steps_ParticulierenPage.searchFor(String)"
});
formatter.result({
  "duration": 7291103300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rekening openen",
      "offset": 40
    }
  ],
  "location": "Steps_ParticulierenPage.searchResultContains(String)"
});
formatter.result({
  "duration": 61872876700,
  "status": "passed"
});
formatter.after({
  "duration": 2765285900,
  "status": "passed"
});
formatter.after({
  "duration": 16039100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "I can filter the search results for \"Particulieren\" or \"Bedrijven\"",
  "description": "",
  "id": "test-rabobank.nl-search-functionality;i-can-filter-the-search-results-for-\"particulieren\"-or-\"bedrijven\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SearchFilter"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to particulieren",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search for \"\u003cSparen\u003e\" open",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select \"\u003cSparen\u003e\" to filter the search results",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "search results contain page with title \"\u003cSparen\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "test-rabobank.nl-search-functionality;i-can-filter-the-search-results-for-\"particulieren\"-or-\"bedrijven\";",
  "rows": [
    {
      "cells": [
        "Sparen"
      ],
      "line": 25,
      "id": "test-rabobank.nl-search-functionality;i-can-filter-the-search-results-for-\"particulieren\"-or-\"bedrijven\";;1"
    },
    {
      "cells": [
        "Sparen"
      ],
      "line": 26,
      "id": "test-rabobank.nl-search-functionality;i-can-filter-the-search-results-for-\"particulieren\"-or-\"bedrijven\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21811198900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I can filter the search results for \"Particulieren\" or \"Bedrijven\"",
  "description": "",
  "id": "test-rabobank.nl-search-functionality;i-can-filter-the-search-results-for-\"particulieren\"-or-\"bedrijven\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@SearchFilter"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to particulieren",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search for \"Sparen\" open",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select \"Sparen\" to filter the search results",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "search results contain page with title \"Sparen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Homepage.onHomePage()"
});
formatter.result({
  "duration": 47999600,
  "status": "passed"
});
formatter.match({
  "location": "Steps_Homepage.toParticulieren()"
});
formatter.result({
  "duration": 1163176700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sparen",
      "offset": 14
    }
  ],
  "location": "Steps_ParticulierenPage.searchFor(String)"
});
formatter.result({
  "duration": 7686969300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sparen",
      "offset": 10
    }
  ],
  "location": "Steps_ParticulierenPage.filterSearchResultsByType(String)"
});
formatter.result({
  "duration": 23522309300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sparen",
      "offset": 40
    }
  ],
  "location": "Steps_ParticulierenPage.search_results_contain_page_with_title(String)"
});
formatter.result({
  "duration": 58368400,
  "status": "passed"
});
formatter.after({
  "duration": 2786067300,
  "status": "passed"
});
formatter.after({
  "duration": 3428900,
  "status": "passed"
});
formatter.uri("2_ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Test Rabobank.nl ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer type Particulieren User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-particulieren-user-access-contactus-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"\u003cMenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the ContactUs Page Details\"\u003cPage_Title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-particulieren-user-access-contactus-page;",
  "rows": [
    {
      "cells": [
        "Menu",
        "Page_Title"
      ],
      "line": 11,
      "id": "test-rabobank.nl-contactus-page;customer-type-particulieren-user-access-contactus-page;;1"
    },
    {
      "cells": [
        "Particulieren",
        "contact opnemen met de rabobank – particulieren"
      ],
      "line": 12,
      "id": "test-rabobank.nl-contactus-page;customer-type-particulieren-user-access-contactus-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34844520500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Customer type Particulieren User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-particulieren-user-access-contactus-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"Particulieren\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the ContactUs Page Details\"contact opnemen met de rabobank – particulieren\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Homepage.onHomePage()"
});
formatter.result({
  "duration": 56249200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Particulieren",
      "offset": 15
    }
  ],
  "location": "Steps_ContactUsPage.i_navigate_to(String)"
});
formatter.result({
  "duration": 1252133100,
  "status": "passed"
});
formatter.match({
  "location": "Steps_ContactUsPage.i_navigate_to_ContacUs_page()"
});
formatter.result({
  "duration": 1816564000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact opnemen met de rabobank – particulieren",
      "offset": 34
    }
  ],
  "location": "Steps_ContactUsPage.verify_the_ContactUs_Page_Details(String)"
});
formatter.result({
  "duration": 4153014200,
  "status": "passed"
});
formatter.after({
  "duration": 2773205400,
  "status": "passed"
});
formatter.after({
  "duration": 1351100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Customer type Private Banking User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-private-banking-user-access-contactus-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to \"\u003cMenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the ContactUs Page Details\"\u003cPage_Title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-private-banking-user-access-contactus-page;",
  "rows": [
    {
      "cells": [
        "Menu",
        "Page_Title"
      ],
      "line": 22,
      "id": "test-rabobank.nl-contactus-page;customer-type-private-banking-user-access-contactus-page;;1"
    },
    {
      "cells": [
        "Private Banking",
        "Private Banking - Rabobank"
      ],
      "line": 23,
      "id": "test-rabobank.nl-contactus-page;customer-type-private-banking-user-access-contactus-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31886119400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Customer type Private Banking User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-private-banking-user-access-contactus-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I navigate to \"Private Banking\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the ContactUs Page Details\"Private Banking - Rabobank\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Homepage.onHomePage()"
});
formatter.result({
  "duration": 44960000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Private Banking",
      "offset": 15
    }
  ],
  "location": "Steps_ContactUsPage.i_navigate_to(String)"
});
formatter.result({
  "duration": 5423539400,
  "status": "passed"
});
formatter.match({
  "location": "Steps_ContactUsPage.i_navigate_to_ContacUs_page()"
});
formatter.result({
  "duration": 2383611900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Private Banking - Rabobank",
      "offset": 34
    }
  ],
  "location": "Steps_ContactUsPage.verify_the_ContactUs_Page_Details(String)"
});
formatter.result({
  "duration": 14965743900,
  "error_message": "java.lang.AssertionError: expected [private banking - rabobank] but found [contact opnemen met de rabobank – particulieren]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.qa.Pages.Methods_ContactUs.VerifyPage_Title(Methods_ContactUs.java:26)\r\n\tat com.qa.StepDefinitions.Steps_ContactUsPage.verify_the_ContactUs_Page_Details(Steps_ContactUsPage.java:33)\r\n\tat ✽.Then Verify the ContactUs Page Details\"Private Banking - Rabobank\"(2_ContactUs.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2779752900,
  "status": "passed"
});
formatter.after({
  "duration": 1084400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Customer type Bedrijven User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-bedrijven-user-access-contactus-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"\u003cMenu\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the ContactUs Page Details\"\u003cPage_Title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-bedrijven-user-access-contactus-page;",
  "rows": [
    {
      "cells": [
        "Menu",
        "Page_Title"
      ],
      "line": 33,
      "id": "test-rabobank.nl-contactus-page;customer-type-bedrijven-user-access-contactus-page;;1"
    },
    {
      "cells": [
        "Bedrijven",
        "contact – contactgegevens voor bedrijven - rabobank"
      ],
      "line": 34,
      "id": "test-rabobank.nl-contactus-page;customer-type-bedrijven-user-access-contactus-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15425056200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Customer type Bedrijven User access ContactUs page",
  "description": "",
  "id": "test-rabobank.nl-contactus-page;customer-type-bedrijven-user-access-contactus-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@ContactUS"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on the Rabobank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to \"Bedrijven\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ContacUs page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the ContactUs Page Details\"contact – contactgegevens voor bedrijven - rabobank\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Homepage.onHomePage()"
});
formatter.result({
  "duration": 50397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bedrijven",
      "offset": 15
    }
  ],
  "location": "Steps_ContactUsPage.i_navigate_to(String)"
});
formatter.result({
  "duration": 3290409300,
  "status": "passed"
});
formatter.match({
  "location": "Steps_ContactUsPage.i_navigate_to_ContacUs_page()"
});
formatter.result({
  "duration": 1762137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact – contactgegevens voor bedrijven - rabobank",
      "offset": 34
    }
  ],
  "location": "Steps_ContactUsPage.verify_the_ContactUs_Page_Details(String)"
});
formatter.result({
  "duration": 3704615700,
  "status": "passed"
});
formatter.after({
  "duration": 2763800300,
  "status": "passed"
});
formatter.after({
  "duration": 2290400,
  "status": "passed"
});
});