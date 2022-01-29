const inputElement = document.getElementById("input-todo1")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")

const container = document.getElementById("cards-container1")
const container2 = document.getElementById("cards-container2")
const container3 = document.getElementById("cards-container3")

const addButton = document.getElementById("add-button1")
const addButton2 = document.getElementById("add-button2")
const addButton3 = document.getElementById("add-button3")

// を押したときの処理を登録
addButton.onclick = function () {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}

//enterを押したら
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

//enterを押したら
addButton2.onclick = function () {
  //カード2
  //cardを作成
  const card2 = createCard2(inputElement2.value)
  container2.append(card2)

  //入力欄を空にする
  inputElement2.value = ""
}

//共通の処理・テキストからカードを作成する
const createCard2 = function (text) {
  //カードの枠を作る
  const card2 = document.createElement("div")

  //todo を作成
  const todo2 = document.createElement("div")
  todo2.textContent = text

  //todoをカードの中に追加する
  card2.append(todo2)

  //deleteを作成
  const deleteButton2 = document.createElement("button")
  deleteButton2.textContent = "削除"

  deleteButton2.onclick = function () {
    //カード削除
    card2.remove()
  }
  card2.append(deleteButton2)
  return card2
}

//enterを押したら
addButton3.onclick = function () {
  //カード3
  //cardを作成
  const card3 = createCard3(inputElement3.value)
  container3.append(card3)

  //入力欄を空にする
  inputElement3.value = ""
}
//共通の処理・テキストからカードを作成する
const createCard3 = function (text) {
  //カードの枠を作る
  const card3 = document.createElement("div")
  //todo を作成
  const todo3 = document.createElement("div")
  todo3.textContent = text
  //todoをカードの中に追加する
  card3.append(todo3)

  const deleteButton3 = document.createElement("button")
  deleteButton3.textContent = "削除"

  deleteButton3.onclick = function () {
    //カード削除
    card3.remove()
  }
  //削除ボタンをcard の中に追加
  card3.append(deleteButton3)

  return card3
}
