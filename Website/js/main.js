// Get all the links in the navbar
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav-links');

// Add a click event listener to each link in the navbar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // If using a mobile menu, close it when a link is clicked
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Toggle the menu on small screens
function toggleMenu() {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
const drinkDetails = {
  'green-smoothie': {
      title: 'Green Smoothie',
      description: 'Rich in antioxidants and vitamins, this smoothie boosts energy.',
      calories: '200 kcal',
      protein: '4g',
      carbs: '40g',
      fats: '7g',
      image: 'images/green-smoothie.jpg'
  },
  'berry-blast': {
      title: 'Berry Blast',
      description: 'Packed with antioxidants, this drink supports your immune system.',
      calories: '150 kcal',
      protein: '3g',
      carbs: '35g',
      fats: '2g',
      image: 'images/berry-blast.jpg'
  },
  'tropical-punch': {
      title: 'Tropical Punch',
      description: 'A refreshing blend of tropical fruits with vitamin C.',
      calories: '90 kcal',
      protein: '1g',
      carbs: '23g',
      fats: '0g',
      image: 'images/tropical-punch.jpg'
  },
  'avocado-smoothie': {
      title: 'Avocado Smoothie',
      description: 'Creamy and full of healthy fats, great for skin health.',
      calories: '150 kcal',
      protein: '3g',
      carbs: '20g',
      fats: '10g',
      image: 'images/avocado-smoothie.jpg'
  },
  'beetroot-juice': {
      title: 'Beetroot Juice',
      description: 'Boosts stamina and blood flow, rich in antioxidants.',
      calories: '60 kcal',
      protein: '2g',
      carbs: '14g',
      fats: '0g',
      image: 'images/beetroot-juice.jpg'
  },
  'mint-lime': {
      title: 'Mint Lime',
      description: 'Refreshing blend of mint and lime for a cool summer drink.',
      calories: '50 kcal',
      protein: '1g',
      carbs: '12g',
      fats: '0g',
      image: 'images/mint-lime.jpg'
  },
  'coconut-water': {
      title: 'Coconut Water',
      description: 'Rich in electrolytes, perfect for hydration.',
      calories: '45 kcal',
      protein: '1g',
      carbs: '9g',
      fats: '1g',
      image: 'images/coconut-water.jpg'
  }
};

function openModal(drinkId) {
  const drink = drinkDetails[drinkId];
  if (!drink) return;

  document.getElementById('modal-details').innerHTML = `
      <h2>${drink.title}</h2>
      <img src="${drink.image}" alt="${drink.title}">
      <p>${drink.description}</p>
      <ul>
          <li><strong>Calories:</strong> ${drink.calories}</li>
          <li><strong>Protein:</strong> ${drink.protein}</li>
          <li><strong>Carbs:</strong> ${drink.carbs}</li>
          <li><strong>Fats:</strong> ${drink.fats}</li>
      </ul>
  `;
  document.getElementById('drink-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('drink-modal').style.display = 'none';
}


 // jQuery to toggle full info on click
 $(document).ready(function(){
  $(".meal-plan-card").click(function(){
      $(this).toggleClass("open");
  });
});