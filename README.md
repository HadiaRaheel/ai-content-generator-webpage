# AI Content Generator

A responsive AI content generation web page built with Next.js as part of a Frontend Developer Technical Assessment.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript
- **Styling:** CSS Modules + Tailwind CSS
- **Version Control:** GitHub

## Features

- Generate AI images and videos from text prompts
- Light and dark mode support
- Fully responsive across mobile, tablet, desktop, and large screens
- Slide-in drawer navigation for mobile and tablet
- Generation history bar
- Dummy API that returns mock images and videos

## Project Structure
ai-content-generator/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js        # Dummy API — returns mock images or videos
│   ├── globals.css             # CSS variables, theme tokens, global resets
│   ├── layout.js               # Root layout
│   └── page.js                 # Main page — lifted state, layout orchestration
├── components/
│   ├── DrawerNavTabs.jsx       # Mobile/tablet drawer navigation tabs
│   ├── DrawerNavTabs.module.css
│   ├── GalleryGrid.jsx         # Responsive image/video grid
│   ├── GalleryGrid.module.css
│   ├── HistoryBar.jsx          # Scrollable history thumbnail bar
│   ├── HistoryBar.module.css
│   ├── Navbar.jsx              # Top navigation bar
│   ├── Navbar.module.css
│   ├── PromptCard.jsx          # Displays last used prompt
│   ├── PromptCard.module.css
│   ├── Providers.jsx           # Wraps ThemeProvider
│   ├── Sidebar.jsx             # Settings panel with prompt input and controls
│   └── Sidebar.module.css
├── context/
│   └── ThemeContext.jsx        # Dark/light mode context
├── data/
│   └── images.js               # Static fallback image paths
└── public/
├── images/                 # Local model images used in gallery and history
└── videos/                 # Sample video files for video generation mode

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
git clone https://github.com/hadi13-cloud/Responsive-AI-Content-Generation-Web-Page.git
cd ai-content-generator

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open your browser and go to:
http://localhost:3000

## Dummy API

The `/api/generate` endpoint simulates a real AI generation API. It accepts a POST request with a JSON body and returns mock image or video file paths based on the `type` field.

**Request body:**
{
  "prompt": "a red car in the rain",
  "count": 8,
  "type": "Image"
}

**Response:**
{
  "images": ["/images/model3.jpg", "/images/model7.jfif", ...],
  "type": "Image",
  "count": 8
}

Set `type` to `"Video"` to receive video file paths instead.

## Responsiveness

The page is fully responsive and has been tested across different devices:
●	Mobile (320px+)
●	Tablet
●	Desktop

## Dark Mode

Dark mode is supported and persists across page reloads via `localStorage`. Toggle it using the moon/sun icon in the top navigation bar.

## Design Decisions

- **Lifted state in `page.js`:** The Sidebar is rendered twice — once in the desktop layout and once inside the mobile drawer. To keep both instances in sync, all sidebar input state is lifted to `page.js` and passed down as props. This avoids duplicated state and unnecessary re-renders.
- **CSS Modules + Tailwind together:** Custom component styles use CSS Modules for scoping. Layout and spacing in `page.js` use Tailwind utility classes for speed and consistency.
- **Dummy API with simulated delay:** An 800ms `setTimeout` is added to the API route to simulate real network latency, making the loading state meaningful during testing.
- **Semantic HTML:** `<header>`, `<main>`, `<nav>`, `<aside>`, `<section>`, and `<ul>/<li>` are used throughout for accessibility and document structure.