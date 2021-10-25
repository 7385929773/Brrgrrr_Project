// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
//Initial price of the burger
var wholeWheatBun = 10;
var Total=0;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  }
    else{
    patty.style.display = "none";}
  // document.getElementById("total").innerHTML = "Total = " +(Total = Total-80); 
  
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  if (state.Cheese) {
    cheese.style.display = "inherit";
  //document.getElementById("total").innerHTML = "Total = " +(Total = Total+10); 
} else {
    cheese.style.display = "none";
  //document.getElementById("total").innerHTML = "Total = " +(Total = Total-10); 

  }

}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }

}

function renderOnions() {
  let onions = document.querySelector("#onion");
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
 if (state.Lettuce) {
  lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  if(patty.style.display ==="none")
  {
   document.getElementById("Patty").innerHTML = "Patty.................80 Rs"
   document.getElementById("total").innerHTML = "Total = " +(Total = Total+80); 
   document.getElementById("Payment").innerHTML = "Total = " +Total;
  }
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  if(cheese.style.display ==="none"){
  document.getElementById("Cheese").innerHTML = "Cheese.................10 Rs"
  document.getElementById("total").innerHTML = "Total = " +(Total = Total+10); 
  document.getElementById("Payment").innerHTML = "Total = " +Total;
  }
  renderAll();
};
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  if(tomato.style.display ==="none"){
  document.getElementById("Tomatoes").innerHTML = "Tomatoes.................20 Rs"
document.getElementById("total").innerHTML = "Total = " +(Total = Total+20); 
  document.getElementById("Payment").innerHTML = "Total = " +Total; 
  }
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  if(onion.style.display ==="none"){
  document.getElementById("Onions").innerHTML = "Onions................20 Rs"
  document.getElementById("total").innerHTML = "Total = " +(Total = Total+20); 
  document.getElementById("Payment").innerHTML = "Total = " +Total;
  }
  renderAll();
};
// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  if(lettuce.style.display ==="none"){
  document.getElementById("Lettuce").innerHTML = "Lettuce.................40 Rs"
  document.getElementById("total").innerHTML = "Total = " +(Total = Total+40); 
  document.getElementById("Payment").innerHTML = "Total = " +Total;
  }
  renderAll();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
