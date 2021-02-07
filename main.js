//Clear last search result--
function clearContent() { 
  document.getElementById('display-recipes').innerHTML = "";
};

//Call API //Search meal by name--
function searchBtn() {
  const searchInput = document.getElementById('searchInput').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  fetch(url)
  .then(res => res.json())
  .then(data => recipe(data));
};

const recipe = recipes => {
  const displayRecipes = document.getElementById('display-recipes');
  //Not found massage--
  if(recipes.meals==null){
    const div = document.createElement('div');
    const notFind = `
    <img class="d-flex justify-content-center" src= "https://static.thenounproject.com/png/3271619-200.png"></img>
    <h6 class="d-flex justify-content-center">Sorry :( your searched meal not exist in our list</h6>
    `;
    div.innerHTML = notFind;
    displayRecipes.appendChild(div);
  }
  //Search result--
  else{
    recipes.meals.forEach(recipe => {
      const div = document.createElement('div');
      const recipeId = recipe.idMeal;
      div.className = "recipe";
      div.onClick ="ingredient()";
      const recipeDiv = `
      <img src= "${recipe.strMealThumb}"></img>
      <h6 class="d-flex justify-content-center">${recipe.strMeal}</h6>
      `;
      div.innerHTML = recipeDiv;
      displayRecipes.appendChild(div);
      //open Ingredient by meal id--
      
      
    });
  }
  
};


