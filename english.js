// // DOM Manipulation...
// //getElementByid...
// const title = document.getElementById('main-heading');
// console.log(title);

// //get element by class name()..
// const list_item = document.getElementsByClassName('list-items');
// console.log(list_item);

// //element by tag name..
// const list_tag = document.getElementsByTagName('li') ;
// console.log(list_tag);

// // query selector..
// // query selector all...
// const title1 = document.querySelector('#main-heading');
// title1.style.color = "red";
// title1.style.textAlign = "center";
// title1.style.fontSize = "44px";
// title1.style.borderRadius = "48%";
// title1.style.backgroundColor = "lightblue";


// const a = document.querySelectorAll('.list-items');
// for(let i=0; i<a.length ;i++){
//     a[i].style.fontSize="25px";
//     a[i].style.color="blue";
//     a[i].style.border="2px solid black";
//     a[i].style.borderWidth="10px";
//     a[i].style.borderRadius="42px ";
//     a[i].style.textAlign="center";
// }
// console.log(a);

// //ADD ELEMENT IN HTML PAGE...
// const ul =document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);
// li.innerText ='Lord of the Rings';
// //li.setAttribute('id','main-heading');
// //li.removeAttribute('id');
// li.classList.add('list-items');
// //li.classList.remove('list-items');
// console.log(li.classList.contains('list-items'));


// const cont = document.querySelector('h1');
// const head1 = document.createElement('h6');
// cont.append(head1);
// head1.innerText='Movie List is below...';

const first = document.querySelectorAll('.list-items');
document.getElementById('demo').innerHTML='paragraph is as:' + first[1].innerHTML;
console.log(first.innerHTML);
console.log(first.textContent);
console.log(first.innerText);

