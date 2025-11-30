// Trip Planner Functionality

const itineraryTemplates = {
    'goa': {
        title: 'Goa - Beach Paradise',
        duration: '5 Days / 4 Nights',
        highlights: ['North Goa beaches', 'Old Goa heritage', 'Water sports', 'Nightlife'],
        price: 'From ₹25,000'
    },
    'kerala': {
        title: 'Kerala - Backwaters',
        duration: '6 Days / 5 Nights',
        highlights: ['Houseboat stay', 'Ayurvedic spa', 'Tea plantations', 'Beach relaxation'],
        price: 'From ₹35,000'
    },
    'rajasthan': {
        title: 'Rajasthan - Royal Heritage',
        duration: '7 Days / 6 Nights',
        highlights: ['Jaipur - Udaipur - Jodhpur', 'Palaces & forts', 'Desert safari', 'Cultural shows'],
        price: 'From ₹45,000'
    },
    'ladakh': {
        title: 'Ladakh - High Altitude Adventure',
        duration: '8 Days / 7 Nights',
        highlights: ['Leh & Nubra Valley', 'Pangong Lake', 'Buddhist monasteries', 'Adventure activities'],
        price: 'From ₹55,000'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tripPlannerForm');
    const resultsDiv = document.getElementById('plannerResults');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const duration = formData.get('duration');
        const budget = formData.get('budget');
        const season = formData.get('season');
        const region = formData.get('region');
        const styles = formData.getAll('style');

        // Generate itinerary based on selections
        const itinerary = generateItinerary(duration, budget, season, region, styles);
        displayItinerary(itinerary);
    });
});

function generateItinerary(duration, budget, season, region, styles) {
    // Simple logic to generate itinerary based on selections
    let destination = 'Goa';
    let title = 'Goa - Beach Paradise';
    let days = 5;
    
    // Region-based destination selection
    if (region === 'north') {
        destination = 'Rajasthan';
        title = 'Rajasthan - Royal Heritage';
        days = 7;
    } else if (region === 'south') {
        destination = 'Kerala';
        title = 'Kerala - Backwaters';
        days = 6;
    } else if (region === 'northeast') {
        destination = 'Meghalaya';
        title = 'North East - Nature Paradise';
        days = 8;
    } else if (styles.includes('adventure')) {
        destination = 'Ladakh';
        title = 'Ladakh - High Altitude Adventure';
        days = 8;
    }

    // Duration adjustment
    if (duration === '3-5') days = 5;
    else if (duration === '6-8') days = 7;
    else if (duration === '9-12') days = 10;
    else if (duration === '13+') days = 14;

    const highlights = [];
    if (styles.includes('culture')) highlights.push('Heritage sites');
    if (styles.includes('adventure')) highlights.push('Adventure activities');
    if (styles.includes('relaxation')) highlights.push('Relaxation & spa');
    if (styles.includes('spiritual')) highlights.push('Spiritual experiences');
    if (styles.includes('wildlife')) highlights.push('Wildlife safaris');
    if (styles.includes('food')) highlights.push('Culinary tours');

    return {
        title,
        destination,
        duration: `${days} Days / ${days - 1} Nights`,
        highlights: highlights.length > 0 ? highlights : ['Cultural sites', 'Local experiences', 'Scenic beauty'],
        budget: budget,
        season: season,
        price: calculatePrice(budget, days)
    };
}

function calculatePrice(budget, days) {
    const basePrices = {
        'budget': 3000,
        'mid': 7000,
        'premium': 12000,
        'luxury': 20000
    };
    
    const basePrice = basePrices[budget] || 5000;
    const totalPrice = basePrice * days;
    
    return `From ₹${totalPrice.toLocaleString('en-IN')}`;
}

function displayItinerary(itinerary) {
    const resultsDiv = document.getElementById('plannerResults');
    
    resultsDiv.innerHTML = `
        <div class="itinerary-result">
            <div class="result-header">
                <h3>${itinerary.title}</h3>
                <p class="result-duration">${itinerary.duration}</p>
            </div>
            <div class="result-details">
                <div class="result-section">
                    <h4>Highlights</h4>
                    <ul class="result-highlights">
                        ${itinerary.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
                <div class="result-section">
                    <h4>Trip Details</h4>
                    <p><strong>Destination:</strong> ${itinerary.destination}</p>
                    <p><strong>Best Season:</strong> ${getSeasonName(itinerary.season)}</p>
                    <p><strong>Budget Range:</strong> ${getBudgetRange(itinerary.budget)}</p>
                </div>
                <div class="result-price">${itinerary.price}</div>
                <a href="contact.html" class="btn-primary">Book This Trip</a>
            </div>
        </div>
    `;
    
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getSeasonName(season) {
    const seasons = {
        'winter': 'Winter (Oct-Mar)',
        'summer': 'Summer (Apr-Jun)',
        'monsoon': 'Monsoon (Jul-Sep)'
    };
    return seasons[season] || 'All year';
}

function getBudgetRange(budget) {
    const ranges = {
        'budget': '₹20,000 - ₹50,000',
        'mid': '₹50,000 - ₹1,00,000',
        'premium': '₹1,00,000 - ₹2,00,000',
        'luxury': '₹2,00,000+'
    };
    return ranges[budget] || 'Custom';
}


