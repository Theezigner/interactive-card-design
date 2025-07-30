export function createForm() {
    const formSection = document.createElement('section');
    formSection.className = 'h-screen z-10 flex flex-col md:w-[50%] md:justify-center md:items-center pt-30 md:pt-0 mx-10 md:mx-20';

    const formElement = document.createElement('form');
    formElement.className = 'w-full md:w-96';
    formElement.id = 'form';
    formElement.ariaLabel = 'Credit card details form';



    formElement.appendChild(cardName(""));
    formElement.appendChild(cardNumber());
    formElement.appendChild(cardExpiryAndCvc());
    formElement.appendChild(submitButton());

    
    // Building Form Section
    formSection.appendChild(formElement);

    return formSection;
}

// Cardholder Name
export function cardName(name: string) {
    const nameFieldWrapper = document.createElement('div');

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'cardholder-name';
    nameLabel.className = 'flex flex-col items-start';

    const nameLabelText = document.createElement('span');
    nameLabelText.className = 'text-gray-700 mb-2 text-base font-semibold';
    nameLabelText.textContent = "CARDHOLDER NAME";

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.inputMode = 'text';
    nameInput.pattern = '[A-Za-z. ]*';
    nameInput.placeholder = 'e.g. Jane Appleseed';
    nameInput.className = 'text-base mb-4 w-full text-base text-gray-500 border border-gray-300 rounded-md py-2 px-3';
    nameInput.id = 'cardholder-name';
    nameInput.required = true;

    nameInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement;
        input.value = input.value.replace(/[^a-zA-Z. ]/g, '');

        const preview = document.getElementById('cardname');
        if (preview) {
            const name = input.value.trim();
            preview.textContent = name === '' ? 'JANE APPLESEED' : name.toUpperCase();
        }

    });

    // Building Card name
    nameLabel.appendChild(nameLabelText);
    nameLabel.appendChild(nameInput);
    nameFieldWrapper.appendChild(nameLabel);

    return nameFieldWrapper;

};

// Card Number
export function cardNumber() {
    const numberFieldWrapper = document.createElement('div');

    const numberLabel = document.createElement('label');
    numberLabel.htmlFor = 'card number';
    numberLabel.className = 'flex flex-col items-start';

    const numberLabelText = document.createElement('span');
    numberLabelText.className = 'text-gray-700 mb-2 font-semibold text-base';
    numberLabelText.textContent = "CARD NUMBER";

    const numberInput = document.createElement('input');
    numberInput.type = 'text';
    numberInput.inputMode = 'numeric';
    numberInput.pattern = '\\d{4} \\d{4} \\d{4} \\d{4}';
    numberInput.placeholder = '1234 5678 9012 0000';
    numberInput.className = 'mb-4 w-full text-gray-500 border border-gray-300 rounded-md py-2 px-3 text-base';
    numberInput.id = 'cardholder-number';
    numberInput.required = true;
    numberInput.maxLength = 19;

    numberInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement;
        let digits = input.value.replace(/\D/g, '');
        digits = digits.slice(0, 16);
        const spaced = digits.replace(/(.{4})/g, "$1 ").trim();
        input.value = spaced;

        const preview = document.getElementById('cardnumber');
        if (preview) {
            const number = input.value.trim();
            preview.textContent = number === '' ? '0000 0000 0000 0000' : number;
        }
    });

    // Building Card Number
    numberLabel.appendChild(numberLabelText);
    numberLabel.appendChild(numberInput);
    numberFieldWrapper.appendChild(numberLabel);

    return numberFieldWrapper;

};

export function cardExpiryAndCvc() {
    // Expiration + CVC
    const expCvcWrapper = document.createElement('div');
    expCvcWrapper.className = 'flex flex-row gap-[3%] w-full';

    // Expiration Date
    const expLabel = document.createElement('label');
    expLabel.htmlFor = 'expiry-date';
    expLabel.className = 'flex flex-col items-start w-[49%]';

    const expLabelText = document.createElement('span');
    expLabelText.className = 'text-gray-700 mb-2 font-semibold text-base';
    expLabelText.textContent = 'EXP.DATE (MM/YY)';

    const expInputWrapper = document.createElement('div');
    expInputWrapper.className = 'flex flex-row gap-[4%]';

    const expMonthInput = document.createElement('input');
    expMonthInput.type = 'text';
    expMonthInput.inputMode = 'numeric';
    expMonthInput.pattern = '[0-9]*'
    expMonthInput.maxLength = 2;
    expMonthInput.placeholder = 'MM';
    expMonthInput.className = 'mb-4 w-[48%] text-gray-500 border border-gray-300 rounded-md py-2 px-3 text-base';

    expMonthInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement
        let value = expMonthInput.value.replace(/\D/g, ''); // Remove non-numeric
        if (value.length === 1 && parseInt(value) > 1) {
            value = '0' + value; // e.g. user types '3' → '03'
        }

        if (value.length > 2) {
            value = value.slice(0, 2); // Limit to 2 digits
        }

        const monthNum = parseInt(value);
        if (monthNum > 12) {
            value = '12'; // Cap at 12
        }

        expMonthInput.value = value;

        const preview = document.getElementById('expmonth');
        if (preview) {
            const number = input.value.trim();
            preview.textContent = number === '' ? '00' : number;
        }
    });

    const expYearInput = document.createElement('input');
    expYearInput.type = 'text';
    expYearInput.inputMode = 'numeric';
    expYearInput.pattern = '[0-9]*'
    expYearInput.maxLength = 2;
    expYearInput.placeholder = 'YY';
    expYearInput.className = 'mb-4 w-[48%] text-gray-500 border border-gray-300 rounded-md py-2 px-3 text-base';

    expYearInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement
        let value = expYearInput.value.replace(/\D/g, ''); 

        if (value.length > 2) {
            value = value.slice(0, 2);
        }

        expYearInput.value = value;

        const preview = document.getElementById('expyear');
        if (preview) {
            const number = input.value.trim();
            preview.textContent = number === '' ? '00' : number;
        }
    });

    // CVC
    const cvcLabel = document.createElement('label');
    cvcLabel.htmlFor = 'cvc';
    cvcLabel.className = 'flex flex-col items-start w-[48%]';

    const cvcLabelText = document.createElement('span');
    cvcLabelText.className = 'text-gray-700 mb-2 font-semibold text-base';
    cvcLabelText.textContent = 'CVC';

    const cvcInput = document.createElement('input');
    cvcInput.type = 'text';
    cvcInput.inputMode = 'numeric';
    cvcInput.pattern = '[0-9]*';
    cvcInput.maxLength = 3;
    cvcInput.placeholder = 'e.g. 123';
    cvcInput.className = 'mb-4 w-full text-gray-500 border border-gray-300 rounded-md py-2 px-3 text-base';

    
    cvcInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement
        let value = cvcInput.value.replace(/\D/g, ''); 

        cvcInput.value = value;

        const preview = document.getElementById('cvc');
        if (preview) {
            const number = input.value.trim();
            preview.textContent = number === '' ? '123' : number;
        }
    });

    // Building Expiration and CVC Section
    expInputWrapper.appendChild(expMonthInput);
    expInputWrapper.appendChild(expYearInput);
    expLabel.appendChild(expLabelText);
    expLabel.appendChild(expInputWrapper);

    cvcLabel.appendChild(cvcLabelText);
    cvcLabel.appendChild(cvcInput);

    expCvcWrapper.appendChild(expLabel);
    expCvcWrapper.appendChild(cvcLabel);

    return expCvcWrapper;
};

// Submit Button
export function submitButton() {
    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'bg-purple-950 text-white py-2 px-4 rounded-md w-full hover:bg-purple-900 transition duration-200';
    submitButton.textContent = 'Submit';
    submitButton.id = 'form-button';

    return submitButton;
};

//thank you
export function thankYou() {
    const thankYouSection = document.createElement('section')
    thankYouSection.className = ' hidden bg-white w-full h-screen flex flex-col md:justify-center md:items-center pt-30 md:pt-0 px-10 md:px-20';

    const thankYouElement = document.createElement('form');
    thankYouElement.className = 'w-full md:w-96 flex flex-col gap-5 justify-center items-center';
    thankYouElement.id = 'thankyou';
    thankYouElement.ariaLabel = 'Thank you for filling Card Details';

    const thankYouImg = document.createElement('img')
    thankYouImg.src =  new URL('/images/icon-complete.svg', import.meta.url).toString();;
    thankYouImg.alt = 'Done';
    thankYouImg.className = '';


    const thankYouH1 = document.createElement('h1');
    thankYouH1.textContent = 'THANK YOU';
    thankYouH1.className = '';

    const thankYouP = document.createElement('p');
    thankYouP.textContent = "We've added your card detail";
    thankYouP.className = 'text-gray-400 mb-2 font-semibold text-base';

    //building thank you
    thankYouElement.appendChild(thankYouImg);    
    thankYouElement.appendChild(thankYouH1);
    thankYouElement.appendChild(thankYouP);
    thankYouElement.appendChild(continueButton());  
    thankYouSection.appendChild(thankYouElement);

    return thankYouSection;
}

// continue Button
export function continueButton() {
    // Submit Button
    const continueButton = document.createElement('button');
    continueButton.type = 'submit';
    continueButton.className = 'bg-purple-950 text-white py-2 px-4 rounded-md w-full hover:bg-purple-900 transition duration-200';
    continueButton.textContent = 'Continue';
    continueButton.id = 'form-button';

    return continueButton;
};