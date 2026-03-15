const spiders = [
  {
    name:"Heteroscodra maculata",
    size:"samice • 3 cm",
    price:"700 Kč",
    image:"img/spiders/heteroscodra-maculata.jpg",
    link:"species/heteroscodra-maculata.html"
  },
  {
    name:"Pterinochilus murinus RCF",
    size:"samice • adult",
    price:"1000 Kč",
    link:"species/pterinochilus-murinus-rcf.html"
  },
  {
    name:"Lasiodora parahybana",
    size:"samec • 4 cm",
    price:"300 Kč",
    link:"species/lasiodora-parahybana.html"
  },

  {
    name:"Psalmopoeus cambridgei",
    size:"neurčené • 1.svlek",
    price:"70 Kč",
    link:"species/psalmopoeus-cambridgei.html"
  }
]


const container = document.getElementById("spiderList");

spiders.forEach(spider => {
  container.innerHTML += `
  <a href="${spider.link}" class="spider">
    <div class="name">${spider.name}</div>
    <div class="info">${spider.size}</div>
    <div class="price">${spider.price}</div>
  </a>
  `;
});