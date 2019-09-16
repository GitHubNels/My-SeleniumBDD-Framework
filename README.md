# Rabobank Transactions Intake Test

1. Completely Re-organized the code with more visbility. 
2. And enhanced the test maintenance which is more usable when code breaks in future.
3. Reduced code duplication by adding re-usable methods in Robo Bank in a common Package

You need to get installed:

* [Maven](https://maven.apache.org/) - Dependency Management
* [Eclipse](Any Latest Version of Eclipse with Cucumber Add on)
* [Java 8](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html)
* [Chrome](https://www.google.com/intl/nl_ALL/chrome/)

Note: I have Updated the POM.xml with TestNG and report dependencies

## Exercises

### Exercise 1 - Completion Status
 
1. I have created a Feature file to handle the contact US page. And written a code just to validate the page title alone
2. I have applied re-usable methods to handle the common functionalities in the application
3. Attached the Pretty HTML report with screen shots- The Private Banking Page navigation issue (Refer with the attached HTML report for more details)

### Exercise 2 - Completion Status

I have fixed the broken code and organzied the complete code based on Page wise. So that when another time code changes happends. It will be easy to make correction in the page(i.e class files)


## Questions

### Question 1

```
There's a link called 'Klant worden' in the 6th column of the footer. What is the CSS selector that you would use to
click on this link?
```

Answer:    
There is no link as 'Klant worden' in the footer page, It is available in the header customer menu and below is the CSS selector for selecting that link

a.rbr-customer-menu__link[href='/particulieren/klant-worden/']


### Question 2

```
Can you think of a way to be less dependent on CSS id's and classes, and still have a good testable HTML structure?
Please elaborate in your answer.
```

Answer:
From my point about CSS selector:
We can derive a CSS selector without much dependent on Id's and classes and it will work. But if we have small changes in the HTML structure, Then
our CSS selector or xpath wont work it will FAIL. So, my suggestion is IDs are the KING and the safest locator option and should always be my first choice and second with Classes,names etc.

The Reason is, The IDs is independent of the element type and thus if the developer moves the element or changes its type. The WebDriver can still locate it.
