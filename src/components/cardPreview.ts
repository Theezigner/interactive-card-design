export function cardPreview() {
    // Card Preview Section
    const cardPreview = document.createElement('section');
    cardPreview.className = ' w-[80%] md:w-[50px] flex justify-center items-center';

    
    // Building Card Preview Section
    cardPreview.appendChild(cardFront());
    cardPreview.appendChild(cardBack());

    return cardPreview;
}

export function cardFront() {
    const cardFrontWrapper = document.createElement('div');
    cardFrontWrapper.className = 'absolute z-10 md:z-0 self-start order-2 md:order-1 w-[300px] md:w-[400px] top-[30%] md:top-[33%] left-[45%] md:left-[23%] transform -translate-x-1/2 -translate-y-1/2';

    const cardFrontFigure = document.createElement('figure');
    cardFrontFigure.className = 'relative ';

    const cardFrontImage = document.createElement('img');
    cardFrontImage.src = '/images/bg-card-front.png';
    cardFrontImage.alt = 'Card Front';
    cardFrontImage.className = 'md:w-[400px]';

    const logo = document.createElement('img');
    logo.src = new URL('/images/card-logo.svg', import.meta.url).toString();
    logo.alt = 'Card Logo';
    logo.className = 'absolute md:top-7 top-6 left-6 w-12 md:w-15';

    const cardNumber = document.createElement('p');
    cardNumber.textContent = '0000 0000 0000 0000';
    cardNumber.className = 'absolute bottom-[3rem] md:bottom-[4rem] left-6 text-white tracking-widest text-[1.2rem] md:text-[1.7rem]';
    cardNumber.id = 'cardnumber';

    const cardBottomHolder = document.createElement('section')
    cardBottomHolder.className = 'absolute left-6 right-6 bottom-[1rem] md:bottom-[2rem] text-white tracking-widest text-xs md:text-sm flex justify-between';

    const cardName = document.createElement('p');
    cardName.textContent = 'JANE APPLESEED';
    cardName.id = 'cardname';

    const expMonth = document.createElement('p');
    expMonth.textContent = '00';
    expMonth.className = 'text-right';
    expMonth.id = 'expmonth';

    const slash = document.createTextNode('/');

    const expYear = document.createElement('p');
    expYear.textContent = '00';
    expYear.className = 'text-right';
    expYear.id = 'expyear';

    const cardBottomDate = document.createElement('div')
    cardBottomDate.className = 'flex flex-row gap-1';

    

    // card front
    cardBottomDate.appendChild(expMonth);
    cardBottomDate.appendChild(slash);
    cardBottomDate.appendChild(expYear);
    cardBottomHolder.appendChild(cardName);
    cardBottomHolder.appendChild(cardBottomDate);
    cardFrontFigure.appendChild(cardNumber);
    cardFrontFigure.appendChild(logo);
    cardFrontFigure.appendChild(cardBottomHolder);
    cardFrontFigure.appendChild(cardFrontImage);
    cardFrontWrapper.appendChild(cardFrontFigure);

    return cardFrontWrapper;

};

export function cardBack() {
    const cardBackWrapper = document.createElement('div');
    cardBackWrapper.className = 'self-end order-1 md:order-2 w-[300px] md:w-[400px] absolute top-[15%] md:top-[67%] left-[60%] md:left-[28%] transform -translate-x-1/2 -translate-y-1/2';  

    const cardBackFigure = document.createElement('figure');
    cardBackFigure.className = 'relative';

    const cardBackImage = document.createElement('img');
    cardBackImage.src = '/images/bg-card-back.png';
    cardBackImage.alt = 'Card Back';
    cardBackImage.className = 'md:w-[400px]';

    const cvc = document.createElement('p');
    cvc.textContent = '123';
    cvc.className = 'absolute bottom-[4.7rem] md:bottom-[6.4rem] left-61 md:left-82 text-white tracking-widest text-xs md:text-sm';
    cvc.id = 'cvc';

    // card back
    cardBackFigure.appendChild(cvc);
    cardBackFigure.appendChild(cardBackImage);
    cardBackWrapper.appendChild(cardBackFigure);

    return cardBackWrapper;
};