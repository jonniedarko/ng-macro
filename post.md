####Ng-Macro: Introduction to Unit Testing Controllers in AngularJS


So in the last post We built our first (basic) AngularJS App but we don't really know if its up to scratch, are there any issues with our code? Is everything working as we expected, or as importantly, is it failing as expcted when it is not used correctly and is it doing so in an informative manner.

#What is unit testing and why do we need it?
I won't go into detail on this as its a broad subject and is a topic in its own. If you have never head of it or are new have a look on [Wikipedia](http://en.wikipedia.org/wiki/Unit_testing) for brief overview or for some detailed articles have a look at [typemock's blog](http://blog.typemock.com/). For now I will just say the following:

_Test Driven Development_ or _TDD_ for short can be a slow setup, espically with exsisting projects, but once you get into the rythme and habit it can increase you productivity and development speed massively. Coming from a developer who has ADHD I can honestly say it helps keep you focused on the task.

With JavaScript in particular it brings many advantages. As a dynamically typed language we do not get the feedback from a compiller. It is also an untyped language so can be easy to make mistakes in var assignments. Unit testing helps us catch these. By at least Writing basic unit tests we can ensure regressions don't occur.

##The Basic's
>Angular is written with testability in mind, but it still requires that you do the right thing. We tried to make the right thing easy, but if you ignore these guidelines you may end up with an untestable application.

#Testing Controllers
Since Controllers usually contain the business logic, it is essential that they behave as expected and provide predictable results. A controller is an instance of an object defined by executing the controller function as a class constructor or simpley put it's calling the function, but in the context of creating an object.

#So what do we need to get started?
Normally I would use Karma or Grunt to run my tests and Jasmine as my testing framework but since we are not using node at the moment will just stick with a basic HTML page as our runner and Jasmine will take care of bootstrapping for us, we can concentrate on tests for us.

so lets jump in....

Start by
 1. downloading [angular-mocks](https://code.angularjs.org/1.2.16/angular-mocks.js) to the vendor directory
 2. [Jasmine 2.0.0](https://github.com/pivotal/jasmine/blob/master/dist/jasmine-standalone-2.0.0.zip) (you only require the files folder in lib/jasmine-2.0.0)
 3. Create a new folder in our project called "test" and inside add a new "index.html" file and add the following
 <pre class="html">
&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
  &lt;meta http-equiv="Content-Type" content="text&#47html; charset=UTF-8"&gt;
  &lt;title&gt;ng-Macro: Tests&lt;&#47title&gt;
  &lt;!-- jasmine --&gt;
  &lt;script src="jasmine&#47jasmine.js"&gt;&lt;&#47script&gt;
  &lt;!-- jasmine's html reporting code and css --&gt;
  &lt;script src="jasmine&#47jasmine-html.js"&gt;&lt;&#47script&gt;
  &lt;link href="jasmine&#47jasmine.css" rel="stylesheet" &#47&gt;
  &lt;!-- angular itself --&gt;
  &lt;script src="..&#47vendor&#47angular&#47angular.min.js"&gt;&lt;&#47script&gt;
  &lt;!-- angular's testing helpers --&gt;
  &lt;script src="..&#47vendor&#47angular&#47angular-mocks.js"&gt;&lt;&#47script&gt;
  &lt;!-- your angular app code --&gt;
  &lt;script src="..&#47app.js"&gt;&lt;&#47script&gt;
  &lt;!-- your Jasmine specs (tests) --&gt;
  &lt;script src="spec&#47ngMacroSpec.js"&gt;&lt;&#47script&gt;
&lt;&#47head&gt;
&lt;body&gt;
  &lt;!-- bootstrap jasmine! --&gt;
  &lt;script&gt;
  var runner = jasmine.getEnv();

  &#47&#47 Tell it to add an Html Reporter
  &#47&#47 this will add detailed HTML-formatted results
  &#47&#47 for each spec ran.
  runner.addReporter(new jasmine.HtmlReporter());

  &#47&#47 Execute the tests!
  runner.execute();
  &lt;&#47script&gt;
&lt;&#47body&gt;
&lt;&#47html&gt;
 </pre>
 4. Add the files mentioned above from lib/jasmine-2.0.0 to tests/jasmine
 5. Create a new folder "spec" and a new file "ngMacroSpec.js" inside the folder and add the following:
 <pre class="javascript" >
    describe("A suite", function() {
      it("contains spec with an expectation", function() {
        expect(true).toBe(true);
      });
    });
 </pre>






#sources
 - http://stackoverflow.com/questions/964910/is-javascript-an-untyped-language
 - https://docs.angularjs.org/guide/unit-testing
 - http://andyshora.com/unit-testing-best-practices-angularjs.html