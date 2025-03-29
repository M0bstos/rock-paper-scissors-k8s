const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

const displayImages = ["/images/Rock.png", "/images/Paper.png", "/images/Scissors.png"];

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "/images/Rock.png";
    result.textContent = "Wait...";

    optionImages.forEach((image2, index2) => {
      if (index !== index2) {
        image2.classList.remove("active");
      }
    });

    gameContainer.classList.add("start");

    setTimeout(() => {
      gameContainer.classList.remove("start");

      userResult.src = displayImages[index];

      let randomNumber = Math.floor(Math.random() * 3);
      cpuResult.src = displayImages[randomNumber];

      let userValue = ["R", "P", "S"][index];
      let cpuValue = ["R", "P", "S"][randomNumber];

      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "CPU",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };

      let outcomeValue = outcomes[userValue + cpuValue];

      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
    }, 2500);
  });
});
