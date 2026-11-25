const addGame = document.getElementById("addGameButton");
const mainPage = document.getElementById("mainPage");
const cardsContainer = document.getElementById("mainCardContainer");
addGame.addEventListener("click", addNewGame);
function addNewGame() {
  cardsContainer.style.display = "none";
  mainPage.innerHTML = `
  <div class="addGameMenuContainer">
    <div class="addGameHeaderContainer">
        <h2 class="header">Add Game</h2>
        <p class="closeAddGame">X</p>
    </div>
    <div class="addGameFieldsContainer">
        <div class="addGameImageContainer">add image</div>
        <div class="addGameFields">
            <label for="gameTitle">e.g. Elden Ring</label>
            <input type="text" name="gameTitle" class="addGameTitle">
            <label for="status">Status</label>
            <select name="status">
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
            <option value="wishlist">Wishlist</option>
            <option value="dropped">Dropped</option>
            </select>
            <div class="platfromAndRatingContainer">
            <label for="platform">platform</label>
                <select name="platform">
                <option value="ps">PS</option>
                <option value="xbox">XBox</option>
                <option value="pc">Pc</option>
                <option value="nintendo">Nintendo</option>
                </select>
                add stars selection thing here
            </div>
            <label for="review">Write your thoughts about the game...</label>
            <input type="text" name="review">
        </div>
    </div>
  </div>
  
  
  
  
  `;
}
