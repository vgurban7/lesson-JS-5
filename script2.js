// const items = document.querySelectorAll('img');
// const itemsCount = items.length;
// const nextItem = document.querySelector('.next');
// const previousItem = document.querySelector('.previous');
// let count = 0;


// function rollNextItem() {
//    items[count].classList.remove('active');
//    //[1(1), 1(2), 1(3)]
//    if (count < itemsCount - 1) {
//       count++;
//    } else {
//       count = 0;
//    }

//    items[count].classList.add('active');
//    // console.log(count);
// }


// function rollPreviousItem() {
//    items[count].classList.remove('active');
//    //[1(1), 1(2), 1(3)]
//    if (count > 0) {
//       count--;
//    } else {
//       count = itemsCount - 1;
//    }

//    items[count].classList.add('active');
//    // console.log(count);
// }

// function pressKey(e) {
//    e = e || window.event;

//    if (e.keyCode == '37') {
//       rollPreviousItem();
//    } else if (e.keyCode == '39') {
//       rollNextItem();
//    }
// }


// nextItem.addEventListener('click', rollNextItem);
// previousItem.addEventListener('click', rollPreviousItem);


// document.addEventListener('keydown', pressKey);















let element = document.querySelectorAll('img');
let amount = element.length;
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let count = 0;

function nextchange() {
   element[count].classList.remove('active');
   if (count < amount - 1) {
      count++;
   } else {
      count = 0;
   }
   element[count].classList.add('active');
}

function previouschange() {
   element[count].classList.remove('active');
   if (count > 0) {
      count--;
   } else {
      count = amount - 1;
   }
   element[count].classList.add('active');
}

document.querySelector('.slider').onwheel = function newScroll(e) {
   if (e.deltaY > 0) {
      nextchange();
   } else {
      previouschange();
   }
   return false;
}



document.addEventListener('wheel', newScroll);
next.addEventListener('click', nextchange);
previous.addEventListener('click', previouschange);













