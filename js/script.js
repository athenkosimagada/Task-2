const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
});

// Data

const highlightsData = [
  {
    imgSrc: "assets/green5.jpg",
    title: "Unveiling New Initiatives",
    description: "Witness the birth of impactful projects shaping our communities."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Empowering Sustainability",
    description: "Explore initiatives that empower sustainable practices for a better future."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Community Collaboration",
    description: "Join hands with communities to create positive change and lasting impact."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Innovative Solutions",
    description: "Discover innovative solutions that address environmental challenges head-on."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Eco-Friendly Innovations",
    description: "Embrace eco-friendly innovations that redefine the way we live and interact with the environment."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Green Technology Showcase",
    description: "Get a glimpse of cutting-edge green technologies that are reshaping industries."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Nature Conservation",
    description: "Support initiatives dedicated to the conservation and preservation of our precious natural resources."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Global Impact Projects",
    description: "Explore projects with a global reach, making a positive impact on a large scale."
  },
  {
    imgSrc: "assets/green5.jpg",
    title: "Sustainable Living Practices",
    description: "Adopt sustainable living practices that contribute to a healthier planet and future generations."
  },
];


const initiativesData = [
  {
    imgSrc: "assets/green1.jpg",
    title: "Community Gardens",
    description: "Join us in cultivating green spaces that foster community bonding and sustainable agriculture.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Environmental Education Programs",
    description: "Promoting awareness and understanding of environmental issues through educational initiatives.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Renewable Energy Advocacy",
    description: "Supporting the transition to renewable energy sources for a sustainable and clean future.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Waste Reduction Campaigns",
    description: "Working towards minimizing waste and promoting responsible waste management practices.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Urban Greening Projects",
    description: "Transforming urban areas into green spaces to improve air quality and enhance biodiversity.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Ocean Conservation Initiatives",
    description: "Dedicated to preserving and protecting our oceans and marine ecosystems.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Sustainable Transportation Programs",
    description: "Advocating for and implementing eco-friendly transportation solutions to reduce carbon emissions.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Biodiversity Conservation Projects",
    description: "Preserving the rich diversity of plant and animal life for a balanced and healthy ecosystem.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Climate Change Resilience Programs",
    description: "Building resilience in communities to adapt to the impacts of climate change.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Green Technology Innovation",
    description: "Supporting and promoting innovative green technologies for a sustainable future.",
  },
  {
    imgSrc: "assets/green1.jpg",
    title: "Eco-Friendly Lifestyle Campaigns",
    description: "Encouraging individuals to adopt eco-friendly practices in their daily lives for a greener planet.",
  },
];

// Highlights

const highlightsContainer = document.querySelector('.highlights');
const overMessage = document.querySelector('.over-message');
let currentIndex = 0;

function loadHighlights(count) {
  for (let i = 0; i < count; i++) {
    if (currentIndex < highlightsData.length) {
      const highlight = highlightsData[currentIndex];
      const highlightDiv = document.createElement('div');
      highlightDiv.classList.add('hightlight');

      highlightDiv.innerHTML = `
        <img src="${highlight.imgSrc}" alt="${highlight.title}" loading="lazy"/>
        <h4>${highlight.title}</h4>
        <p>${highlight.description}</p>
      `;

      highlightsContainer.appendChild(highlightDiv);
      currentIndex++;
    }
  }
}

function loadMoreHighlights() {
  const screenWidth = window.innerWidth;
  const columns = screenWidth >= 1024 ? 3 : screenWidth >= 480 ? 2 : 1;

  let index = currentIndex;
  while (true) {
    if (screenWidth >= 1024 && (currentIndex) % 3 !== 0) {
      currentIndex++;
    } else if (screenWidth >= 480 && (currentIndex) % 2 !== 0) {
      currentIndex++;
    } else {
      break;
    }
  }

  if(index < currentIndex) {
    for (let i = index; i < currentIndex; i++) {
      const highlight = highlightsData[i];
        const highlightDiv = document.createElement('div');
        highlightDiv.classList.add('hightlight');
  
        highlightDiv.innerHTML = `
          <img src="${highlight.imgSrc}" alt="${highlight.title}" loading="lazy"/>
          <h4>${highlight.title}</h4>
          <p>${highlight.description}</p>
        `;
  
        highlightsContainer.appendChild(highlightDiv);
    }
  } else {
    loadHighlights(columns);
  }

  if (currentIndex >= highlightsData.length) {
    overMessage.style.display = 'block';
  } else {
    overMessage.style.display = 'none';
  }
}

// Initial load
loadMoreHighlights();

// initiatives

const initiativesContainer = document.querySelector('.initiatives');
const overMessage2 = document.querySelector('.over-message2');
let currentIndex2 = 0;

function loadInitiatives(count) {
  for (let i = 0; i < count; i++) {
    if (currentIndex2 < initiativesData.length) {
      const initiative = initiativesData[currentIndex2];
      const initiativeDiv = document.createElement('div');
      initiativeDiv.classList.add('initiative');

      initiativeDiv.innerHTML = `
        <img src="${initiative.imgSrc}" alt="${initiative.title}" loading="lazy"/>
        <h4>${initiative.title}</h4>
        <p>${initiative.description}</p>
      `;

      initiativesContainer.appendChild(initiativeDiv);
      currentIndex2++;
    }
  }
}

function loadMoreInitiatives() {
  const screenWidth = window.innerWidth;
  const columns = screenWidth >= 1024 ? 3 : screenWidth >= 480 ? 2 : 1;

  let index = currentIndex2;
  while (true) {
    if (screenWidth >= 1024 && (currentIndex2) % 3 !== 0) {
      currentIndex2++;
    } else if (screenWidth >= 480 && (currentIndex2) % 2 !== 0) {
      currentIndex2++;
    } else {
      break;
    }
  }

  if(index < currentIndex2) {
    for (let i = index; i < currentIndex2; i++) {
      const initiative = initiativesData[i];
        const initiativeDiv = document.createElement('div');
        initiativeDiv.classList.add('initiative');
  
        initiativeDiv.innerHTML = `
          <img src="${initiative.imgSrc}" alt="${initiative.title}" loading="lazy"/>
          <h4>${initiative.title}</h4>
          <p>${initiative.description}</p>
        `;
  
        initiativesContainer.appendChild(initiativeDiv);
    }
  } else {
    loadInitiatives(columns);
  }

  if (currentIndex2 >= initiativesData.length) {
    overMessage2.style.display = 'block';
  } else {
    overMessage2.style.display = 'none';
  }
}

// Initial load
loadMoreInitiatives();