# Sri Venkateswara Rentals

A modern, high-performance, and fully responsive property landing page built to showcase premium and affordable **2BHK rental homes** located in Cumbum, Markapuram District, Andhra Pradesh.

This website is crafted using **HTML5, CSS3, Tailwind CSS (via Play CDN), and Vanilla JavaScript**. It features a premium user interface with smooth micro-animations, glassmorphic components, dark mode support, and an interactive client-side rental management utility suite.

---

## 🌟 Key Features

- **Direct Owner Booking:** Zero brokerage, direct contact via phone and WhatsApp links with automated custom messages.
- **Detailed Specifications:** Highlights key features of the properties, including a 1150 sqft layout, 2 bedrooms with 2 attached bathrooms, spacious balconies, and semi-furnished specifications.
- **Premium Amenities Showcase:** Easy-to-read grids covering standard utilities like 24/7 dedicated water supply, covered car & bike parking, separate electricity meters, and local public transport proximity.
- **Dark Mode & Light Mode:** Fully integrated theme switcher with automated system preferences detection and `localStorage` state persistence.
- **Interactive Lightbox Photo Gallery:** High-resolution image viewport with custom keyboard controls (Arrow keys for navigation, Escape to close) and click-to-zoom capabilities.
- **Client-Side Review System:** Dynamic review posting with a interactive 5-star rating selector, name inputs, and tenant-status classification. Reviews are persisted across sessions in `localStorage` and initialized with seed data.
- **Interactive Contact Form:** Secure contact form with local input validation, regex phone checks, and custom animated status toast notifications.
- **Premium UI/UX Touches:** 
  - Glassmorphic header and cards (`glass-nav`, `glass-card`).
  - Subtle entrance animations (`animate-fade-in-up`).
  - Pulse ring animations for call-to-actions (`pulse-whatsapp`, `pulse-call`).
  - Hover zoom transitions on property gallery cards.
  - Dynamic scroll state changes on the navigation header.

---

## 📁 Project Structure

```text
Sri Venkateswara rentals/
├── index.html       # Primary webpage layout with semantic HTML5 elements & Tailwind CDN configuration
├── app.js           # Core client-side JavaScript logic (dark mode, gallery lightbox, review storage, forms)
├── styles.css       # Custom styles, transitions, webkit scrollbars, and keyframe animations
└── images/          # Assets and images used throughout the site
    ├── logo.jpg                 # Brand identity logo
    ├── building_exterior_1.jpg  # Main property facade (front view)
    └── building_exterior_2.jpg  # Side perspective showing elevation and balconies
```

---

## 🚀 How to Run Locally

Since this is a static frontend application, there are no build steps or backend servers required. You can run the website locally using any of the following methods:

### Method 1: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **"Go Live"** button in the bottom status bar, or right-click `index.html` and select **"Open with Live Server"**.

### Method 2: Python HTTP Server
If you have Python installed, run one of the following commands in your terminal inside the project directory:

*For Python 3:*
```bash
python -m http.server 8000
```
*For Python 2:*
```bash
python -m SimpleHTTPServer 8000
```
Then, open your web browser and navigate to `http://localhost:8000`.

### Method 3: Node.js `http-server`
If you have Node.js and npm installed:
```bash
npx http-server -p 8000
```
Then, open your web browser and navigate to `http://localhost:8000`.

### Method 4: Double Click
You can also directly double-click the `index.html` file to open it in any web browser, though features relying on browser routing or certain media modules work best when served through a local HTTP context.

---

## 🎨 Technology & Libraries Used

1. **Core markup:** HTML5 (semantic elements for SEO optimization).
2. **Styling:** CSS3 variables, transitions, and customized scrollbars.
3. **Utility CSS Framework:** [Tailwind CSS](https://tailwindcss.com) (injected via CDN configuration with custom extensions in `index.html`).
4. **Icons:** [Font Awesome CDN v6.4.0](https://fontawesome.com/) for modern UI iconography.
5. **Typography:** [Google Fonts](https://fonts.google.com/) - `Poppins` (for headlines) and `Inter` (for body copy).
6. **Interactions:** Vanilla ES6+ JavaScript.

---

## 🎯 SEO & Metadata Setup

To maximize search visibility and social media integrations, the following optimizations have been configured inside the `<head>` of `index.html`:
- **Meta description:** Optimized copy outlining details of the 2BHK rental units in Cumbum, targeting local search terms.
- **Keywords:** Tailored terms for local property seekers (e.g. "2BHK rent Cumbum", "Sri Venkateswara Rentals").
- **Open Graph Protocol:** Configuration for Facebook, WhatsApp, and LinkedIn rich media card layouts including target title, description, and link tags.
- **Favicon/Logo support:** Integrated logos and fallback structures.

---

## 📄 License & Contact

This project is developed for **Sri Venkateswara Rentals**.

For any rental inquiries or physical site visits:
- **Owner Contact Number:** +91 96187 69101
- **WhatsApp:** Chat at [WhatsApp API](https://wa.me/919618769101)
- **Email:** reddysivaacoy541@gmail.com
- **Location:** Sri Venkateswara Rentals, Kandulapuram Road, Cumbum, Markapuram District, Andhra Pradesh - 523333.
