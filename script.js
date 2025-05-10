function setTip(value) {
    document.getElementById("tip-percentage").value = value;
  }
  
  function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
    const numPeople = parseInt(document.getElementById("num-people").value);
    const resultsDiv = document.getElementById("results");
  
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage < 0 || isNaN(numPeople) || numPeople < 1) {
      alert("Please enter valid values.");
      resultsDiv.style.display = "none";
      return;
    }
  
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / numPeople;
  
    document.getElementById("tip-amount").textContent = "$" + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = "$" + totalAmount.toFixed(2);
    document.getElementById("per-person").textContent = "$" + perPerson.toFixed(2);
    resultsDiv.style.display = "block";
  }
  
  // Dark Mode Toggle
  document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
  
  // Voice Input
  // const voiceBtn = document.getElementById("voice-btn");
  // const billInput = document.getElementById("billAmount");
  
  // if ('webkitSpeechRecognition' in window) {
  //   const recognition = new webkitSpeechRecognition();
  //   recognition.lang = "en-US";
  
  //   voiceBtn.addEventListener("click", () => {
  //     recognition.start();
  //   });
  
  //   recognition.onresult = function (event) {
  //     const transcript = event.results[0][0].transcript.replace(/[^0-9.]/g, '');
  //     billInput.value = transcript;
  //   };
  // } else {
  //   voiceBtn.disabled = true;
  //   voiceBtn.title = "Voice recognition not supported in this browser";
  // }
  
