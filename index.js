console.log("added");
var key = "7375a7d9ae514db193bda0194c623008";
let accordion = document.getElementById("accordionExample");
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`, true);
let html="";
xhr.onload = function () {
  if (this.status === 200) {
    let json=JSON.parse(this.responseText);
    let article=json.articles;
    let c=0;
    
    article.forEach(element => {
      str="collapseExample"+c;
      c++;
      html+=` 
      <p class="my-3">
        <a class="btn btn-success" data-bs-toggle="collapse" href="#${str}" role="button" aria-expanded="false" aria-controls="${str}">
          ${element.title}
        </a>
      </p>
      <div class="collapse" id="${str}">
        <div class="card card-body bg-secondary text-light">
        ${element.content}<a href="${element.url}" target="_blank">Read more</a>
        </div>
      </div>
      
      `
    });
    
console.log(accordion);
accordion.innerHTML = html
  }
  else {
    console.log("error occured")
  }
}
xhr.send();


// 7375a7d9ae514db193bda0194c623008

