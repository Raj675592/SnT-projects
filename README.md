# Summer Projects @ IIT Kanpur - SnT Council

A modern, interactive React web app to explore, search, and filter summer projects offered by the Science and Technology (SnT) Council at IIT Kanpur. The portal showcases club activities, featured projects, and provides a demo login modal for students, mentors, and admins.

## Features

- **Beautiful, responsive UI** with modern gradients and animations
- **Dynamic club and project listing** with search and filter functionality
- **AOS-powered scroll animations**
- **Demo login modal** for different user roles
- **Fully componentized and ready for extension**

## Demo

![screenshot](screenshot.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
4. **Open in your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── App.js           # Main React component
├── style.css        # Main stylesheet
├── README.md        # This file
├── package.json     # Project dependencies and scripts
└── ...
```

## Dependencies
- [React](https://reactjs.org/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

## Customization
- To add or edit clubs/projects, modify the `clubsData` and `projectsData` arrays in `App.js`.
- To connect to a backend or real authentication, replace the demo login logic with your API calls.
- For further customization, split sections into separate components.

## Credits
- UI inspired by modern university and tech council portals
- Animations by [AOS](https://michalsnik.github.io/aos/)

## License

This project is for educational/demo purposes. Please credit IIT Kanpur SnT Council if you use or adapt this template.
