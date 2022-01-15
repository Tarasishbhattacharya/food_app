function nav(){
    return ` <div class="nav">
    <h3>GetmEal</h3>
    <div class="search">
        <input type="text"  id="food_name">
        <i class="material-icons" id="search">search</i>
    </div>
    <div id="items">
        <a href="/signup.html">Sign Up</a>
        <a href="/LogIn.html">Log In</a>
        <a href="/recipe.html">Recipe of the day</a>
        <a href="/random.html">Random recipe</a>
        <span  id="welcome_user"></span>
    </div> 
</div>`
}
export default nav;