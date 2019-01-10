# PHP
- Hypertext Preprocessor
- Open Source Scripting Language
- Code are executed on the server and result is returned to the browser as plain HTML
- Can do various things
	- Generate Dynamic Page Content
	- Create, Open, Read, Write, Delete, Close Files on the server
	- Collect Form Data
	- Send and Receive Cookies
	- add, delete, modify data in your database
	- control user-access
	- encrypt data

## Definitions
- **Indexed arrays**: Arrays with a numeric index
- **Associative arrays**: Arrays with named keys
- **Multidimensional arrays**: Arrays containing one or more arrays
- **Variable Scope**: Local, Global, Static
	- variables declared outside a function has a **global scope** and can only be accessed outside a function.
	- variables declared inside a function has a **local scope** and can only be accessed within that function.
	- the **global** keyword is used to access a global variable from within a function
	- php stores all global variables in an array called $GLOBALS[index].
	- **static** will prevent functions from deleting local variable after function is completed/executed.
- 