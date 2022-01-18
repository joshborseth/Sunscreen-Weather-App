const temp = document.getElementById("temp");

const flames = document.getElementById("flames");
const sunny = document.getElementById("sunny");
const overcast = document.getElementById("overcast");

const sunscreen = document.getElementById("sunscreen-text");

fetch(
  "http://api.weatherapi.com/v1/current.json?key=370337a2bb604412bdc210550221701&q=Abbotsford&aqi=no"
)
  .then((response) => response.json())
  .then((json) => {
    temp.innerText = JSON.stringify(json.current.temp_c);
    const uvString = JSON.stringify(json.current.uv);
    let uv = Number(uvString);
    console.log(uv);

    if (uv >= 8) {
      flames.classList.remove("hidden");
      sunscreen.innerText =
        "You Should Definitely Wear Sunscreen In Abbotsford Today";
    } else if (uv >= 3) {
      sunny.classList.remove("hidden");
      sunscreen.innerText =
        "You May Want To Wear Sunscreen In Abbotsford Today";
    } else if (uv >= 0) {
      overcast.classList.remove("hidden");
      sunscreen.innerText =
        "There Is No Need To Wear Sunscreen In Abbotsford Today";
    }
  });
