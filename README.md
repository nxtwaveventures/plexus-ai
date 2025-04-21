# Plexus LifeX Pitch Deck

A beautiful, responsive React-based presentation website for Plexus LifeX, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 12 full-screen slides with smooth transitions
- Keyboard navigation (arrow keys)
- Touch-friendly navigation buttons
- PDF export functionality
- Responsive design
- Beautiful animations and transitions
- Modern UI with ShadCN components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN UI Components
- html2pdf.js for PDF export

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   └── button.tsx
│   └── pdf-export.tsx
└── lib/
    └── utils.ts
```

## Customization

- Edit the slides content in `src/app/page.tsx`
- Modify the theme colors in `src/app/globals.css`
- Adjust animations in the motion components
- Update the PDF export settings in `src/components/pdf-export.tsx`

## License

MIT 