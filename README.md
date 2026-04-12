# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and elegant design with dark theme
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Vite bundler
- 🎨 Beautiful animations and transitions
- 🎯 Smooth scrolling navigation
- 💬 Contact form with validation
- 🔗 Social media links
- 📊 Projects showcase with filterable categories
- 📈 Skills section with proficiency levels

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view it.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Navigation bar
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Projects.jsx     # Projects showcase
│   ├── Skills.jsx       # Skills section
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`:
   - Change name and title
   - Update description

2. **About Section** - Edit `src/components/About.jsx`:
   - Add your photo (replace emoji)
   - Update bio and highlights

3. **Projects** - Edit `src/components/Projects.jsx`:
   - Add your projects
   - Update project details, images, and links

4. **Skills** - Edit `src/components/Skills.jsx`:
   - Update skill categories and levels
   - Add your experience

5. **Contact** - Edit `src/components/Contact.jsx`:
   - Update email address
   - Update location
   - Update phone number
   - Add social media links

6. **Colors & Theme** - Edit `tailwind.config.js`:
   - Customize color scheme
   - Modify fonts
   - Update animations

### Add Your Photo

1. Place your photo in `src/assets/images/`
2. Update the About section to import and display your image

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your repository
4. Netlify will automatically build and deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- Fully optimized for SEO
- Fast loading time with Vite

## Tips for Customization

1. **Colors**: Update the gradient colors throughout the site by modifying Tailwind classes
2. **Fonts**: Google Fonts are already imported in `index.css`
3. **Animations**: Customize animation speed and effects in `index.css` and `tailwind.config.js`
4. **Content**: Keep text concise and impactful
5. **Images**: Use high-quality images optimized for web

## Contributing

Feel free to fork and customize this template for your own portfolio!

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository.

---

Made with ❤️ using React, Vite & Tailwind CSS