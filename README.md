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
ai-content-generator/<br>
├── app/<br>
│   ├── api/<br>
│   │   └── generate/<br>
│   │       └── route.js        # Dummy API — returns mock images or videos<br>
│   ├── globals.css             # CSS variables, theme tokens, global resets<br>
│   ├── layout.js               # Root layout<br>
│   └── page.js                 # Main page — lifted state, layout orchestration<br>
├── components/<br>
│   ├── DrawerNavTabs.jsx       # Mobile/tablet drawer navigation tabs<br>
│   ├── DrawerNavTabs.module.css<br>
│   ├── GalleryGrid.jsx         # Responsive image/video grid<br>
│   ├── GalleryGrid.module.css<br>
│   ├── HistoryBar.jsx          # Scrollable history thumbnail bar<br>
│   ├── HistoryBar.module.css<br>
│   ├── Navbar.jsx              # Top navigation bar<br>
│   ├── Navbar.module.css<br>
│   ├── PromptCard.jsx          # Displays last used prompt<br>
│   ├── PromptCard.module.css<br>
│   ├── Providers.jsx           # Wraps ThemeProvider<br>
│   ├── Sidebar.jsx             # Settings panel with prompt input and controls<br>
│   └── Sidebar.module.css<br>
├── context/<br>
│   └── ThemeContext.jsx        # Dark/light mode context<br>
├── data/<br>
│   └── images.js               # Static fallback image paths<br>
└── public/<br>
├── images/                 # Local model images used in gallery and history<br>
└── videos/                 # Sample video files for video generation mode<br>

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
git clone https://github.com/HadiaRaheel/ai-content-generator-webpage.git<br>
cd ai-content-generator-webpage

2. Install dependencies:<br>
npm install

3. Run the development server:<br>
npm run dev

4. Open your browser and go to:<br>
http://localhost:3000

## Dummy API

The `/api/generate` endpoint simulates a real AI generation API. It accepts a POST request with a JSON body and returns mock image or video file paths based on the `type` field.

**Request body:**<br>
{<br>
  "prompt": "a red car in the rain",<br>
  "count": 8,<br>
  "type": "Image"<br>
}

**Response:**<br>
{<br>
  "images": ["/images/model3.jpg", "/images/model7.jfif", ...],<br>
  "type": "Image",<br>
  "count": 8<br>
}

Set `type` to `"Video"` to receive video file paths instead.

## Responsiveness

The page is fully responsive and has been tested across different devices:
- Mobile (320px+)
- Tablet
- Desktop

## Dark Mode

Dark mode is supported and persists across page reloads via `localStorage`. Toggle it using the moon/sun icon in the top navigation bar.
