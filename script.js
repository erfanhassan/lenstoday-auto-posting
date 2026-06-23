// Dummy data simulating the response from the backend script in Replit
// This is used here purely for frontend demonstration purposes.
const dummyNews = [
    {
        id: 1,
        source: "TechCrunch",
        headline: "AI Models Reach New Milestones in Efficiency",
        snippet: "Researchers have developed a new technique that allows large language models to run with 10x less memory without sacrificing performance.",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
        url: "#"
    },
    {
        id: 2,
        source: "Reuters",
        headline: "Global Markets Rally Amid Positive Economic Data",
        snippet: "Major indices hit all-time highs as inflation cools faster than expected, prompting optimism among investors worldwide.",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
        url: "#"
    },
    {
        id: 3,
        source: "The Verge",
        headline: "Next-Gen Quantum Processors Unveiled",
        snippet: "A leading tech giant just announced a breakthrough in quantum computing that could revolutionize cryptography and material science.",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
        url: "#"
    },
    {
        id: 4,
        source: "BBC News",
        headline: "Historic Climate Accord Reached by 150 Nations",
        snippet: "World leaders have agreed to aggressive new targets to reduce carbon emissions over the next decade in an unprecedented global effort.",
        thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
        url: "#"
    },
    {
        id: 5,
        source: "Wired",
        headline: "The Future of Space Exploration and Lunar Bases",
        snippet: "With the first permanent moon base under construction, experts outline the roadmap for human settlement on other planets.",
        thumbnail: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80",
        url: "#"
    },
    {
        id: 6,
        source: "Bloomberg",
        headline: "Renewable Energy Surpasses Fossil Fuels in Europe",
        snippet: "For the first time in history, European nations generated more electricity from wind and solar than from coal and gas.",
        thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
        url: "#"
    }
];

// In a real scenario, this function would fetch data from the backend
// Example:
// async function fetchNews() {
//     const response = await fetch('https://your-replit-backend.com/api/news');
//     const data = await response.json();
//     return data;
// }

// Function to render news cards to the DOM
function renderNewsFeed(newsData) {
    const grid = document.getElementById('news-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    newsData.forEach(item => {
        const card = document.createElement('a');
        card.href = item.url;
        card.className = 'news-card';
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.headline}" class="news-thumbnail" loading="lazy">
            <div class="news-content">
                <span class="news-source">${item.source}</span>
                <h3 class="news-headline">${item.headline}</h3>
                <p class="news-snippet">${item.snippet}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Modal logic for sleek overlays
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        // Small delay to allow display:block to apply before changing opacity for transition
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        // Match CSS transition duration
        setTimeout(() => {
            modal.style.display = 'none';
        }, 400); 
        document.body.style.overflow = 'auto';
    }
}

// Close modal if clicked outside of content area
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Populate with dummy data for frontend presentation
    renderNewsFeed(dummyNews);
});
