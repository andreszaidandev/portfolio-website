# 🚀 Andres Zaidan's Personal Portfolio Website

Welcome to the repository for Andres Zaidan's modern and interactive personal portfolio website! This project serves as a comprehensive showcase of my skills, projects, education, and professional journey as a software engineer. Built with cutting-edge web technologies, it offers a dynamic and engaging experience for visitors.
<img width="3840" height="2160" alt="Screenshot 2026-03-10 151935" src="https://github.com/user-attachments/assets/6f6f448c-b1d5-4161-a614-e9a1335374c8" />

## Live Website
[View the Website](https://andreszaidan.com)

## ✨ Features

This portfolio website is designed to provide a rich and informative user experience, highlighting key aspects of my work:

*   **Interactive Hero Section**: An engaging introduction with dynamic visual elements, potentially featuring a shader animation.
*   **Dynamic Project Showcase**: Dedicated sections for showcasing various projects with descriptive details and accompanying images.
*   **Comprehensive Education Overview**: A clear presentation of academic background and qualifications.
*   **Integrated Resume**: Easily view and download my professional resume (PDF format).
*   **Rich Interactive Elements**: Leverages a variety of advanced UI components and widgets for an engaging experience.
*   **Responsive Design**: Optimized for seamless viewing across a variety of devices and screen sizes.
*   **Clean & Modern Aesthetic**: A user-friendly interface designed for clarity and impact.

## 🧩 Interactive Components & Widgets

This portfolio deeply integrates a range of custom and advanced UI components to create a dynamic and engaging user experience. These elements are designed to not only present information but also to interact with the user and the overall site environment.

*   **Animated Projects**: Displays Projects and key experiences with smooth, engaging animations.
*   **Container Scroll Animations**: Implements visually appealing animations that trigger as users scroll through different sections, enhancing content presentation and flow.
*   **Custom Shader Effects**: Incorporates unique graphical shaders to introduce sophisticated visual enhancements and dynamic backgrounds, contributing to a modern and polished aesthetic.
*   **Modern UI Primitives**: Utilizes robust and accessible components from `shadcn/ui` for foundational UI elements, ensuring consistency and ease of interaction across the site.

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

This project is built using a robust and modern set of technologies:

*   **Frontend Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (inferred from `components.json` and component structure)
*   **Utility Functions**: `clsx`, `tailwind-merge` for efficient class management.
*   **Code Quality**: [ESLint](https://eslint.org/)

## 📂 Project Structure

The repository is organized to ensure clarity and maintainability:

```
portfolio-website/
└── my-app/
    ├── public/                           # Static assets available at the root URL (e.g., favicon, curriculum.png)
    ├── src/
    │   ├── assets/                       # Images, PDFs (resume), and other static content
    │   ├── components/                   # Reusable UI components for different sections
    │   │   ├── ui/                       # Advanced UI components like animated testimonials, scroll animations, shaders
    │   │   └── (other sections like hero, projects, education, resume)
    │   ├── lib/                          # Utility functions (e.g., utils.ts)
    │   ├── App.tsx                       # Main application component
    │   ├── main.tsx                      # Entry point for the React application
    │   └── index.css                     # Global styles
    ├── .gitignore                        # Files and directories to be ignored by Git
    ├── components.json                   # Configuration for shadcn/ui components
    ├── eslint.config.js                  # ESLint configuration
    ├── index.html                        # Main HTML file
    ├── package.json                      # Project dependencies and scripts
    ├── tsconfig.json                     # TypeScript configuration
    └── vite.config.js                    # Vite build configuration
```

## 🚀 Getting Started

Follow these steps to set up and run the portfolio website locally on your machine.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or pnpm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/andreszaidandev/portfolio-website.git
    cd portfolio-website/my-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

## 🖥️ Usage

### Development Server

To start the development server and view the website in your browser:

```bash
npm run dev
# or
pnpm run dev
# or
yarn run dev
```

The application will typically be accessible at `http://localhost:5173`.

### Build for Production

To create an optimized production build of the application:

```bash
npm run build
# or
pnpm run build
# or
yarn run build
```

This will compile the project into the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
pnpm run preview
# or
yarn run preview
```

## 💡 Roadmap & Future Improvements

I'm continuously looking for ways to enhance this portfolio. Here are some potential future improvements:

*   Add more interactive elements and micro-interactions.
*   Implement a light mode toggle for improved accessibility and user preference.
*   Integrate a contact form for direct inquiries.
*   Further optimize performance and SEO.
*   Expand project details with dedicated pages or richer content.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/andreszaidandev/portfolio-website/issues) or open a pull request.

## 📄 License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the [MIT License](https://github.com/andreszaidandev/portfolio-website/blob/main/LICENSE). See the `LICENSE` file for more details.
```
