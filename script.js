const api_url="http://api.quotable.io/random";
const quote=document.getElementById("quote");
const author=document.getElementById("author");


async function getQuote(url){
    quote.innerHTML="<img src='load.gif'>";
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML='"'+data.content+'"';
    author.classList.add("minus");
    author.innerHTML=data.author;

}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"--- by "+author.innerHTML,"Tweet Window","width=600,height=300");
}
