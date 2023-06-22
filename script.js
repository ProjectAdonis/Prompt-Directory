const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('theme-gray');
  body.classList.toggle('theme-white');
});

// Placeholder data for prompt cards
const promptData = [
    { title: 'Favorite Book', description: 'What is your all-time favorite book and why?' },
    { title: 'Dream Vacation', description: 'If you could go on a dream vacation anywhere in the world, where would you go and what would you do?' },
    { title: 'Life Advice', description: 'What is the best piece of advice you have ever received?' },
    // Add more prompt objects as needed
  ];
  
const promptCardsContainer = document.querySelector('.prompt-cards');

// Function to generate prompt cards dynamically
function generatePromptCards() {
  promptCardsContainer.innerHTML = '';

  promptData.forEach((prompt) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-front">
        <h3>${prompt.title}</h3>
        <p>${prompt.description}</p>
      </div>
      <div class="card-back">
        <h3>${prompt.title}</h3>
        <div class="buttons">
          <button class="favorite-btn">Favorite</button>
          <button class="copy-btn">Copy</button>
        </div>
      </div>
    `;

    card.addEventListener('click', function () {
      card.classList.toggle('flipped');
    });

    promptCardsContainer.appendChild(card);
  });
}

generatePromptCards();

// Filter functionality
const filterToggle = document.getElementById('filterToggle');
const filterModal = document.querySelector('.filter-modal');

filterToggle.addEventListener('click', function () {
  filterModal.classList.toggle('show');
});

// Search functionality
constsearchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
const searchTerm = searchInput.value.toLowerCase();

promptData.forEach((prompt) => {
    const card = promptCardsContainer.querySelector(`[data-title="${prompt.title}"]`);
if (prompt.title.toLowerCase().includes(searchTerm) || prompt.description.toLowerCase().includes(searchTerm)) {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});
});

// Complete the filter functionality
// You can add your specific filtering options and logic here

// Favorite button functionality
const favoriteButtons = document.querySelectorAll('.favorite-btn');

favoriteButtons.forEach((button) => {
button.addEventListener('click', function () {
// Handle the favorite button action here
});
});

// Copy button functionality
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
button.addEventListener('click', function () {
// Handle the copy button action here
});
});