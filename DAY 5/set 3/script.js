console.log(".....APP started.....");

 function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=3273e89321aa47a2bb7287378b902a4c")
     .then((res)=>{
        res.json().then((data)=>{
    renderUI(data);

     })
    })
}
//  callAPI();


   function renderUI(data){
    //got the articles from data
    const articles=data.articles;
    console.log(articles);

    console.log(data);

const root=document.getElementById("root");
//single article from the articles array
for(let i=0;i<articles.length;i++){
const ar=articles[i];  //can pass any value 
console.log(ar);

//treated parent div
const div=document.createElement("div");
div.setAttribute("class","news-card");

const h3=document.createElement("h3");
// div.innerText='card';
div.innerText=ar.title;

const img=document.createElement("img");
img.src=ar.urlToImage;
div.appendChild(h3);
div.appendChild(img);

root.appendChild(div);
}
   
}
// renderUI();
callAPI();
