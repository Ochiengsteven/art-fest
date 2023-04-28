const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const home = document.querySelector('a[href="#about"]');
const program = document.querySelector('a[href="#program"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
program.addEventListener('click', close);
home.addEventListener('click', close);

// My card content
const cardData = [
  {
    imageSrc: '/images/picaso1.jpg',
    subtitle: 'Pablo Picasso',
    title: 'painter',
    description:
      'A Spanish painter, sculptor, and printmaker of the 20th century.',
  },
  {
    imageSrc: '/images/vincent.jpg',
    subtitle: 'Vincent Gogh',
    title: 'painter',
    description:
      'A Dutch painter, He is known for his bold use of color and expressive brushwork.',
  },
  {
    imageSrc: '/images/salvador.jpg',
    subtitle: 'Salvador Dali',
    title: 'painter',
    description:
      'A Spanish surrealist painter, Dali is known for his bizarre and dreamlike imagery.',
  },
  {
    imageSrc: '/images/leonardo.jpg',
    subtitle: 'Leonardo da Vinci',
    title: 'polymath',
    description:
      'An Italian polymath, da Vinci was a painter, sculptor, architect, engineer, and inventor.',
  },
  {
    imageSrc: '/images/andy.jpg',
    subtitle: 'Andy Warhol',
    title: 'artist',
    description:
      'An American artist and leading figure in the pop art movement.',
  },
  {
    imageSrc: '/images/frank.jpg',
    subtitle: 'Frank Lloyd',
    title: 'architect',
    description:
      'An American architect, Wright is known for his innovative and organic designs.',
  },
];

// Get container element
const container = document.querySelector('.featured-container');

// Loop through card data and create cards
cardData.forEach((card, index) => {
  // Create card element
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  // Create image container element
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  // Create image element
  const imageElement = document.createElement('img');
  imageElement.src = card.imageSrc;
  imageElement.alt = card.subtitle;

  // Create text element
  const textElement = document.createElement('div');
  textElement.classList.add('card-text');

  // Create name element
  const nameElement = document.createElement('div');
  nameElement.classList.add('card-name');
  nameElement.innerHTML = `<h3>${card.subtitle}</h3>`;

  // Create title element
  const titleElement = document.createElement('div');
  titleElement.classList.add('card-title');
  titleElement.innerHTML = `<h5>${card.title}</h5>`;

  // Create description element
  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('card-description');
  descriptionElement.innerHTML = `<p>${card.description}</p>`;

  // Append child elements to text element
  textElement.appendChild(nameElement);
  textElement.appendChild(titleElement);
  textElement.appendChild(descriptionElement);

  // Append image element to image container
  imageContainer.appendChild(imageElement);

  // Append child elements to card element
  cardElement.appendChild(imageContainer);
  cardElement.appendChild(textElement);

  // Append card element to container
  container.appendChild(cardElement);
  // Append card element to container
  if (index < 2) {
    container.appendChild(cardElement);
  } else {
    let collapseContainer = document.querySelector('.cards-collapse');
    if (!collapseContainer) {
      const newCollapseContainer = document.createElement('div');
      newCollapseContainer.classList.add('cards-collapse');
      container.appendChild(newCollapseContainer);
      collapseContainer = newCollapseContainer; // collapseContainer is a constant error is here
    }
    collapseContainer.appendChild(cardElement);
  }
});

// Get the show more button
const showMoreButton = document.querySelector('.show-more-button');

// click event listener to the show more button
showMoreButton.addEventListener('click', () => {
  // Get the cards collapse container
  const cardsCollapse = document.querySelector('.cards-collapse');

  // Get all the cards in the cards collapse container
  const cards = cardsCollapse.querySelectorAll('.card');

  // Loop for cards and show them
  cards.forEach((card) => {
    card.style.display = 'flex';
    card.style.height = '16vh';
    card.style.width = '37vh';
    card.classList.add('show-card');
  });

  // Hide the show more button
  showMoreButton.style.display = 'none';
});
