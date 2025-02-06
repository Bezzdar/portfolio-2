console.log(" _                  _   __  \n| |__   ___ _   _  / \\  \\ \\ \n| '_ \\ / _ \\ | | |/  / (_) |\n| | | |  __/ |_| /\\_/   _| |\n|_| |_|\\___|\\__, \\/    (_) |\n            |___/       /_/ \n\n01110111 01100101 01101100 01100011\n01101111 01101101 01100101 00100000\n01110100 01101111 00100000 01101101\n01111001 00100000 01110111 01100101\n01100010 01110011 01101001 01110100\n01100101 00100001")

document.addEventListener("DOMContentLoaded", function () {
    const lastName = document.querySelector(".last-name"); 
  
    lastName.addEventListener("click", function (event) {
      const number = document.createElement("span"); 
      number.textContent = "36"; 
      number.classList.add("floating-number"); 
  
      const rect = lastName.getBoundingClientRect();
      
      number.style.left = `${rect.left + rect.width / 2}px`;
      number.style.top = `${rect.top}px`;
  
      document.body.appendChild(number); 
  
      setTimeout(() => {
        number.remove();
      }, 1500); 
    });
  });



  
  