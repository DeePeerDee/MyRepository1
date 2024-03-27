//Access Element in HTML using ID
var elementWithID = document.getElementById('student1');
//Get the element with all atrributes
console.log(elementWithID);
//Manipulate Display Text
elementWithID.textContent = 'Student 1 - Matthew';

//Access Element in HTML with Class
var elementWithClass = document.getElementsByClassName('section-A');
console.log(elementWithClass);
//Modifying Class
for (var i = 0; i < elementWithClass.length; i++) {
    var element = elementWithClass[i];
    //Concatenate end with text
    element.textContent += " - Enrolled!"
}

//Access Element by Tag Name; [0] if only the first occurrence
var styleElement = document.getElementsByTagName('span')[0];
styleElement.style.backgroundColor = 'lightblue';

//Access first element of element -> child
const firstElementChild = document.getElementById('parent').firstElementChild;
firstElementChild.textContent = 'Child 1 Modified';

//Access last element of parent -> child
const lastElementChild = document.getElementById('parent').lastElementChild;
lastElementChild.textContent = 'Child 5 Modified';

//Previous sibling
var child3 = document.getElementById("child3");
var previousSibling = child3.previousElementSibling;
previousSibling.style.backgroundColor = 'lightblue';

//Next sibling
var child3 = document.getElementById("child3");
var nextSibling = child3.nextElementSibling;
nextSibling.style.backgroundColor = 'lightblue';

//Adding event listener
var button = document.getElementById("button");
button.addEventListener('click', function() {
    var buttonDiv = document.getElementById('buttonDiv');
    buttonDiv.textContent = "Hello World!";
    alert("Button clicked!");
});

//Content modify
var modify = document.getElementById('modify');
//Get the element with all atrributes
console.log(elementWithID);
//Manipulate Display Text
modify.textContent = 'Modified content';

//Append new elements
var append = document.getElementById("append");
var newElement = document.createElement('div');
newElement.textContent = "Newly appended element";
append.appendChild(newElement);

//Remove existing element
const removeThis = document.getElementById('remove');
removeThis.remove();

//Update element attribute
const image = document.getElementById('image');
image.setAttribute('src','https://cdn-icons-png.flaticon.com/512/3688/3688129.png');

//Manipulating element styles
const style = document.getElementById('style');
style.style.backgroundColor = 'black';
style.style.color = 'white';
const mode = document.getElementById('mode');