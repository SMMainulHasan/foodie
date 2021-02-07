//Clear last search result--
function clearContent(place) {
  document.getElementById(place).innerHTML = "";
};

//Call API //Search meal by name--
const searchBtn = () => {
  const searchInput = document.getElementById('searchInput').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  fetch(url)
    .then(res => res.json())
    .then(data => recipe(data));
};

const recipe = recipes => {
  const displayRecipes = document.getElementById('display-recipes');
  //Not found massage--
  if (recipes.meals == null) {
    const div = document.createElement('div');
    const notFind = `
    <img class="d-flex justify-content-center" src= "https://static.thenounproject.com/png/3271619-200.png"></img>
    <h6 class="d-flex justify-content-center">Sorry :( your searched meal not exist in our list</h6>
    `;
    div.innerHTML = notFind;
    displayRecipes.appendChild(div);
  }
  //Search result--
  else {
    recipes.meals.forEach(recipe => {
      const div = document.createElement('div');
      const recipeId = recipe.idMeal;
      div.className = "recipe";
      let mealId = recipe.idMeal;
      const recipeDiv = `
      <div onclick="detail(${mealId})">
      <img src= "${recipe.strMealThumb}"></img>
      <h6 class="d-flex justify-content-center">${recipe.strMeal}</h6>
      </div>
      `;
      div.innerHTML = recipeDiv;
      displayRecipes.appendChild(div);
    });
  }
};

//open Ingredient by meal id--
const detail = meal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => ingredientInfo(data))
};
const ingredientInfo = (data) => {
  clearContent('ingredient-info')
  const displayIngredient = document.getElementById('ingredient-info');
  const div = document.createElement('div');
  div.className = "ingredient d-flex";
  const infoDiv = `
    <img src= "${data.meals[0].strMealThumb}"></img>
    <div class="ingredient-detail">
    <h2 class="d-flex justify-content-center">${data.meals[0].strMeal}</h2>
    <h6>Ingredients</h6>
    <ul>
    <li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}</li>
    <li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}</li>
    <li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}</li>
    <li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}</li>
    <li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}</li>
    <li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}</li>
    <li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}</li>
    <li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}</li>
    <li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}</li>
    <li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}</li>
    <li>${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}</li>
    <li>${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}</li>
    <li>${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}</li>
    <li>${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}</li>
    <li>${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}</li>
    <li>${data.meals[0].strMeasure16} ${data.meals[0].strIngredient16}</li>
    <li>${data.meals[0].strMeasure17} ${data.meals[0].strIngredient17}</li>
    <li>${data.meals[0].strMeasure18} ${data.meals[0].strIngredient18}</li>
    <li>${data.meals[0].strMeasure19} ${data.meals[0].strIngredient19}</li>
    <li>${data.meals[0].strMeasure20} ${data.meals[0].strIngredient20}</li>
    </ul>
    </div>
  `;
  div.innerHTML = infoDiv;
  displayIngredient.appendChild(div);
};