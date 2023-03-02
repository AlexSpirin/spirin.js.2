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
]; //наверное все же initial
function createNewDiv (names, links) { // Доебусь до нейминга))) дивов может быть много я бы предложил заменить Div на Card
    const newDiv = document.createElement('div'); // Зачем везде по функции приставка new? можно так же использовать Card: cardImage cardTitle и т.д. и т.п.
    newDiv.className = 'place-card';
    const newDivImage = document.createElement('div');
    newDivImage.className = 'place-card__image';
    const newButtonDelete = document.createElement('button');
    newButtonDelete.className = 'place-card__delete-icon';
    const newDivDescription = document.createElement('div');
    newDivDescription.className = 'place-card__description';
    const newH3 = document.createElement('h3');
    newH3.className = 'place-card__name';
    const newButtonLike = document.createElement('button');
    newButtonLike.className = 'place-card__like-icon';
    newButtonLike.addEventListener('click', function(event) {
        newButtonLike.classList.toggle('place-card__like-icon_liked');
    });
    newButtonDelete.addEventListener('click', function(event){
        inPlacecList.removeChild(newDiv); // при удалении карточки лучше снимать с нее слушатели они не исчезают и продолжают слушать то чего нет забивая оперативку
    });
    newDiv.appendChild(newDivImage);
    newDiv.appendChild(newDivDescription);
    newDivImage.appendChild(newButtonDelete);
    newDivDescription.appendChild(newH3);
    newDivDescription.appendChild(newButtonLike);
    newDivImage.style.backgroundImage = `url(${links})`; // здесь и строчка ниже, почему бы не заполнить элемент сразу после его создания? вся информация будет сгруппирована не придется прыгать туда сюда глазами
    newH3.textContent = names;
    console.log(newDiv); // логи надо чисть
    const inPlacecList = document.querySelector('div.places-list.root__section'); // наверное имелось ввиду Places (здесь и везде по коду)
    return inPlacecList.appendChild(newDiv);
};
inicialCards.forEach((num) => { // кто такой num? number? постарайся давать переменным понятные имена
    createNewDiv(num['name'], num['link']);
    // пустые строки тоже надо чистить
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
// у тебя у формы есть имя, постарайся найти форму через него, а инпуты уже искать внутри формаы, операция поиска по всей странице
// очень трудозатратна, это не будет ощутимо сейчас, но на больших проектах может быть критичным
const formName = document.querySelector('.popup__input.popup__input_type_name');
const formLink = document.querySelector('.popup__input.popup__input_type_link-url')
console.log(formName.value);// логи надо чисть х2
const clickNewCard = document.querySelector('.button.popup__button');
clickNewCard.addEventListener('click', function(event) {
    createNewDiv(formName.value, formLink.value);
    event.preventDefault(); // дефолтное поведение сбрасывается вначале функции
    popUp.classList.toggle('popup_is-opened');
});
