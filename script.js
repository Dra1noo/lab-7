// Mouse Events
const hoverBtn = document.getElementById("hover-btn");
const mouseMsg = document.getElementById("mouse-msg");

hoverBtn.addEventListener("mouseenter", () => {
  mouseMsg.textContent = "Yow, mi feel yuh hoverin'";
});

hoverBtn.addEventListener("mouseleave", () => {
  mouseMsg.textContent = "Yuh gone now? Cool runnings.";
});

// Keyboard Events
const keyInput = document.getElementById("key-input");
const keyMsg = document.getElementById("key-msg");

keyInput.addEventListener("keydown", (e) => {
  keyMsg.textContent = `Last ting yuh press: "${e.key}"`;
});

// Form Submission Events
const form = document.getElementById("cool-form");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Respect! Yuh form deh send proper.";
});

// Focus & Blur
const focusInput = document.getElementById("focus-input");
const focusMsg = document.getElementById("focus-msg");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "Yuh inside the box now, mi boss.";
});

focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "Yuh step outta di box... deep.";
});

// Event Delegation
const container = document.getElementById("btn-container");
const delegationMsg = document.getElementById("delegation-msg");

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    delegationMsg.textContent = `Yuh choose: ${e.target.textContent} – Bless up!`;
  }
});
