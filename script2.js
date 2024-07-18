const stays = [
    {
        score: 2.75,
        rating: 4,
        img: './assets2/pexels1.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels2.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels3.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels4.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels5.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 2.75,
        rating: 4,
        img: './assets2/pexels1.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels2.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels3.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels4.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
    {
        score: 0,
        rating: 0,
        img: './assets2/pexels5.jpg',
        title: 'Apartment • Genova',
        description: 'Wonderful House'
    },
]



const cardsContainer = document.getElementById("cards-container");
const resultQt = document.getElementById("result-number");

resultQt.innerText = `${stays.length} stays`;

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
    titleP.textContent = cardData.title;
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

stays.forEach(stay => {
    createCard(stay, cardsContainer)
})