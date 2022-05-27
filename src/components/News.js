import React from 'react'

export default function News() {

    let source = 'business-insider';
    let apiKey = '5bccaf27095945d68c3ae7d3e32f99b9'

// Grab the news containers
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
    true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
                // console.log(element, index)
                let news = `<div className="card">
                                <div className="card-header" id="heading${index}">
                                    <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="false" aria-controls="collapse${index}">
                                       <b>Breaking News ${index+1}:</b> ${element["title"]}
                                    </button>
                                    </h2>
                                </div>
    
                                <div id="collapse${index}" className="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div className="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                                </div>
                            </div>`;
                 newsHtml = newsHtml + news;
                //console.log(newsHtml)
            });
            newsAccordion.innerHTML = newsHtml;
        }
        else {
            console.log("Some error had occured")
        }
    }
    xhr.send()

  return (
    <div>
        <div className="container my-3">
    <h4>News Update by:<span className="badge badge-secondary"><em id='change'>BrewApps InfoTechs</em></span></h4>
    <hr/>
    <div className="accordion" id="newsAccordion"></div>
  </div>
    </div>
  )
}
