const DELTA = 2; //Minutes
const LIMIT = 60; //Minutes
const DELIMITER = "|";

document.querySelector("#countdown").textContent = `${DELTA} mins.`;

const pingPongInit = (pinCode, center, dates) => {
  if (
    dates &&
    dates != "" &&
    center &&
    center != "" &&
    pinCode &&
    pinCode != ""
  ) {
    let dateT = dates.split(DELIMITER)[0].trim();
    let dateT7 = dates.split(DELIMITER)[1].trim();

    document.getElementById("Ts").innerText = `[${dateT}]`;
    document.getElementById("T7s").innerText = `[${dateT7}]`;

    console.log(pinCode, dates, dateT, dateT7);

    pingPong(pinCode, center, dateT, "T");
    pingPong(pinCode, center, dateT7, "T7");
  }
};

const pingPong = (pinCode, center, date, id) => {
  display = document.querySelector("#countdown");
  startTimer(LIMIT * 60, display);

  let looper = setInterval(async () => {
    let res = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}`
    );
    let data = await res.json();

    let pTag = document.createElement("p");
    pTag.innerHTML = `<p>${
      JSON.stringify(
        data.centers
          .filter((c) => c.name.toLowerCase() === center.toLowerCase())[0]
          ?.sessions.filter((s) => s.available_capacity > 0)
      ) || "No Sessions available."
    }</p>`;

    document.getElementById(id).appendChild(pTag);
  }, DELTA * 60 * 1000);

  setTimeout(() => {
    alert(`Polling over for ${date} (${LIMIT} mins.)`);
    clearInterval(looper);
  }, LIMIT * 60 * 1000);
};

const startTimer = (duration, display) => {
  var timer = duration,
    minutes,
    seconds;
  let counter = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(counter);
  }, duration * 1000);
};
