What is JavaScript
	JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts:
		1. ECMAScript provides the core functionality.
		2. The Document Object Model (DOM) provides interfaces for interacting with elements on web pages
		3. The Browser Object Model (BOM) provides the browser API for interacting with the web browser.
	JavaScript allows you to add interactivity to a web page. Typically, you use JavaScript with HTML and CSS to enhance a web page’s functionality, such as validating forms, creating interactive maps, and displaying animated charts.

Client-side vs. Server-side JavaScript
	When JavaScript is used on a web page, it is executed in web browsers. In this case, JavaScript works as a client-side language.
	JavaScript can run on both web browsers and servers. A popular JavaScript server-side environment is Node.js. Unlike client-side JavaScript, server-side JavaScript executes on the server that allows you to access databases, file systems, etc.

JavaScript overview
	To define a variable in JavaScript, you use var keyword. For example:
		var x = 10;
		var y = 20;

	ES6 added a new way to declare a variable with the let keyword:

		let x = 10;
		let y = 20;

	To declare a function, you use the function keyword. 

		function add( a, b ) {
		return a + b;
		}
		let result = add(x, y);

	To log the result into the console window of the web browser, you use the console.log()	

		console.log(result); 

	JavaScript provides you with condition statements such as if-else and switch statements.

		let a = 20, 
		b = 30;

		function divide(a, b) {
		if(b == 0) {
		   throw 'Division by zero';
		}
		return a / b;
		}

	To declare an array, you use the following syntax:		

		let items = [];

	To declare an array with some initial elements, you specify the elements in the square brackets
	
		let items = [1, 2, 3];

	array through its length property:

		console.log(items.length); // 3

	use the for loop statement

		for(let i = 0; i < items.length; i++) {
		console.log(items[i]);
		}	

	Or use the for...of loop in ES6:

		for(let item of items) {
		console.log(item);
		}

/*****************************************************************************/
JavaScript Variables
	
	A variable is a “named storage” for data.  We can use variables to store goodies, visitors, and other data.

	Declare a variable

	To declare a variable, you use the var keyword 

		var message;

	Starting in ES6, you can use the let keyword to declare a variable like this:

		let message;

	It’s a good practice to use the let keyword to declare a variable. 

	Initialize a variable

	Once you have declared a variable, you can initialize it with a value.
	To initialize a variable, you specify the variable name, followed by an equals sign (=) and a value

		let message;
		message = "Hello";

	JavaScript allows you to declare two or more variables using a single statement. To separate two variable declarations, you use a comma (,) like this:

		let message = "Hello",
	    counter = 100;

	Undefined vs. undeclared variables

	It’s important to distinguish between undefined and undeclared variables.

	An undefined variable is a variable that has been declared but has not been initialized with a value.

		let message;
		console.log(message); // undefined

	In this example, the message variable is declared but not initialized. Therefore, the message variable is undefined.

	an undeclared variable is a variable that has not been declared. For example:

		console.log(counter);
            ^
		ReferenceError: counter is not defined

	the counter variable has not been declared. Hence, accessing it causes a ReferenceError.
	
	Constants (const)

	A constant holds a value that doesn’t change. To declare a constant, you use the const keyword. When defining a constant, you need to initialize it with a value.

		const workday = 5;
	Once defining a constant, you cannot change its value.

	workday = 2;

	Error:

		Uncaught TypeError: Assignment to constant variable.

/*****************************************************************************/

JavaScript Data Types

	Methods of primitives

	A primitive

	Is a value of a primitive type.
	There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

	An object

	Is capable of storing multiple values as properties.
	Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.

	JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types. 

		let counter = 120; // counter is a number
		counter = false;   // counter is now a boolean
		counter = "foo";   // counter is now a string		
	
	To get the current type of the value that the variable stores, you use the typeof operator:

		let counter = 120;
		console.log(typeof(counter)); // "number"

		counter = false; 
		console.log(typeof(counter)); // "boolean"

		counter = "Hi";
		console.log(typeof(counter)); // "string"		

	The undefined type

		let counter;
		console.log(counter);        // undefined
		console.log(typeof counter); // undefined

	The null type
		The null type is the second primitive data type that also has only one value null.
		
		let obj = null;
		console.log(typeof obj); // object

	JavaScript defines that null is equal to undefined as follows:

		console.log(null == undefined); // true

	NaN [Not a Number]

		NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN

		console.log('a'/2); // NaN;

	The object type

		In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.

			let emptyObject = {};

			let person = {
			firstName: 'John',
			lastName: 'Doe'
			};

/*****************************************************************************/
The modern mode, "use strict"
	
	"use strict"; Defines that JavaScript code should be executed in "strict mode".

	The "use strict" directive was new in ECMAScript version 5.

		"use strict";
		x = 3.14;       // This will cause an error because x is not declared

		"use strict";
		myFunction();

		function myFunction() {
		  y = 3.14;   // This will also cause an error because y is not declared
		}

	Why Strict Mode?
	
		Strict mode makes it easier to write "secure" JavaScript.
		Strict mode changes previously accepted "bad syntax" into real errors.

/*****************************************************************************/
alert, prompt, confirm	

	alert
	This one we’ve seen already. It shows a message and waits for the user to press “OK”.

		alert("Hello");

	The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.


	prompt
	The function prompt accepts two arguments:
		
		result = prompt(title, [default]);

	It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

	title
	The text to show the visitor.
	default
	An optional second parameter, the initial value for the input field.

		let age = prompt('How old are you?', 100);

		alert(`You are ${age} years old!`); // You are 100 years old!

	confirm

		result = confirm(question);

	The function confirm shows a modal window with a question and two buttons: OK and Cancel.

	The result is true if OK is pressed and false otherwise.

		let isBoss = confirm("Are you the boss?");

		alert( isBoss ); // true if OK is pressed
