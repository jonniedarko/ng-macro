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
  &lt;meta http-equiv="Content-Type" content="text&#47;html; charset=UTF-8"&gt;
  &lt;title&gt;ng-Macro: Tests&lt;&#47;title&gt;
  &lt;!-- jasmine --&gt;
  &lt;script src="jasmine&#47;jasmine.js"&gt;&lt;&#47;script&gt;
  &lt;!-- jasmine's html reporting code and css --&gt;
  &lt;script src="jasmine&#47;jasmine-html.js"&gt;&lt;&#47;script&gt;
  &lt;script src="jasmine&#47;boot.js"&gt;&lt;&#47;script&gt;
  &lt;link href="jasmine&#47;jasmine.css" rel="stylesheet" &#47;&gt;
  &lt;!-- angular itself --&gt;
  &lt;script src="..&#47;vendor&#47;angular&#47;angular.min.js"&gt;&lt;&#47;script&gt;
  &lt;!-- angular's testing helpers --&gt;
  &lt;script src="..&#47;vendor&#47;angular&#47;angular-mocks.js"&gt;&lt;&#47;script&gt;
  &lt;!-- your angular app code --&gt;
  &lt;script src="..&#47;app.js"&gt;&lt;&#47;script&gt;
  &lt;!-- your Jasmine specs (tests) --&gt;
  &lt;script src="spec&#47;ngMacroSpec.js"&gt;&lt;&#47;script&gt;
&lt;&#47;head&gt;
&lt;body&gt;

&lt;&#47;body&gt;
&lt;&#47;html&gt;
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

now if you got to ng-model/test on your browser you should see the following:

    [SCREENSHOT GOES HERE]

Congrats you now have a working test environment!!

[code so far]()

Now any time we want to create a set of test cases or unit tests we just create a new `it()`. The first argument is the name of the unit test the 2nd is a function which wraps our tests.

Inside this we use [jasmine's](http://jasmine.github.io/2.0/introduction.html) api to test or code, at the moment we are simple testing that `true = true` ...ya don't say say you...

there are loads more useful methods in the Jasmine api (check out the above link to see them). I will cover any functions as I am going along in this post and future posts. For this Post we only need one more method

`beforeEach()`

This simple performs what ever setup we need before each `it()` is run. in our case we will be using it to set up our module and scope for testing but it coule be used to do many things like initiat data, inject mocked services or any dependencies our tests require.



So now we need to initiate our module and controller. In order to do this we need will use 2 methods from the angular-mocks library

 - [module()](https://docs.angularjs.org/api/ngMock/function/angular.mock.module) is used to register our module and collect configuration information which will be used by `inject()`

 - [inject()](https://docs.angularjs.org/api/ngMock/function/angular.mock.inject) is used to create a new instance of `$injector` which is used for resolving references





#sources
 - http://stackoverflow.com/questions/964910/is-javascript-an-untyped-language
 - https://docs.angularjs.org/guide/unit-testing
 - http://andyshora.com/unit-testing-best-practices-angularjs.html