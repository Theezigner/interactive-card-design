import './style.css'
import { createForm } from './components/createForm';
import { thankYou } from './components/createForm';
import { cardPreview } from './components/cardPreview';

const app = document.getElementById('app')!;
const formSection = createForm();

const thankYouSection = thankYou();

const form = formSection.querySelector('form')!;
const thankYouContinue = thankYouSection.querySelector('form')!;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formSection.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
});

thankYouContinue.addEventListener('submit', (e) => {
    e.preventDefault();

    formSection.classList.remove('hidden');
    thankYouSection.classList.add('hidden');
});

const main = document.createElement('main');
main.className = 'main relative flex flex-col  md:flex-row w-full h-screen';

const bgSection = document.createElement('section');
bgSection.className = 'md:w-[40%] md:h-screen h-[50%] w-full';

const bgPicture = document.createElement('picture');
bgPicture.className = 'block w-full';

const bgSource = document.createElement('source');
bgSource.media = '(min-width: 768px)';
bgSource.srcset = '/images/bg-main-desktop.png';
bgSource.type = 'image/png';

const bgImage = document.createElement('img');
bgImage.src = '/images/bg-main-mobile.png';
bgImage.alt = 'Background Image';
bgImage.className = 'w-full md:w-[80%] md:h-screen object-cover';
bgImage.loading = 'lazy';




// Building Background Section
bgPicture.appendChild(bgSource);
bgPicture.appendChild(bgImage);
bgSection.appendChild(bgPicture);

// Building Main
main.appendChild(bgSection);
main.appendChild(formSection);
main.appendChild(thankYouSection);
main.appendChild(cardPreview());

// Appending to DOM
app.appendChild(main);

