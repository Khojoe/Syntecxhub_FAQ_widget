/* ─── FAQ DATA ─── */
const faqs = [
  {
    question: "What is an FAQ accordion widget?",
    answer:
      "An FAQ accordion widget is an interactive UI component that displays a list of questions. Each question can be clicked to reveal or hide its answer, keeping the interface clean and easy to navigate.",
  },
  {
    question: "How does the open/close toggle work?",
    answer:
      "Each question button listens for a click event. When clicked, JavaScript checks if the item is already open. If it is, it closes it. If not, it closes any currently open item, then opens the clicked one by expanding its answer panel.",
  },
  {
    question: "What makes the animation smooth?",
    answer:
      "The smooth slide animation is achieved using CSS transitions on the `max-height` property. When an answer opens, its `max-height` is set to its full scroll height. When it closes, `max-height` returns to 0, and the CSS transition handles the animation.",
  },
  {
    question: "Is this widget mobile responsive?",
    answer:
      "Yes. The layout uses a single-column design with fluid widths and CSS media queries to adjust font sizes and padding for smaller screens, ensuring a great experience on all devices.",
  },
  {
    question: "Can only one answer be open at a time?",
    answer:
      "Yes — the accordion follows the single-open pattern. When a new question is clicked, any previously open answer is automatically closed before the new one opens, keeping the interface focused and uncluttered.",
  },
  {
    question: "How do I add or edit questions?",
    answer:
      "Simply update the `faqs` array at the top of `faq-script.js`. Each entry has a `question` and `answer` field. Save the file and reload the page — the accordion renders from the data automatically.",
  },
  {
    question: "Is the widget keyboard accessible?",
    answer:
      "Yes. Each question is a native `<button>` element, so it receives focus via the Tab key and can be toggled with Enter or Space, making it accessible without a mouse.",
  },
  {
    question: "How do I change the colors?",
    answer:
      "All colors are controlled by CSS custom properties (variables) in the `:root` block at the top of `faq-style.css`. Change `--accent`, `--bg`, `--surface`, and others to match your brand instantly.",
  },
];

/* ─── STATE ─── */
let openIndex = null;

/* ─── DOM REF ─── */
const faqList = document.getElementById("faqList");

/* ─── BUILD ACCORDION ─── */
function buildAccordion() {
  faqs.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.setAttribute("role", "listitem");

    item.innerHTML = `
      <button
        class="faq-btn"
        aria-expanded="false"
        aria-controls="answer-${index}"
        id="btn-${index}"
      >
        <span class="faq-btn-text">${faq.question}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5"  y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>
      <div
        class="faq-answer"
        id="answer-${index}"
        role="region"
        aria-labelledby="btn-${index}"
      >
        <div class="faq-answer-body">${faq.answer}</div>
      </div>
    `;

    /* ─── CLICK TOGGLE ─── */
    item.querySelector(".faq-btn").addEventListener("click", () => {
      toggle(index);
    });

    faqList.appendChild(item);
  });
}

/* ─── TOGGLE OPEN / CLOSE ─── */
function toggle(index) {
  const items = document.querySelectorAll(".faq-item");

  /* Close currently open item */
  if (openIndex !== null && openIndex !== index) {
    const prev = items[openIndex];
    prev.classList.remove("open");
    prev.querySelector(".faq-answer").style.maxHeight = "0";
    prev.querySelector(".faq-btn").setAttribute("aria-expanded", "false");
  }

  const current = items[index];
  const answer = current.querySelector(".faq-answer");
  const btn = current.querySelector(".faq-btn");
  const isOpen = current.classList.contains("open");

  if (isOpen) {
    /* Close */
    current.classList.remove("open");
    answer.style.maxHeight = "0";
    btn.setAttribute("aria-expanded", "false");
    openIndex = null;
  } else {
    /* Open */
    current.classList.add("open");
    answer.style.maxHeight = answer.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    openIndex = index;
  }
}

/* ─── FOOTER YEAR ─── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ─── INIT ─── */
buildAccordion();
