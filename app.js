async function getRandomGif() {
    const res = await axios.get('http://api.giphy.com/v1/gifs/random', { params: { api_key: 'cVloCMxIzOG0QRNufSA9hhZucP6wYhEs' } });
    const img = document.createElement('img');
    const imgSource = res.data.data.images.original.url;
    img.src = imgSource;
    const gifContainer = document.querySelector('#gifcontainer');
    gifContainer.appendChild(img);
}

async function getGif(searchQuery) {
    try {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}`, { params: { api_key: 'cVloCMxIzOG0QRNufSA9hhZucP6wYhEs' } });
    const data = res.data.data;
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomObj = data[randomIndex];
    const imgSrc = randomObj.images.original.url;
    const img = document.createElement('img');
    img.src = imgSrc;
    const gifContainer = document.querySelector('#gifcontainer');
    gifContainer.appendChild(img);
    } catch (e) {
        alert('no gif found, random gif will be generated');
        getRandomGif();
    }
}

const form = document.querySelector('#form');
const input = document.querySelector('#input');
form.addEventListener('submit', function(e){
    e.preventDefault();
    getGif(input.value);
    input.value = '';
})

function clearGifs() {
    const gifContainer = document.querySelector('#gifcontainer');
    while (gifContainer.firstChild) {
      gifContainer.removeChild(gifContainer.firstChild);
    }
  }

const removeBtn = document.querySelector('#removebtn');
removeBtn.addEventListener('click', function() {
    clearGifs();
})