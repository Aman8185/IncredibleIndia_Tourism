# Incredible India - Tourism Website

A world-class, modern, and visually stunning tourism website showcasing India's culture, nature, history, food, festivals, adventure, and hidden gems.

## Features

### Design & UI
- **Ultra-modern UI** with clean, minimal layout
- **Smooth animations**: Parallax scrolling, fade-ins, scroll animations, hover effects
- **Premium visual storytelling** with high-quality images
- **Vibrant color palette**: Saffron, deep blue, emerald green, royal gold
- **Fully responsive** design optimized for all devices

### Pages

1. **Home Page** (`index.html`)
   - Cinematic hero section with tagline
   - Top destinations showcase
   - Culture & heritage section
   - Popular experiences
   - Travel packages
   - Testimonials

2. **Destinations Page** (`destinations.html`)
   - Animated destination cards
   - Category filters (Nature, Beaches, Himalayas, Deserts, Heritage, Spiritual)
   - Rich media detail pages

3. **Experiences Page** (`experiences.html`)
   - Food tours
   - Festivals & celebrations
   - Wildlife safaris
   - Spiritual retreats
   - Adventure sports

4. **Plan Your Trip** (`plan-trip.html`)
   - Interactive itinerary planner
   - Filters: Duration, Budget, Season, Region
   - Ready-made itineraries for popular destinations

5. **About India** (`about.html`)
   - Storytelling with smooth transitions
   - Ancient history → Traditions → Modern India
   - Cultural highlights
   - Quick facts

6. **Contact** (`contact.html`)
   - Modern contact form with floating labels
   - WhatsApp integration
   - FAQs with accordion animation

### Components

- **Sticky navbar** with transparent → solid transition on scroll
- **Animated destination cards** with hover effects
- **Parallax scrolling** sections
- **Floating CTA button**
- **Smooth page transitions**
- **Scroll progress indicator**

## File Structure

```
Tourism/
├── index.html              # Home page
├── destinations.html       # Destinations page
├── experiences.html        # Experiences page
├── plan-trip.html          # Trip planner page
├── about.html              # About India page
├── contact.html            # Contact page
├── css/
│   ├── main.css           # Main stylesheet
│   └── animations.css     # Animation styles
├── js/
│   ├── main.js            # Main JavaScript
│   ├── animations.js      # Animation functions
│   ├── destinations.js    # Destinations filter
│   ├── planner.js         # Trip planner logic
│   └── contact.js         # Contact form & FAQ
└── README.md              # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in a web browser
2. **No build process required**: The website uses vanilla HTML, CSS, and JavaScript
3. **Local development**: Use a local server for best experience (optional)

### Using a Local Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization

### Colors
Edit the CSS variables in `css/main.css`:
```css
:root {
    --saffron: #FF9933;
    --deep-blue: #1E3A8A;
    --emerald-green: #059669;
    --royal-gold: #D4AF37;
}
```

### Images
Replace placeholder images with your own high-quality images. Update image URLs in HTML files.

### Content
All content is in HTML files. Edit directly to update text, destinations, experiences, etc.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Animations
- Scroll-triggered animations (AOS - Animate On Scroll)
- Parallax effects
- Smooth transitions
- Hover effects
- Fade-in animations

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly navigation
- Optimized images

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

## Notes

- Images are currently using Unsplash placeholders. Replace with actual destination images.
- WhatsApp number in contact page is a placeholder. Update with your actual number.
- Email addresses are placeholders. Update with your contact information.
- Form submissions are currently simulated. Integrate with your backend for actual functionality.

## License

This project is created for tourism promotion purposes.

---

**Built with ❤️ for Incredible India**


