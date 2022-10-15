var activePlayer;
var scores;
var roundScore;
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isGameOver;
var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулах
  isGameOver = false;
  // Тоглогчдын ээлжийг хадгалах хувьсагч; 1-р тоглогчийг 0; 2-р тоглогчийг 1 гэе
  activePlayer = 0;
  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  // Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэх утгыг санамсаргүйгээр үүсгэнэ.
  // ---------------------------<div class="player-score" id="score-0">43</div>

  // Програм эхлэхэд бэлтгэж тоонуудыг "0" болгож байна
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  //Шооны зургийг түр алга болгох" />.
  diceDom.style.display = "none";
  //   Winner бичгийг арилгах
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2 ";
  document.querySelector(".player-0-panel").classList.add("active");
}
// ----------------------------------------------------------------------------------Shoo shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver == false) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    //   Buusan shoonii random toond hargalzah zurgiig gargaj irehiin tuld zuragnii src-n toog uurcilj bna
    diceDom.src = "dice-" + diceNumber + ".png";
    //   Буусан тоо 1-с ялгаатай бол актив тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber != 1) {
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      daraagiinToglogcruuShiljih();
    }
  } else {
    alert("Тоглоом дууслаа 'NEW GAME' дээр дарж дахин тоглоно уу!");
  }
});
// ---------------------------------------------------------------------------Hold товч дарах eventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver == false) {
    // Hold товч дарахад оноог үндсэн оноонд хадгалах
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Уг тоглогчийн хожсон эсэхийг шалгаж нэрийг нь "Winner" болгох
    if (scores[activePlayer] >= 10) {
      // Тоглоомыг дууссан төлөвт оруулна
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      //   Идэвхитэй тоглогчийг шилжүүлэх функц дуудах
      daraagiinToglogcruuShiljih();
    }
  } else alert("Тоглоом дууслаа 'NEW GAME' дээр дарж дахин тоглоно уу!");
});
function daraagiinToglogcruuShiljih() {
  // Тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгох
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  // Идэвхитэй тоглогчийн ээлжийг солих
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  // Улаан цэгийг идэвхитэй тоглогчид шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Шоог түр алга болгох
  diceDom.style.display = "none";
}
// ---------------------------------------------------------------------------New game товч дарах eventListener
document.querySelector(".btn-new").addEventListener("click", initGame);
