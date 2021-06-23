# nodeJS

___

## Templating Engines
### **EJS**

\<p><%= name %>\</p>

Use normal HTML and vanilla JS 

### **Pug**

p #{name}

Use minimal HTML and custom template language

### **Handlebars**

\<p>{{ name }}\</p>

Use normal HTML and custom template language

___

## REPL 

This is the live terminal interface of NodeJS, similar to python's command line utility

**R**ead user input

**E**val user input

**P**rint output (result)

**L**oop to wait for new input
___

## OOP Review

**Primitive Types** - string, number, boolean, undefined, null, symbol (ES6). *STORED IN STACK*, therefore more static in its value. New variables are stored at the top of the stack.

**Reference Values** - Object -> Array. *STORED IN HEAP*, therefore more dynamic in its value, easily modified. Stored randomly with each element having unique address. Pointers in the stack store the 'address' where that element is stored. The variable simply refers to the pointer's position in the stack, NOT the address of the element in the heap.

**In Summary** - to modify a reference value is to modify its pointer rather than the element in the heap. To modify a primitive is to modify the element itself.

___

## MVC

**Models**

Objects that represent data in the code. Primarily works with data (saving, fetching, etc.) Doesn't matter if you manage data in memory, files, databases. Contains data-related logic.

**Views**

What the user sees, dynamically rendering appropriate content. Decoupled from application code. Shouldn't contain too much logic.

**Controllers**

Connecting Models and Views; split up across middleware functions. Contains the 'in-between' logic. Routes are tangential to controllers, as they handle which controllers execute in which scenario. Should only make sure that the two can communicate (in both directions).