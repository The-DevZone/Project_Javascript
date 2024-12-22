const searchBox =document.getElementById("search");
const btn = document.getElementById("btn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const recipeDetailContent =document.querySelector(".recipe-detail-content");

const recipedetail = document.querySelector(".recipe-detail");
const renderData = document.querySelector(".renderData");




const fetchdata = async (query) => {
    const recipe =  document.createElement("div");
    recipe.classList.add("recipe-class")
    recipe.innerHTML = "<h2>Fetching Data..</h2>";
    recipeContainer.appendChild(recipe)

    const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query} `)
    const response = await fetchApi.json();

    recipeContainer.innerHTML = "";

    console.log(response.meals)
    response.meals.forEach(meal => {
        const cardItem = document.createElement("div");

        // cardItem.classList.add("content");

        cardItem.innerHTML = `
       
        <img src="${meal.strMealThumb }" id="img-main" class="h-80 w-80 text-center px-8 py-4 rounded-md duration-500 hover:scale-x-110 hover:scale-y-100 hover:rounded-ss-3xlxl ">
        <h2 class=" text-lg tracking-normal py-1"> ${meal.strMeal} </h2>
        <p class="text-gray-400" >  <span class="text-black"> ${meal.strArea} </span> Dish </p>
        <p class="text-sm"> ${meal.strCategory} </p>

        `
        cardItem.className = " bg-white  mx-3 my-3 text-center  ";
        
        // recipeBtn append 
        const recipeBtn = document.createElement("button");
        recipeBtn.className = "bg-red-700 text-white px-10 rounded-3xl py-2 mb-2 mt-3";
        recipeBtn.innerHTML = "view recipe";
        cardItem.appendChild(recipeBtn);
        
        
        
        // modal box recipe 
        
        
        
        recipeBtn.addEventListener(("click") , () =>{
            openRecipe(meal)
        })
        
        
        
        recipeContainer.appendChild(cardItem);
    });

}


const openRecipe = (meal) => {

    recipeDetailContent.innerHTML = `
        <h1> Recipe-Details ${meal.strCategory}</h1>
        <h2>${ meal.strInstructions }</h2>
        `
        recipeDetailContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener("click" , () => {
    
    recipeCloseBtn.parentElement.style.display = "none";

})

// main search btn 
btn.addEventListener("click" , (e) => {
    e.preventDefault();
    const searchInput = search.value.trim();

    fetchdata(searchInput);
    console.log("recipeBtn click");
    
})


fetchdata("cake");




