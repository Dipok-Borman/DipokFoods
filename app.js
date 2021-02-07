

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => categories(data))


const allFood = document.getElementById('allFood');
const input = document.getElementById("inputFood");
const button = document.getElementById('search_button');


button.addEventListener('click', () => {
    searchMeal(input.value);
})

const searchMeal = Food => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Food}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchFood(data))
}
const searchOutput = document.getElementById('search');
const searchFood = foodName => {
    const meal = document.createElement('div')
       meal.className = 'meal';

    const searchHtml = `
    <img src = "${foodName.meals[0].strMealThumb}">
    <h2>${foodName.meals[0].strMeal}</h2>
    `
    meal.innerHTML = searchHtml;
    searchOutput.appendChild(meal);

    //trial
    meal.addEventListener('click', () => {
        clickDetail(foodName);
    })

}

const categories = meals => {
    const mealsArray = meals.categories;
    mealsArray.forEach(element => {

       const meal = document.createElement('div')
       meal.className = 'meal';
       
       const mealName = `
       <img src=${element.strCategoryThumb}>
       <h2>${element.strCategory}</h2>
       `
        meal.innerHTML = mealName;
        allFood.appendChild(meal);
   });
}
//trial Know:
const close = document.getElementById('close');
const clickDetails = document.getElementById('clickDetails');
const clickDetail = mealDiv => {

    const dataMeal = document.createElement('div');
    dataMeal.className = "dataMeal";
    const detailsFood = `
    <img src = "${mealDiv.meals[0].strMealThumb}">
    <br/>
    <br/>
    <h2>${mealDiv.meals[0].strMeal}</h2>
    <br/>
    <br/>
    <p>${mealDiv.meals[0].strIngredient1} ${mealDiv.meals[0].strMeasure1}</p>
    <p>${mealDiv.meals[0].strIngredient2} ${mealDiv.meals[0].strMeasure2}</p>
    <p>${mealDiv.meals[0].strIngredient3} ${mealDiv.meals[0].strMeasure3}</p>
    <p>${mealDiv.meals[0].strIngredient4} ${mealDiv.meals[0].strMeasure4}</p>
    <p>${mealDiv.meals[0].strIngredient5} ${mealDiv.meals[0].strMeasure5}</p>
    <p>${mealDiv.meals[0].strIngredient6} ${mealDiv.meals[0].strMeasure6}</p>
    <p>${mealDiv.meals[0].strIngredient7} ${mealDiv.meals[0].strMeasure7}</p>
    <p>${mealDiv.meals[0].strIngredient8} ${mealDiv.meals[0].strMeasure8}</p>
    <p>${mealDiv.meals[0].strIngredient9} ${mealDiv.meals[0].strMeasure9}</p>
    <p>${mealDiv.meals[0].strIngredient10} ${mealDiv.meals[0].strMeasure10}</p>
    <p>${mealDiv.meals[0].strIngredient11} ${mealDiv.meals[0].strMeasure11}</p>
    <p>${mealDiv.meals[0].strIngredient12} ${mealDiv.meals[0].strMeasure12}</p>

    `
    dataMeal.innerHTML = detailsFood;
    clickDetails.appendChild(dataMeal);
    close.addEventListener('click', ()=>{
        dataMeal.style.display ="none";
    })
}

   



// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => allCountris(data))

// const world = document.getElementById('world');


// const allCountris = countris => {

//     countris.forEach(country => {
//         const singleCountry = document.createElement('div');
//         const countryInfo = `
//         <h2>${country.name}</h2>
//         <h4>${country.capital}</h4>
//         <button onclick="countryDetails('${country.name}')">Details</button>
//         `
//         singleCountry.innerHTML = countryInfo;
//         world.appendChild(singleCountry);
//     });

// }



// const countryDetails = name =>{
//     const url = `https://restcountries.eu/rest/v2/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => randomCountryDetail(data[0]))
// }

// const randomCountryDetail = country =>{

//     const infoArea = document.getElementById('info');
//     infoArea.innerHTML = `
//     <img src="${country.flag}">
//     <h2>${country.name}</h2>
//     `
// }