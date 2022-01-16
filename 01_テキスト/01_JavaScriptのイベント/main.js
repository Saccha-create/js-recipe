const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

// 関数を登録
button.onclick = alertMessage
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

// input 要素と input イベント

const sayHello = function () {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
