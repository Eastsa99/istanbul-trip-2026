// ==========================================
// ISTANBUL FAMILY TRIP 2026
// LIVE COUNTDOWN
// ==========================================

// Departure time:
// 30 October 2026 at 10:15 AM Malaysia time
//
// Malaysia = UTC+8
//
// IMPORTANT:
// The +08:00 makes sure the countdown uses
// Malaysia time regardless of the device timezone.

const departureTime = new Date("2026-10-30T10:15:00+08:00");


// Get the HTML elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("countdownMessage");


// ==========================================
// FORMAT NUMBERS
// ==========================================

function twoDigits(number) {
  return String(number).padStart(2, "0");
}


// ==========================================
// UPDATE COUNTDOWN
// ==========================================

function updateCountdown() {

  // Get the current time EVERY time this function runs
  const now = new Date();

  // Calculate remaining milliseconds
  const difference = departureTime.getTime() - now.getTime();


  // ========================================
  // FLIGHT DAY
  // ========================================

  if (difference <= 0) {

    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    messageElement.textContent =
      "✈️ IT'S FLIGHT DAY! KUL → DXB → IST 🇹🇷";

    return;
  }


  // ========================================
  // CALCULATE TIME
  // ========================================

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;


  // ========================================
  // UPDATE SCREEN
  // ========================================

  daysElement.textContent = twoDigits(days);
  hoursElement.textContent = twoDigits(hours);
  minutesElement.textContent = twoDigits(minutes);
  secondsElement.textContent = twoDigits(seconds);


  // ========================================
  // DYNAMIC MESSAGE
  // ========================================

  if (days === 0 && hours < 24) {

    messageElement.textContent =
      "🔥 ALMOST TIME! FINISH PACKING!";

  } else if (days <= 7) {

    messageElement.textContent =
      "🇹🇷 ONE WEEK TO GO! ISTANBUL IS WAITING!";

  } else if (days <= 30) {

    messageElement.textContent =
      "✨ LESS THAN A MONTH! GET READY FOR THE ADVENTURE!";

  } else if (days <= 60) {

    messageElement.textContent =
      "✈️ THE ADVENTURE IS GETTING CLOSER!";

  } else {

    messageElement.textContent =
      "✨ DREAMING OF ISTANBUL... THE COUNTDOWN IS ON!";
  }
}


// ==========================================
// START IMMEDIATELY
// ==========================================

// Run once immediately when page loads
updateCountdown();


// ==========================================
// KEEP RUNNING AUTOMATICALLY
// ==========================================

// Run every 1 second
setInterval(updateCountdown, 1000);