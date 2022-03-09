const main = document.querySelector('main')
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 function displayList(list) {
     main.innerHTML = "";
     list.forEach(item => {
         const div = document.createElement('div');
         div.textContent = item;
         main.append(div);
     })
 }

 displayList(list)

function sortDecending() {
// list.sort((a,b) => a > b ? -1 : 1);
// list.reverse()
list.sort((a, b) => {
    if ( a > b) {
    return -1;
   }
   else {
       return 1;
   }
});
}

  


displayList(list)

document.querySelector('#sort-descending').addEventListener('click', function(){
  sortDecending()
  displayList(list)
})

function sortAssending() {
    list.sort((a, b) => {
    if ( a > b) {
    return 1;
   }
   else {
       return -1;
   }
});   
}
 
document.querySelector('#sort-asscending').addEventListener('click', function(){
    sortAssending()
    displayList(list)
  })


  
function onlyOdd() {
return list.filter(item => item % 2 != 0);
};
    // if (item % 2 == 0 ) {
    //     return false;
    // }

    // else {
    //     return true;
    // }
displayList(list)



 

function onlyEven() {
    return list.filter(item => item % 2 == 0);
// return num % 2 === 0 ? 'Even' : 'Odd' ;
}

displayList(list)

 

  function allNumbers() {
   return list  
  }

  displayList(list)

  document.querySelector('#only-even').addEventListener('click', function(){
    displayList(onlyEven())
  })
  
  document.querySelector('#only-odd').addEventListener('click', function(){
 displayList(onlyOdd())

 })
 
 document.querySelector('#all').addEventListener('click', function(){
  displayList(allNumbers())
 })


 

 

