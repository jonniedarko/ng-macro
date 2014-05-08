ngMacro:
An Introduction to AngularJS
<p>In this tutorial we will jump head first into building a simple but functional AngularJS
Application. We will be building a simple Macro Calculator which can calculate the calories,
protein, Carbs and fats required for increasing muscle, loosing fat or maintaining current
weight.</p>
<h3 id="whatisangularjs">
What is AngularJS?</h3>
<p>AngularJS is an opensource
structural MVC framework for dynamic web applications which
aims to make building large scale web applications easier for development, testing and
maintaining. It was created by Google is maintained by both Google and the AngularJS
community.</p>
<h4 id="someofitsmaingoalsinclude">
Some of Its main goals include:</h4>
<ul>
<li>Decoupling DOM manipulation from application logic.</li>
<li>Improve code testability.</li>
<li>Decoupling the client side of an application from the server side to allow development work to
progress in parallel.</li>
<li>Decoupling view from the business logic and data providers.</li>
</ul>
<h4 id="advantagesandwhywherewouldyouuseit">
Advantages and why/where would you
use it</h4>
<ul>
<li>It does a lot of the Heavy lifting for you, you create your component and AngularJS manages
those components and the connections between them</li>
<li>Data models in Angular are plain old JavaScript objects (POJO) and don’t require extraneous
getter and setter functions.</li>
<li>We can create custom reusable HTML elements</li>
<li>we Can create powerful custom filters which we can use to filter/sort or manipulate data
using our own custom rules e.g. you could create a filter that removed all vowels from your text
(see future post)</li>
<li>save writing a lot of repetitive or code.</li>
<li>Data binding allows instant real time updating without refreshing page</li>
<li>It is built with Unit Testing in mind and allows for far greater code coverage with less
effort</li>
</ul>
<p>One disadvantage in my opinion is the documentation/developers guide for basics is great
but when it some to complex examples such as complex directives I found fall shorts, especially
when it comes to the Unit testing.</p>
<p><a href="http://getbootstrap.com">Twitter's Bootstrap</a> is also used in this tutorial but I
will not be going into detail. In brief Bootstrap is a framework for responsive design which
contains HTML and CSSbased
design templates for typography, forms, buttons, navigation and
other interface components, as well as optional JavaScript extensions. In this tutorial we will only
be using it to "pretty up" our application and give it a polished professional look.</p>
<p>So Lets get started....</p>
<h4 id="databinding">
Data Binding</h4>
<p>The simplest and most basic example of the power and usefulness of AngularJS is in its
data binding. Most Web frameworks till recently only used single way data binding, for example if
we wanted to update our model we would make our change and then in order to see the change
we would have to refresh the view manually. Not in angularJS. In AngularJS we have 2way
Data
binding, when we update the view, it updates the model which auto update the views other
references. Ass Google put it: </p>
<blockquote>
<p>You can think of the view as simply an instant projection of your model.</p>
</blockquote>
<p>There are a number of ways to do this, the simplest is using 2 of AngularJS's built in
fundamental capabilities, a "directive" called ngModel and an Angular Expression.</p>
<p>A directive is a markers on a DOM element such as a css class, element name or attribute
used to attach some behaviour. We won't go into much detail here on Directives, thats a post in
its own for later.</p>
<p>An Angular Expression are JavaScriptlike
code snippets surrounded by double curly braces
like:</p>
<pre name="code "class="javascript"> {{ expression }}</pre>
<p>Expressions can evaluate AnguarJS variables ,such as those created by an ngModel
declaration, evaluating math expression as well as calling a function ( this requires a controller
and $scope which we will introduce later)</p>
<p>Fiddle Example
JS Fiddle Data Binding: http://jsfiddle.net/jonniedarko/hmyZB/8/</p>
<p>So in order to go further with this we need to do a little bit of set up....</p>
<p>Note: I am using <a href="https://www.mamp.info">Mamp</a> as my webServer for this
tutorial as it doesn't require much setting up, but you can use any webserver you like, in later
tutorials we will be using node to server our files</p>
<h4 id="creatingyourfirstangularjsapp">
Creating your first AngularJS App</h4>
<p>Inside your htdocs folder create a folder called "ngmacro"
Create an empty index.html
Create directory "vendor"
Download (unzip where required) and add to Vendor: (in Later tutorials we will use bower to do
all this for us )</p>
<ul>
<li><a href="http://code.jquery.com/jquery2.1.1.
min.js">Jquery</a></li>
<li><a
href="https://github.com/twbs/bootstrap/releases/download/v3.1.1/bootstrap3.1.1dist.
zip">Boot
strap</a></li>
<li><a
href="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js">AngularJS</a></li>
</ul>
<p>Create Basic html form using bootstrap styling</p>
<pre name="code" class="html" >
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF8"&
gt;
&lt;title&gt;ngmacro
| Jonnie.io&lt;/title&gt;
&lt;link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="colsm12"&
gt;&lt;h1&gt;NgMacro&
lt;/h1&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="colsm8
formgroup"&
gt;&lt;input type="text" class="formcontrol"
id="user_name" placeholder="What's your name?"&gt;&lt;/div&gt;
&lt;div class="colsm4
formgroup"&
gt;&lt;input type="text" class="formcontrol"
id="user_id" placeholder="What's your age?"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="colsm4
formgroup"&
gt;
&lt;div class="inputgroup"&
gt;
&lt;input type="text" class="formcontrol"
id="user_height" placeholder="What's your
height?"&gt;
&lt;span class="inputgroupaddon"&
gt;cm&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="colsm4
formgroup"&
gt;
&lt;div class="inputgroup"&
gt;
&lt;input type="text" class="formcontrol"
id="user_weight" placeholder="What's
your weight?"&gt;
&lt;span class="inputgroupaddon"&
gt;kg&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="colsm4
formgroup"&
gt;
&lt;div class=""&gt;
&lt;select name="" id="user_sex" class="formcontrol
formcontrol
marginzero"&
gt;
&lt;option value=""&gt;what is your sex?&lt;/option&gt;
&lt;option value="male"&gt;Male&lt;/option&gt;
&lt;option value="female"&gt;female&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!Dependencies&
gt;
&lt;script src="vendor/jquery/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="vendor/bootstrap/js/bootstrap.min.js"&gt;&lt;/script&gt;
&lt;script src="vendor/angular/angular.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>(If you prefer you can download everything from this point checkout the github<a
href="https://github.com/jonniedarko/ngmacro/
commit/71c56c4ba5d65363339fd4b48ab492c63
9f31862">commit</a>)</p>
<p>Ok first is first, lets add a few basic ngModels to bind some data. We need to get the users
height, weight , age, sex and to personalise it their name.</p>
<p>find the input for the user name and add the ngModel attribute "user.name"</p>
<pre name="code" class="html" >
&lt;input type="text" class="formcontrol"
id="user_name" ngmodule="
user.name"
placeholder="What's your name?"&gt;
</pre>
<p>Now do the Same for user.sex, user.height, user.weight, and user.age. While we are at it
create a new app.js file in out ngmacro
folder, and Add the following to initialise our Angularjs
App:</p>
<ul>
<li>inside app.js</li>
</ul>
<pre name="code" class="javascript">
var app = angular.module('ngMacro', []);
</pre>
<p>inside our index file change our body tag to:</p>
<pre name="code" class ="html">
&lt;body ngapp="
ngMacro"&gt;
</pre>
<p>and under the dependency scripts include our app.js file </p>
<pre name="code" class="javascript" >
&lt;script src="app.js"&gt;&lt;/script&gt;
</pre>
<p><strong>Note:</strong> It is essential this is included after our AngularJS file and
AngularJS's dependencies otherwise you will get an <em>Uncaught ReferenceError: angular is
not defined</em> and possible an <em>Uncaught Error: [$injector:modulerr]</em> in the
browser Console.</p>
<p>Wondering whats Just Happened with these changes?
What we did was use AngularJS's <code>module()</code> method to create and register our
module "ngMacro" with AngularJS. The first argument is the name we give our module, the 2nd
is an array of dependancies that are required by this module, in our case none.</p>
<p>Code changes so far: <a
href="https://github.com/jonniedarko/ngmacro/
commit/1ec55cc5da0753a0cc72b0b93ab363a97
613bc08">Github commit</a></p>
<p>So Inorder to take this futher we need to introduce Controllers.</p>
<h3 id="whatiscontroller">
what is Controller?</h3>
<p>In Angular, a Controller is a JavaScript constructor function that is used to augment the
Angular Scope.
A scope in AngularJS is an object that refers to the application model and is arraged in a
hierarchical structure. Scopes can watch expressions and propagate events.</p>
<p>Controllers are used to Set up the initial state of the <code>$scope</code> object and add
behaviors to it.</p>
<p>So lets creat our first controller. Add the following to our app.js file:</p>
<pre name="code" class="javascript">
app.controller('macroCtrl', function ($scope){
$scope.user = { };
});
</pre>
<p>And add it to our container div (div just under our body) as follows</p>
<pre name="code" class="html">
&lt;div ngcontroller="
macroCtrl" class="container"&gt;
</pre>
<p>Here we are creating a controller "macroCtrl" and we are passing it a new child
<code>$scope</code> which is an injectable parameter. This is taken care of by AngularJS, we
just need to include it in our function to use it. We also just initialised the user variable.
(<strong>note:</strong> inside the controller when we create a variable that can be used in our
view, index.html, we create it under the <code>$scope</code> variable. This is almost like
making them public, any variable not attached to the $scope cannot be accessed by our
view)</p>
<p>So Back to our App. The first thing we need before we can get our suggested Calorie intake
is caculate the users Basic Metabolic Rate. Lets add some where to view it:</p>
<p>Inside index.html add the following after the last "row" div</p>
<pre name ="code" class="html">
&lt;div class="row"&gt;
&lt;div class="colsm12"&
gt;&lt;p class="bgprimary
kcalflash"&
gt;&lt;b&gt;&nbsp;{{user.name}}&nbsp;Basic Metabolic Rate: &nbsp;
&lt;/b&gt;&nbsp; {{getMetaRate()}}&lt;/p&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
<p>create style.css. Add the following just to keep things looking well and don't forget to add in
our html page's head right after bootstrap</p>
<pre name ="code" class="css">
.kcalflash{
padding: 5px;
paddingleft:
15px;
}
</pre>
<p>now lets wire things up...</p>
<p>Add the following inside our controller.</p>
<pre name ="code" class="javascript">
$scope.getMetaRate = function(){
var meta;
if($scope.user.sex === "male"){
meta = (88.362 + (13.397 * parseFloat( $scope.user.weight) )
+(5.799 * parseFloat( $scope.user.height) )
(
5.677 * parseFloat( $scope.user.age) ) || 0 );
}else if($scope.user.sex === "female"){
meta = (447.593 + (9.247 * parseFloat( $scope.user.weight) )
+(3.098 * parseFloat( $scope.user.height) )
(
4.33 * parseFloat( $scope.user.age) ) || 0 );
}
else meta = null;
$scope.user.bmr= meta;
return (!isNaN(meta) &amp;&amp; (meta!=null)) ? parseFloat(meta).toFixed(2) : "Please Fill
Out the above Form";
};
</pre>
<p>This might seem scary at first but once you have any experience with javascript its fairly
easy to understand. Simply put it check if the user is male or female and returns the Metabolic
rate using the user's weight, height and age which by the way are populated automatically when
the user fills out the form. This is the magic of <code>ngModel</code>. the last line is just to
make sure out number is returned a number and not as a string.</p>
Code changes so far: <a
href="https://github.com/jonniedarko/ngmacro/
commit/9584f3eb0a6a71193ea41913c68eaa013
6702d72">Github commit</a></p>
<p>finally we are going to finish of our app by calculating the Calories and displaying them. Add
the following to the Index page:</p>
<pre name ="code" class="html">
&lt;div class="row"&gt;
&lt;div class="colsm12"&
gt;
&lt;select name="" id="" class="formcontrol"
ngmodel="
user.activityLevel"
ngchange="{{
updateNutrition()}}"&gt;
&lt;option value=""&gt;Select you Activity Level&lt;/option&gt;
&lt;option ngrepeat="
activityLevel in activityLevels"
value="{{activityLevel.value}}"&gt;{{activityLevel.title}}&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="colsm12"&
gt;
&lt;table class="table tablebordered"&
gt;
&lt;thead&gt;
&lt;th&gt;&lt;/th&gt;
&lt;td ngrepeat="
goal in goals"&gt;{{goal.title}}&lt;/td&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;Calories:&lt;/td&gt;
&lt;td ngrepeat="
goal in goals"&gt;{{goal.calories | number:0}}&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Protien:&lt;/td&gt;
&lt;td ngrepeat="
goal in goals"&gt;{{goal.protein | number:0}}&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Fats:&lt;/td&gt;
&lt;td ngrepeat="
goal in goals"&gt;{{goal.fats | number:0}}&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Carbs:&lt;/td&gt;
&lt;td ngrepeat="
goal in goals"&gt;{{goal.carbs | number:0}}&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
&lt;/div&gt;
&lt;/div&gt;
</pre>
<p>Now thats our view template finished. But it will not look right yet as here we are introducing
2 more AngularJS directives , <a href="">ngRepeat</a> and <a href="">ngChange</a> which
require functionality and variables setup in the controller.</p>
<p>ngChange is an AngularJS implementation of the regular onChange which allows you to use
an AngularJS Expression. ere we are using it to fire the <code>updateNutrition()</code> function
when the Activity level is selected.</p>
<p>ngRepeat is basically a "for" loop that repeats the element for each variable in an array.in
order for this to display correctly add the following to the controller:</p>
<pre name ="code" class="javascript">
$scope.goals = {
current: {
title:"Mainteance"
,calories: 0
,protein: 0
,fats: 0
,carbs:0
}
,loss: {
title:"Fat Loss"
,calories: 0
,protein: 0
,fats: 0
,carbs:0
}
,gain:{
title:"Muscle Gain"
,calories: 0
,protein: 0
,fats: 0
,carbs:0
}
}
</pre>
<p>This simply creates and initialises the goals object and now our view will look more finalised
(but not updating yet)
code so far: <a
href="https://github.com/jonniedarko/ngmacro/
commit/57e04d0f188d928445f07682eeab15c3f1f
aa458">github commit</a></p>
<p>Now lastly we will add the updateNutrition which will update our goals using the user's BMR
which we calculated earlier and the the activity level and weight. so add the following to the
controller:</p>
<pre name ="code" class="javascript">
$scope.activityLevels = [{
title: "Little or No Exercise"
,description: "You are Lazy and avoid exercise"
,value: 1.2
}
,{
title: "Light Exercise"
,description: "Exercise 13
times a week"
,value: 1.375
}
,{
title: "Moderate Exercise"
,description: "Exercise 35
times a week"
,value: 1.55
}
,{
title: "Heavy Exercise"
,description: "You Exercise 67
times a week"
,value: 1.725
}
,{
title: "Professional Athlete"
,description: "You Exercise approximately 2 times a Day"
,value: 1.9
}
];
$scope.updateNutrition=function(){
if(($scope.user.sex === "male" || $scope.user.sex === "female") &amp;&amp;
$scope.user.weight&gt;0 &amp;&amp; $scope.user.height&gt;0 &amp;&amp;
$scope.user.age&gt;0 &amp;&amp; $scope.user.activityLevel&gt;0){
$scope.goals.current.calories = parseFloat($scope.user.bmr * $scope.user.activityLevel)||
0;
$scope.goals.loss.calories = $scope.goals.current.calories * 0.85 || 0;
$scope.goals.gain.calories = $scope.goals.current.calories * 1.15 || 0;
$scope.goals.current.protein = $scope.user.weight*2.204 || 0;
$scope.goals.loss.protein = $scope.user.weight*2.204 || 0;
$scope.goals.gain.protein = $scope.user.weight*2.204*1.5 || 0;
$scope.goals.current.carbs = ($scope.goals.current.calories*0.3)/4 || 0;
$scope.goals.loss.carbs = ($scope.goals.loss.calories*0.15)/4 || 0;
$scope.goals.gain.carbs = ($scope.goals.gain.calories*0.3)/4 || 0;
$scope.goals.current.fats = ($scope.goals.current.calories
($
scope.goals.current.protein*4)($
scope.goals.current.carbs*4))/9 || 0;
$scope.goals.loss.fats = ($scope.goals.loss.calories
($
scope.goals.loss.protein*4)($
scope.goals.loss.carbs*4))/9 || 0;
$scope.goals.gain.fats = ($scope.goals.gain.calories
($
scope.goals.gain.protein*4)($
scope.goals.gain.carbs*4))/9 || 0;
}
};
</pre>
<p><a
href="https://github.com/jonniedarko/ngmacro/
commit/92234ed8bb4b41bef4270ee3ae257e1df9
508039">code so far</a></p>
<p>Forgetting the complexity of the formulas, all you need to really understand is that it
calculates the calories, protein, carbs and fats for "Maintenance", "Muscle Gain", and "Fat Loss"
and adds to the <code>$scope.goals</code> Object.</p>
<p>Final Source code is available <a
href="https://github.com/jonniedarko/ngmacro">
here</a>.</p>
<p>Whats Next?
In the next post I will look at Unit testing in AngularJS, specifically Unit testing Controllers </p>
<p>(next tutorial filter : converting kgs to pounds, ft to cm, filter data based on country, time,
blah)
(Services &amp; factories)</p>
<p>sources
https://
www.AngularJS.org
http://
www.sitepoint.com/10reasonsuseangularjs/
http://
getbootstrap.com</p>
