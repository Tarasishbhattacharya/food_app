async function getrecipe(url){
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
   function appendrecipe({meals},location,location2){
    location.textContent="";
    meals.map((el)=>{
       const{strMealThumb,strMeal,strCategory,strInstructions}=el;
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.setAttribute("src",strMealThumb+"/preview");
       let title=document.createElement("p");
       title.textContent="Name : "+strMeal;
       let catg=document.createElement("p");
       catg.textContent="category : "+strCategory;
       div.append(img,title,catg);
       location.append(div);
       let div2=document.createElement("div");
       let heading=document.createElement("h3");
       heading.textContent="Instructions";
       let instruction=document.createElement("p");
       instruction.textContent=strInstructions;
       div2.append(heading,instruction);
       location2.append(div2)
      
    })
}
export {getrecipe,appendrecipe};