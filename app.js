// Тоглогчдын ээлжийг хадгалах хувьсагч; 1-р тоглогчийг 0; 2-р тоглогчийг 1 гэе
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэх утгыг санамсаргүйгээр үүсгэнэ.
// ---------------------------<div class="player-score" id="score-0">43</div>

// Програм эхлэхэд бэлтгэж тоонуудыг "0" болгож байна
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
//----------------------------<img src="dice-5.png" alt="Dice" class="dice" />.
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
