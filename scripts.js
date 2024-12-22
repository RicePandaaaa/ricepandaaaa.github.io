// Typing Animation Function
function typeText(element, text, speed, callback) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    // Clear content to simulate typing
    line1.textContent = ">> ";
    line2.textContent = ">> ";
  
    // Type each line one by one
    typeText(line1, "Howdy! I'm Anthony Pham!", 20, () => {
      typeText(line2, "Check out my different lives below! (Website under renovation!)", 20)
    });
  });
  