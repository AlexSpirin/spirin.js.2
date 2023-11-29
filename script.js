const inicialCards  = [
    {
        name: 'Метро',
        link: 'https://images.unsplash.com/photo-1676182774577-ec275d19c441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Дерево',
        link: 'https://images.unsplash.com/photo-1676275063474-e4430f08d52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Город',
        link: 'https://images.unsplash.com/photo-1676081683111-612f7595e874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Лодки',
        link: 'https://images.unsplash.com/photo-1676148817751-10fbbd99b0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
    },
    {
        name: 'Зима',
        link: 'https://images.unsplash.com/photo-1675947768776-01e190cd45e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Улица',
        link: 'https://images.unsplash.com/photo-1675878386656-8145d524f6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Дом',
        link: 'https://images.unsplash.com/photo-1675787287721-984b5fb2fd1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Туман',
        link: 'https://images.unsplash.com/photo-1675767304968-2e8617b00d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Египет',
        link: 'https://images.unsplash.com/photo-1671483330970-7848f8ec545a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Кафе',
        link: 'https://images.unsplash.com/photo-1674837594030-eac689afe930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3x4SHhZVE1ITGdPY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    }
];
function createNewCard (names, links) {
    const card = document.createElement('div');
    card.className = 'place-card';
    const cardImage = document.createElement('div');
    cardImage.className = 'place-card__image';
    const popupImage = document.querySelector('.popup-image');
    cardImage.style.backgroundImage = `url(${links})`;
    const popupImageSrc = document.querySelector('.popup-image__image');
    cardImage.addEventListener('click', function(event) {
        popupImage.classList.add('popup-image_is-opened');
        popupImageSrc.src = links;
    });
    const cardButtonDelete = document.createElement('button');
    cardButtonDelete.className = 'place-card__delete-icon';
    cardButtonDelete.addEventListener('click', function funcListener(event){
        inPlacesList.removeChild(card);
        cardButtonDelete.removeEventListener('click', funcListener);
        cardButtonLike.removeEventListener('click', funcListener);
        event.stopImmediatePropagation();
    });
    const cardDescription = document.createElement('div');
    cardDescription.className = 'place-card__description';
    const cardH3 = document.createElement('h3');
    cardH3.className = 'place-card__name';
    cardH3.textContent = names;
    const cardButtonLike = document.createElement('button');
    cardButtonLike.className = 'place-card__like-icon';
    cardButtonLike.addEventListener('click', function funcListener(event) {
        cardButtonLike.classList.toggle('place-card__like-icon_liked');
    });
    card.appendChild(cardImage);
    card.appendChild(cardDescription);
    cardImage.appendChild(cardButtonDelete);
    cardDescription.appendChild(cardH3);
    cardDescription.appendChild(cardButtonLike);
    const inPlacesList = document.querySelector('div.places-list.root__section');
    return inPlacesList.appendChild(card);
};
inicialCards.forEach((element) => {
    createNewCard(element['name'], element['link']);
});
const clickButtonOpen = document.querySelector('button.button.user-info__button');
const popUp = document.querySelector('.popup');
clickButtonOpen.addEventListener('click', function(event) {
    popUp.classList.add('popup_is-opened');
});
const clickButtonClose = document.querySelector('.popup__close');
clickButtonClose.addEventListener('click', function(event) {
    popUp.classList.toggle('popup_is-opened');
});
const formName = document.forms.new.name;
const formLink = document.forms.new.link;
const clickNewCard = document.querySelector('.button.popup__button');
clickNewCard.addEventListener('click', function(event) {
    event.preventDefault();
    createNewCard(formName.value, formLink.value);
    popUp.classList.toggle('popup_is-opened');
});
const clickEditButtonOpen = document.querySelector('.user-info__button-edit');
const popUpEdit = document.querySelector('.popup-edit');
clickEditButtonOpen.addEventListener('click', function(event) {
    popUpEdit.classList.add('popup-edit_is-opened');
});
const clickEditButtonClose = document.querySelector('.popup-edit__close');
clickEditButtonClose.addEventListener('click', function (event) {
    popUpEdit.classList.toggle('popup-edit_is-opened');
});
const formEditName = document.forms.edit.editName;
const formEditInfo = document.forms.edit.editInfo;
const newName = document.querySelector('.user-info__name');
const newJob = document.querySelector('.user-info__job');
const clickRename = document.querySelector('button.popup-edit__button');
clickRename.addEventListener('click', function(event) {
    event.preventDefault();
    newName.textContent = formEditName.value;
    newJob.textContent = formEditInfo.value;
    popUpEdit.classList.toggle('popup-edit_is-opened');
});
const popupImageClose = document.querySelector('.popup-image__close');
const popupImage = document.querySelector('.popup-image');
popupImageClose.addEventListener('click', function funcListener(event) {
    popupImage.classList.toggle('popup-image_is-opened');
});
formEditName.addEventListener('keydown', function(event) {
    IsValidate(formEditName);
    });
    function IsValidate(input) {
       if (input.value.length < 2 || input.value.length > 31) {
           const formSelector = document.querySelector('.popup-edit__form');
           const errorMessadge = document.createElement('p');
           errorMessadge.className = 'popup-edit__valid-name';
           formSelector.appendChild(errorMessadge);
           errorMessadge.textContent = 'Должно быть от 2 до 30 символов';
           console.log(input.value)
       } else {
       }
      return input.checkValidity()
    };
