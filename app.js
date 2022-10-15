// Тоглогчдын ээлжийг хадгалах хувьсагч; 1-р тоглогчийг 0; 2-р тоглогчийг 1 гэе
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэх утгыг санамсаргүйгээр үүсгэнэ.
var dice = Math.floor(Math.random() * 6) + 1;
// ---------------------------<div class="player-score" id="score-0">43</div>
// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<h4>dice</h4>";

// Програм эхлэхэд бэлтгэж тоонуудыг "0" болгож байна
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
//----------------------------<img src="dice-5.png" alt="Dice" class="dice" />.
document.querySelector(".dice").style.display = "none";
