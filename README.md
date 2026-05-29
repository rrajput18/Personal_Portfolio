# Rakshit Rajput — Personal Portfolio

A premium, dark-theme, responsive single-column portfolio website built using modern, lightweight vanilla web technologies (HTML5, CSS3 variables, and vanilla ES6 JavaScript). It is styled with an Amber Gold accent theme, featuring smooth animations and high-performance interactive elements.

## 🌟 Key Features

* **Flowing SVG Beams background**: An Aceternity UI-inspired animated background utilizing CSS `stroke-dashoffset` keyframes to slide illuminated lines along custom curved SVG paths, running entirely on the GPU.
* **Interactive Cursor Aura**: A mouse-trailing spotlight glow effect that smoothly tracks the user's cursor across the grid background.
* **Education Roadmap**: A dedicated vertical timeline roadmap representing academic history (High School to Diploma and BTech IT) using custom circular icon nodes and visual line connectors.
* **Professional Experience Grid**: Separated work traineeships and published IoT research papers displayed as cards with certifications and extracurricular achievements immediately below.
* **Theme-Adaptive Favicon**: A responsive `favicon.svg` that uses internal CSS media queries (`@media (prefers-color-scheme: dark/light)`) to automatically adjust its color strokes to match the user's OS color scheme.
* **Enquiry Form integration**: An AJAX-powered contact form that hooks into FormSubmit's endpoint, displaying custom high-contrast green success ("Message Sent!") and red error states.
* **Fluid Responsiveness**: Standardized layouts that scale cleanly down to mobile viewports using mobile-first grid patterns and a collapsed dropdown navigation menu.

---

## 📁 File Structure

```text
├── index.html     # HTML5 structure, navigation system, and sections
├── styles.css     # Premium design system, variables, layouts, and animations
├── script.js      # Typewriter, scroll spy, cursor aura, and form handlers
├── favicon.svg    # Dynamic theme-shifting SVG favicon
├── profile.jpg    # Profile avatar image
└── .gitignore     # Git ignore configuration for development system files
```

---

## 🚀 Running Locally

You can launch and preview the website instantly using any simple static file server.

### Option 1: VS Code Live Server
1. Open this directory in VS Code.
2. Click **Go Live** on the bottom right toolbar (or right-click `index.html` and select **Open with Live Server**).

### Option 2: NodeJS http-server
Run the following commands in your terminal:
```bash
# Install the server globally
npm install -g http-server

# Start the server (disabling cache for development)
http-server -c-1 -p 3000
```
Open your browser and navigate to `http://localhost:3000`.

---

## 📦 Deploying to the Web

This portfolio is static, making it extremely easy and free to host:

### GitHub Pages (Recommended)
1. Push this repository to GitHub.
2. Go to the repository **Settings** tab.
3. Scroll down to **Pages** in the sidebar.
4. Set the Source to **Deploy from a branch**, select `main` (or `master`), and click **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repository-name>/` in a few minutes.

### Vercel / Netlify
1. Log in to Vercel or Netlify.
2. Link your GitHub account and import this repository.
3. Leave all build settings blank (as it is static) and click **Deploy**.
