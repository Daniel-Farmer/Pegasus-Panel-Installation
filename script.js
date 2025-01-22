function updateClock(elementId, timeZone) {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", { timeZone });
    document.getElementById(elementId).textContent = time;
  }
  
  function updateAllClocks() {
    updateClock("austria-time", "Europe/Vienna");
    updateClock("bangladesh-time", "Asia/Dhaka");
    updateClock("nyc-time", "America/New_York");
  }
  
  // Update clocks every second
  setInterval(updateAllClocks, 1000);
  
  // Initialize clocks immediately
  updateAllClocks();