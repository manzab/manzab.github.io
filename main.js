// debounce description
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
// declaring required variables
let resultsStore = document.getElementById('results');
const search = document.getElementById('search');
const filter = document.getElementById('char');
// Creating cards for each dog
for (i = 0; i < data.length; i++) {
    var cardStorage = document.createElement('div');
    cardStorage.classList.add('card');
    var imageStorage = document.createElement('div');
    imageStorage.classList.add('card__image');
    imageStorage.style.backgroundImage = `url("${data[i].url}")`;
    cardStorage.appendChild(imageStorage);
    var contentStoring = document.createElement('div');
    contentStoring.classList.add('card__content');
    cardStorage.appendChild(contentStoring);
    var dogName = document.createElement('h2');
    contentStoring.appendChild(dogName);
    dogName.innerText = data[i].breeds[0].name;
    var description = document.createElement('p');
    contentStoring.appendChild(description);
    description.innerHTML = 'Breed for:' + ' ' + data[i].breeds[0].bred_for + '<br>' + 'Breed group:' + ' ' + data[i].breeds[0].breed_group + '<br>' + 'Life span:' + ' ' + data[i].breeds[0].life_span;
    resultsStore.appendChild(cardStorage);
    var temperament = document.createElement('p');
    temperament.innerHTML = data[i].breeds[0].temperament;
    temperament.style.display = 'none';
    contentStoring.appendChild(temperament);
    var notFound = document.createElement('h1');
    notFound.innerText = 'NOT FOUND ANY DOGS';
    notFound.style.display = 'none';
    resultsStore.appendChild(notFound);
}
// targeting all created cards
var allCards = document.querySelectorAll('.card')
// Search function by names with debounce
var returnedFunction = debounce(function () {
    for (j = 0; j < data.length; j++) {
        if (allCards[j].innerText.toLowerCase().includes(search.value.toLowerCase())) {
            allCards[j].style.display = '';
        }
        else if (!allCards[j].innerText.toLowerCase().includes(search.value.toLowerCase())) {
            allCards[j].style.display = 'none';
            notFound.style.display = '';
        }
        else if (search.value.toLowerCase()==='') {console.log('kas vyksta')}
    }
}, 800);
// Filter function by temperament
var newReturnFunction = debounce(function() {
    for (j = 0; j < data.length; j++) {
        if (allCards[j].innerHTML.includes(filter.value)) {
            allCards[j].style.display = '';
        }
        else {
            allCards[j].style.display = 'none';
        }
    }
}, 400)
// search and filter events
search.addEventListener('input', returnedFunction)
filter.addEventListener('change', newReturnFunction)




