
document.getElementById("searchBtn").addEventListener("click", function () {
    const inputMealName = document.getElementById("inputMealName").value;
    if (inputMealName == "") {
        document.getElementById("recipes").style.display = "none";
    }
    else {
        document.getElementById("recipes").style.display = "block";
    }
    document.getElementById("singleRecipe").style.display = "none";
})



// Recipe Details and Ingredients
const recipeDetails = document.getElementsByClassName("recipe");
for (let i = 0; i < recipeDetails.length; i++) {
    const element = recipeDetails[i];
    element.addEventListener("click", function () {
        document.getElementById("recipes").style.display = "none";
        document.getElementById("singleRecipe").style.display = "block";
        document.getElementById("inputMealName").style.display = "none";
        document.getElementById("searchBtn").style.display = "none";
    })
}


document.getElementById("mustardRecipe").addEventListener("click", function () {
    mustardIngredient();
})
document.getElementById("coddledRecipe").addEventListener("click", function () {
    coddledIngredient();
})
document.getElementById("boxtyBreakfastRecipe").addEventListener("click", function () {
    boxtyIngredient();
})
document.getElementById("hamHockRecipe").addEventListener("click", function () {
    hamHockIngredient();
})
document.getElementById("katsudonRecipe").addEventListener("click", function () {
    katsudonIngredient();
})
document.getElementById("gohanRiceRecipe").addEventListener("click", function () {
    gohanRiceIngredient();
})
document.getElementById("tonkatsuPorkRecipe").addEventListener("click", function () {
    tonkatsuIngredient();
})
document.getElementById("egyptianFattehRecipe").addEventListener("click", function () {
    egyptianFattehIngredient();
})



function mustardIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Mustard champ")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
        })
}

function coddledIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Coddled pork with cider")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            const liTen = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            liTen.innerText = data.meals[0].strIngredient10;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
            ul.appendChild(liTen);
        })
}

function boxtyIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Boxty Breakfast")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            const liTen = document.createElement("li");
            const liEleven = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            liTen.innerText = data.meals[0].strIngredient10;
            liEleven.innerText = data.meals[0].strIngredient11;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
            ul.appendChild(liTen);
            ul.appendChild(liEleven);
        })
}

function hamHockIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Ham hock colcannon")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
        })
}

function katsudonIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese Katsudon")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            const liTen = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            liTen.innerText = data.meals[0].strIngredient10;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
            ul.appendChild(liTen);
        })
}

function gohanRiceIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese gohan rice")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
        })
}

function tonkatsuIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Tonkatsu pork")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
        })
}

function egyptianFattehIngredient() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Egyptian Fatteh")
        .then(res => res.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            document.getElementById("recipeName").innerText = name;
            document.getElementById("recipe-img").src = "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg";
            const ul = document.getElementById("ingredientList");
            const liOne = document.createElement("li");
            const liTwo = document.createElement("li");
            const liThree = document.createElement("li");
            const liFour = document.createElement("li");
            const liFive = document.createElement("li");
            const liSix = document.createElement("li");
            const liSeven = document.createElement("li");
            const liEight = document.createElement("li");
            const liNine = document.createElement("li");
            const liTen = document.createElement("li");
            const liEleven = document.createElement("li");
            const liTwelve = document.createElement("li");
            const liThirteen = document.createElement("li");
            const liFourteen = document.createElement("li");
            const liFifteen = document.createElement("li");
            liOne.innerText = data.meals[0].strIngredient1;
            liTwo.innerText = data.meals[0].strIngredient2;
            liThree.innerText = data.meals[0].strIngredient3;
            liFour.innerText = data.meals[0].strIngredient4;
            liFive.innerText = data.meals[0].strIngredient5;
            liSix.innerText = data.meals[0].strIngredient6;
            liSeven.innerText = data.meals[0].strIngredient7;
            liEight.innerText = data.meals[0].strIngredient8;
            liNine.innerText = data.meals[0].strIngredient9;
            liTen.innerText = data.meals[0].strIngredient10;
            liEleven.innerText = data.meals[0].strIngredient11;
            liTwelve.innerText = data.meals[0].strIngredient12;
            liThirteen.innerText = data.meals[0].strIngredient13;
            liFourteen.innerText = data.meals[0].strIngredient14;
            liFifteen.innerText = data.meals[0].strIngredient15;
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
            ul.appendChild(liFour);
            ul.appendChild(liFive);
            ul.appendChild(liSix);
            ul.appendChild(liSeven);
            ul.appendChild(liEight);
            ul.appendChild(liNine);
            ul.appendChild(liTen);
            ul.appendChild(liEleven);
            ul.appendChild(liTwelve);
            ul.appendChild(liThirteen);
            ul.appendChild(liFourteen);
            ul.appendChild(liFifteen);
        })
}







// Mustard Champ Recipe
function mustard() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Mustard champ")
        .then(res => res.json())
        .then(data => {
            document.getElementById("mustard-img").src = "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg";
            document.getElementById("mustard-champ").innerText = data.meals[0].strMeal;
        })
}
mustard();


// Coddled pork with cider Recipe
function coddledPork() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Coddled pork with cider")
        .then(res => res.json())
        .then(data => {
            document.getElementById("coddledPork-img").src = "https://www.themealdb.com/images/media/meals/7vpsfp1608588991.jpg";
            document.getElementById("coddledPork").innerText = data.meals[0].strMeal;
        })
}
coddledPork();


// Boxty Breakfast
function boxtyBreakfast() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Boxty Breakfast")
        .then(res => res.json())
        .then(data => {
            document.getElementById("boxtyBreakfast-img").src = "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg";
            document.getElementById("boxtyBreakfast").innerText = data.meals[0].strMeal;
        })
}
boxtyBreakfast();


// Ham Hock Colcannon
function hamHock() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Ham hock colcannon")
        .then(res => res.json())
        .then(data => {
            document.getElementById("hamHockColcannon-img").src = "https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg";
            document.getElementById("hamHockColcannon").innerText = data.meals[0].strMeal;
        })
}
hamHock();


// Japanese Katsudon
function katsudon() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese Katsudon")
        .then(res => res.json())
        .then(data => {
            document.getElementById("katsudon-img").src = "https://www.themealdb.com/images/media/meals/d8f6qx1604182128.jpg";
            document.getElementById("katsudon").innerText = data.meals[0].strMeal;
        })
}
katsudon();


// Japanese Gohan Rice
function gohanRice() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Japanese gohan rice")
        .then(res => res.json())
        .then(data => {
            document.getElementById("gohanRice-img").src = "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg";
            document.getElementById("gohanRice").innerText = data.meals[0].strMeal;
        })
}
gohanRice();


// Tonkatsu Pork
function tonkatsuPork() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Tonkatsu pork")
        .then(res => res.json())
        .then(data => {
            document.getElementById("tonkatsuPork-img").src = "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg";
            document.getElementById("tonkatsuPork").innerText = data.meals[0].strMeal;
        })
}
tonkatsuPork();


// Egyptian Fatteh
function egyptianFatteh() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Egyptian Fatteh")
        .then(res => res.json())
        .then(data => {
            document.getElementById("egyptianFatteh-img").src = "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg";
            document.getElementById("egyptianFatteh").innerText = data.meals[0].strMeal;
        })
}
egyptianFatteh();
