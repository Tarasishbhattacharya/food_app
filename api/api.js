
import {cart,count} from './food.html'
totalcart(cart,count)
function totalcart(cart,count){
    count.textContent="Totalcart "+cart.length;
}




async function getdata(url){
 try{
    
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        return data;
 }
 catch(err){
     console.log(err);
 }
}
function append({meals},location){
    location.textContent="";
    meals.map((el)=>{
       const{strMealThumb,strMeal}=el;
       let div=document.createElement("div");
       let random_price=Math.floor(Math.random()*100)+500;
       let img=document.createElement("img");
       img.setAttribute("src",strMealThumb+"/preview");
       let title=document.createElement("p");
       title.textContent="Name : "+strMeal;
       let price=document.createElement("p");
       price.textContent="price : "+random_price;
       let button=document.createElement("button");
       button.addEventListener("click",()=>{
           cart.push(el);
           localStorage.setItem("food_cart",JSON.stringify(cart));
           totalcart(cart,count);
       })
       button.textContent="Add to Cart";
       div.append(img,title,price,button);
       location.append(div);
      
    })
}


export {getdata,append};