const stays = [
    {
        score: 2.75,
        rating: 4,
        img: './assets2/pexels1.jpg',
        title: 'Apartment • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels2.jpg',
        title: 'Residence • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels3.jpg',
        title: 'Penthouse • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels4.jpg',
        title: 'BnB • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels5.jpg',
        title: 'Apartment • ',
        description: 'Wonderful House'
    },
    {
        score: 2.75,
        rating: 4,
        img: './assets2/pexels-asadphoto-240526.jpg',
        title: 'Apartment • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels-ishan-139144-678725.jpg',
        title: 'Penthouse • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels-pixabay-38238.jpg',
        title: 'Residence • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels-pixabay-66258.jpg',
        title: 'Apartment • ',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels-pixabay-164041.jpg',
        title: 'Apartment • ',
        description: 'Wonderful House'
    },
]

const searchParams = new URLSearchParams(window.location.search);
const city = searchParams.get(`city`);

const cardsContainer = document.getElementById("cards-container");
const resultQt = document.getElementById("result-number");
const pageTitle = document.getElementById("pageTitle");

let randomQt = Math.floor(Math.random() * stays.length);

let staysRandom = stays.slice(0, randomQt);

resultQt.innerText = `${staysRandom.length} stays`;

const createCard = (cardData, container) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card border-0");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top rounded-4 object-fit-cover");
    cardImg.src = cardData.img

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body pt-1 border-0");
    createCardBody(cardData, cardBody)

    card.append(cardImg, cardBody);
    container.appendChild(card);

    card.addEventListener("click", () => {
        window.location.href = "page3.html";
    })
}

const createCardBody = (cardData, container) =>{
    const ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "d-flex gap-2 align-items-center");
    createRatingDiv(cardData, ratingDiv);

    const titleP = document.createElement("p");
    titleP.textContent = `${cardData.title}${city}`;
    titleP.setAttribute("class", "mb-0");

    const descriptionCard = document.createElement("p");
    descriptionCard.textContent = cardData.description;
    
    container.append(ratingDiv, titleP, descriptionCard);
}

const createRatingDiv = (cardData, container) => {
    const iconStar = document.createElement("ion-icon")
    iconStar.setAttribute("name", "star");
    iconStar.setAttribute("class", "text-danger")

    const cardScore = document.createElement("p");
    cardData.score === 0 ? cardScore.innerText = "" : cardScore.innerText = cardData.score;
    cardScore.setAttribute("class", "card-title m-0 fw-bold");

    const ratingCard = document.createElement("p");
    cardData.rating === 0 ? ratingCard.innerText = `0 ratings` : ratingCard.innerText = `• ${cardData.rating} ratings`;
    ratingCard.setAttribute("class", "m-0")

    container.append(iconStar, cardScore, ratingCard);
}

staysRandom.forEach(stay => {
    createCard(stay, cardsContainer)
})

pageTitle.innerText += ` ${city}`;