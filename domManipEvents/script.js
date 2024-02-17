const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the text content";

container.appendChild(content);


const header1 = document.querySelector('#h1');

const paragraph = document.createElement('p');
paragraph.classList.add('pRed');
paragraph.style.color = 'red';
paragraph.textContent = "Hey, I'm red";

container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.classList.add('h3Blue');
header3.style.color = 'blue';
header3.textContent = "I'm a blue h3";

container.appendChild(header3);

const border = document.createElement('div');
border.classList.add('divblackpink');
border.style.cssText = "background-color: pink; border: 1px solid black;";

const head1 = document.createElement('h1');
head1.textContent = "I'm in a div";
const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO";

border.appendChild(head1);
border.appendChild(paragraph2);
container.appendChild(border);


// Events, Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// Events, Method 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
    alert("Hello World");
});

btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
// e.target refers to the html element that triggered the click event which in this case is btn2
