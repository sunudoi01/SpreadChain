# BlockchainAI - Modern Consulting Website

A modern, professional website for a Blockchain & AI consulting company built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **Modular Components**: Well-organized, reusable React components
- **TypeScript**: Full type safety for better development experience
- **Framer Motion**: Beautiful animations and micro-interactions

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Deployment to Hostinger

### Method 1: Build and Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your Hostinger hosting account's public_html directory

### Method 2: Git Integration (if supported)

1. Connect your Hostinger account to your Git repository
2. Set up automatic deployment on push to main branch

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Partners.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── CaseStudies.tsx
│   ├── Blog.tsx
│   ├── ContactBanner.tsx
│   └── Footer.tsx
├── data/               # Static data and content
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary colors to match your brand.

### Content

Update the content in `src/data/index.ts` to reflect your company's information, services, case studies, and blog posts.

### Images

Replace the placeholder images from Pexels with your own images. Make sure to update the image URLs in the data files.

### Styling

Customize the styling by modifying the Tailwind classes in the components or adding custom CSS in `src/index.css`.

## Performance Optimizations

- Lazy loading of images
- Optimized bundle size with Vite
- Minimal dependencies
- Efficient animations with Framer Motion
- Responsive images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.