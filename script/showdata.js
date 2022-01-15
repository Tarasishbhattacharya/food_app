// make api call and grab data
// append data
async function getdata(url){
   try{
    let response=await fetch(url);
    let data= await response.json();
    return data;
   }
   catch(err){
       console.log(err);
   }
}
function appenddata(data,location){
    data.forEach(({title,image})=>{
        let div=document.createElement("div");
        let p=document.createElement("p");
        p.textContent=title;
        let img=document.createElement("img");
        img.src=image;
        div.append(img,p);
        location.append(div);
    })
}
export {getdata,appenddata};