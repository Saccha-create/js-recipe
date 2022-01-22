const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// 正解を判定する
// feedback の内容
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！",
  "残念！なんちゃらかんちゃら",
]

// 正解を判定する
const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)

  choice4.onclick = function () {
    // 3 番目の選択肢を選択
    choose(3)
  }
}
