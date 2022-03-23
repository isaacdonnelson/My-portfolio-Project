console.log("index.js connected");
function phraseLoad() {
  const textContainer1 = document.querySelector("#phrase");
  const phrase1 = ["Isaac Donnelson"];
  let charIndex = 0;
  let phraseIndex = 0;
  let currentPhrase1 = [];
  let isDeleting = false;
  let isEnd = false;
  function typeWriterEffect(container, phrase, currentPhrase) {
    isEnd = false;
    // Repeats the function as long as the phrase index does not equal phrase.length
    if (phraseIndex < phrase.length) {
      if (!isDeleting && charIndex <= phrase[phraseIndex].length) {
        currentPhrase.push(phrase[phraseIndex][charIndex]);
        charIndex++;
        container.innerText = currentPhrase.join("");
        console.log("add", currentPhrase);
      }
      // Removes characters from the array as long as deleting and characters index does not equal the phrases length.
      if (isDeleting && charIndex <= phrase[phraseIndex].length) {
        currentPhrase.pop(phraseIndex, phraseIndex);
        container.innerText = currentPhrase.join("");
        charIndex--;
        console.log(currentPhrase);
      }
      // Declares that the word is completed and can begin removing characters from the array.
      if (charIndex == phrase[phraseIndex].length) {
        isDeleting = true;
        isEnd = true;
      }
      // Declares that the array deleted all characters, then clears the array and moves to the following phrase. Resets phrase index if it has reached the end of all the phrases.
      if (isDeleting && charIndex === 0) {
        currentPhrase = [];
        isDeleting = false;
        phraseIndex++;
        if (phraseIndex === phrase.length) {
          phraseIndex = 0;
        }
      }
    }
    // Sets speed of type/delete effect.
    const fast = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? fast : normalSpeed;
    setTimeout(() => {
      typeWriterEffect(container, phrase, currentPhrase);
    }, time);
  }

  typeWriterEffect(textContainer1, phrase1, currentPhrase1);
}

// phraseLoad();
// Toggles Dark Mode And Light Mode
const lightModeBtn = document.querySelector("input");
lightModeBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("light-theme");
});

//Intersection Observer API, animates page on scroll

const elements = document.querySelectorAll(".animation");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1  ${entry.target.dataset.delay} forwards cubic-bezier(0.11, 2, 0.73, 0.71)`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});

const funElements = document.querySelectorAll(".slide-right");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideright  ${entry.target.dataset.delay} forwards ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

funElements.forEach((funElement) => {
  observer.observe(funElement);
});

const slideLefts = document.querySelectorAll(".slide-left");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideleft  ${entry.target.dataset.delay} forwards ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

slideLefts.forEach((slideLeft) => {
  observer.observe(slideLeft);
});

const pops = document.querySelectorAll(".pop");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `pop  ${entry.target.dataset.delay} forwards cubic-bezier(0.11, 2, 0.73, 0.71)`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

pops.forEach((pop) => {
  observer.observe(pop);
});

const contactForm = document.querySelector("#contact-form");
const userInput = document.querySelectorAll(".input-text");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   userInput.forEach(input, () => {
//     if (input == "") {
//       alert(input);
//     } else {
//       alert(error);
//     }
//   });
// });
