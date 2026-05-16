# Syntecxhub_FAQ_widget

A simple system of an FAQ

# 📋 FAQ Accordion Widget

**Project 3 — Internship Submission**
A clean, professional FAQ accordion widget built with modular HTML, CSS, and JavaScript.

---

## 📌 Overview

This is an interactive FAQ accordion widget that displays a list of frequently asked questions with collapsible answers. Built with **pure HTML, CSS, and vanilla JavaScript** — no frameworks or libraries required. Each question toggles open and closed smoothly using CSS transitions driven by JavaScript.

---

## 🚀 Live Demo

> Open `index.html` in any modern browser to view the widget locally.

---

## 📁 Project Structure

```
Syntecxhub_FAQ_widget/
│
├── index.html          # Semantic HTML structure
├── styles.css     # All styles, transitions & responsive rules
└── script.js     # Accordion logic, toggle state & data
```

---

## ✅ Features

- **Accordion toggle** — click any question to reveal or hide its answer
- **Single-open pattern** — only one answer is open at a time; opening a new one closes the previous
- **Smooth CSS transitions** — `max-height` animation for a fluid open/close effect
- **Keyboard accessible** — fully navigable via Tab, Enter, and Space keys
- **ARIA attributes** — `aria-expanded` and `aria-controls` for screen reader support
- **Mobile responsive** — fluid layout with media queries for all screen sizes
- **Data-driven rendering** — questions are stored in a JS array and rendered dynamically
- **Dynamic footer year** — auto-updates via `new Date().getFullYear()`

---

## 🎨 Design Choices

| Property      | Value                           |
| ------------- | ------------------------------- |
| Theme         | Light & minimal                 |
| Background    | Warm off-white (`#f5f5f0`)      |
| Accent Color  | Forest green (`#2d6a4f`)        |
| Display Font  | Playfair Display (Google Fonts) |
| Body Font     | DM Sans (Google Fonts)          |
| Layout        | Single-column, centered         |
| Border Radius | 10px (cards)                    |

---

## 🔧 Technologies Used

- **HTML5** — semantic structure with accessibility attributes
- **CSS3** — custom properties, `max-height` transitions, Flexbox, media queries
- **Vanilla JavaScript** — DOM manipulation, event listeners, accordion state management

---

## 📱 Responsive Behaviour

| Screen           | Behaviour                              |
| ---------------- | -------------------------------------- |
| Desktop (>600px) | Comfortable padding, full font sizes   |
| Mobile (≤600px)  | Reduced padding, slightly smaller text |

---

## ⚙️ How the Accordion Works

### JavaScript Toggle Logic

```javascript
function toggle(index) {
  // 1. Close the currently open item (if any)
  if (openIndex !== null && openIndex !== index) {
    closeItem(items[openIndex]);
  }

  // 2. Toggle the clicked item open or closed
  const isOpen = current.classList.contains("open");
  if (isOpen) {
    closeItem(current);
    openIndex = null;
  } else {
    openItem(current);
    openIndex = index;
  }
}
```

### CSS Smooth Animation

```css
/* Closed state */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

/* Open state — max-height set dynamically via JS scrollHeight */
```

---

## 🛠️ How to Run

1. Download or clone the project folder
2. Make sure all 3 files are in the **same directory**
3. Open `index.html` in any modern browser
4. No build tools or installations required

---

## 📝 Customization Guide

### Adding or editing questions

Update the `faqs` array in `faq-script.js`:

```javascript
const faqs = [
  {
    question: "Your question here?",
    answer: "Your answer here.",
  },
  // add as many as you need...
];
```

### Changing the color scheme

Edit the CSS variables in the `:root` block in `faq-style.css`:

```css
:root {
  --accent: #2d6a4f; /* Main accent color */
  --bg: #f5f5f0; /* Page background   */
  --surface: #ffffff; /* Card background   */
  --text: #1a1a1a; /* Primary text      */
  --muted: #888880; /* Secondary text    */
}
```

---

## ♿ Accessibility

- All question toggles are native `<button>` elements — keyboard focusable by default
- `aria-expanded="true/false"` reflects the open/close state for screen readers
- `aria-controls` links each button to its answer panel
- `role="region"` and `aria-labelledby` on each answer panel

---

## 👤 Author

**Immanuel Oheneba Debe**
Aspiring Frontend Developer
📧 immanueldebe@gmail.com
🔗 [GitHub](https://github.com/Khojoe) · [LinkedIn](https://www.linkedin.com/in/immanuel-oheneba-debe-352ab0367)

---

## 📄 License

MIT License
