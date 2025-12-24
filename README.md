# Animated Tab Bar – Next.js
A modern **animated bottom tab bar** built with **Next.js (App Router)**, **Framer Motion**, and **React Icons**. The tab bar includes a smooth animated wave indicator, a floating active icon, and route-aware navigation.
## ✨ Features
- ⚡ Smooth animations using **Framer Motion**
- 🧭 Route-aware active tab with **usePathname**
- 🌊 Animated wave indicator following the active tab
- 🔵 Floating active icon with animated blue circle
- 📱 Mobile-friendly bottom navigation
- 🧩 Clean and reusable components
## 🛠️ Tech Stack
- **Next.js 13+ (App Router)**
- **React**
- **Framer Motion**
- **Tailwind CSS**
- **React Icons**
## 📂 Project Structure
\`\`\`
components/

├── Navbar.jsx

├── NavbarWrapper.jsx

app/

├── home/

├── agenda/

├── organizers/

├── profile/
\`\`\`
## 🚀 Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/Rayane-Bn/animated-navbar-nextjs.git
cd animated-navbar-nextjs
npm install
npm run dev
```
2. Open in your browser: [http://localhost:3000](http://localhost:3000)
## 🧠 How It Works
- The active tab is determined using \`usePathname()\`
- Each tab updates the animated wave position dynamically
- The active icon animates upward with a blue circular background
- The navbar is conditionally rendered using \`NavbarWrapper\`
## 📌 Routes Used
- /home
- /organizers
- /agenda
- /profile
You can easily add more tabs by editing the \`navItems\` array.
## 🎨 Customization
- Change wave size via WAVE_WIDTH
- Adjust animation stiffness & damping in Framer Motion transitions
- Replace icons from react-icons
- Modify colors using Tailwind classes
## 📸 Preview
Add a GIF or screenshot here to showcase the animation.
## 📄 License
This project is open source and available under the **MIT License**.
Made with ❤️ by **Rayane**
