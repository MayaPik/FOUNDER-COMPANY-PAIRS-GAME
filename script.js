import { Fireworks } from 'fireworks-js'
var myCards = document.getElementById('container');
let counter = 0;

const logos = [
    {
    name : 'Tumblr',
    imgUrl: "Pictures/tumblrLogo.png",
    text: "David Karp, (born July 6, 1986, New York, New York, U.S.), American Web developer and entrepreneur who founded the microblogging site Tumblr."
  
    },
    {
    name : 'linkdedIn',
    imgUrl: "Pictures/LinkedInLogo.png",
    text: "Reid Garrett Hoffman is an American internet entrepreneur, venture capitalist, podcaster, and author."

    },
    {
    name : 'Twitter',
    imgUrl: "Pictures/twitterLogo.png",
    text: "Jack Patrick Dorsey is an American Internet entrepreneur and programmer who is a co-founder and former CEO of Twitter, Inc."

    },
    {
    name : 'Yahoo!',
    imgUrl: "Pictures/yahooLogo.png",
    text: "Jerry Chih-Yuan Yang is a Taiwanese-American billionaire computer programmer, internet entrepreneur, and venture capitalist."

    },
    {
      name : 'TikTok',
      imgUrl: "Pictures/tiktokLogo.png",
      text: "Zhang Yiming is founder of Chinese tech giant ByteDance, best known for its insanely popular app TikTok, which has more than 1 billion users worldwide."
  
      }

];

const founders = [
    {
    name : 'Tumblr',
    imgUrl: "Pictures/tumblrFounder.jpeg",
    text: "David Karp, (born July 6, 1986, New York, New York, U.S.), American Web developer and entrepreneur who founded the microblogging site Tumblr."
    },
    {
    name : 'linkdedIn',
    imgUrl: "Pictures/linkdinFounder.jpeg",
    text: "Reid Garrett Hoffman is an American internet entrepreneur, venture capitalist, podcaster, and author."
    },
    {
    name : 'Twitter',
    imgUrl: "Pictures/twitterFounder.jpeg",
    text: "Jack Patrick Dorsey is an American Internet entrepreneur and programmer who is a co-founder and former CEO of Twitter, Inc."
    },
    {
    name : 'Yahoo!',
    imgUrl: "Pictures/yahooFounder.jpeg",
    text: "Jerry Chih-Yuan Yang is a Taiwanese-American billionaire computer programmer, internet entrepreneur, and venture capitalist."

    },
    {
      name : 'TikTok',
      imgUrl: "Pictures/tiktokFounder.jpeg",
      text: "Zhang Yiming is founder of Chinese tech giant ByteDance, best known for its insanely popular app TikTok, which has more than 1 billion users worldwide."
  
      }
  ];

const cards = logos.concat(founders); // merge to arrays 
let resultsArray =[];

// Shufffel function
function shuffle(o){
  for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

for (let i = 0; i < cards.length; i++) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  img.src = cards[i].imgUrl;
  img.style.width ='100px';
  img.style.height = '140px';
  card.dataset.item = cards[i].name;
  card.dataset.text = cards[i].text;
  card.dataset.view = "card";
  card.appendChild(img)
  myCards.appendChild(card);

  card.onclick = function () {

    if (this.className != 'flipped' && this.className != 'correct'){
      let text = document.getElementById('start')
      let about = document.getElementById('about');
      text.innerText = "";
      about.innerText = "";
      this.className = 'flipped';
      let result = this.dataset.item;
      resultsArray.push(result);
    }
  
    if (resultsArray.length === 2) {

      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
              let about = document.getElementById('about');
            about.innerText = card.dataset.text;
            if(counter === 5) {
             const container = document.getElementById()
            const fireworks = new Fireworks(container, { /* options */ })
             fireworks.start()
               } 
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
      
    }
    
  }
   
};

let check = function(value) {
  
  let flipped = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(let i = (flipped.length - 1); i >= 0; i--) {
      flipped[i].className = value;
    }
     
  },400);
   
}
