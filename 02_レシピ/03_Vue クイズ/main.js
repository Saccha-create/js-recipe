Vue.createApp({
  data() {
    return {
      feedback: "",
      quiz: {
        question: "私の昔住んでいたこの場所はどこでしょう？",
        image: "image1.jpg",
        choices: [
          {
            text: "蘇州",
            feedback: "正解！東洋のベネチアと呼ばれている運河の街です",
          },
          {
            text: "上海",
            feedback: "残念！でも近いのでめっちゃ行きました",
          },
          {
            text: "北京",
            feedback: "残念！家族旅行で一度行ったことがあります",
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback
    },
  },
  computed: {
    quizImagePath() {
      return "./image/" + this.quiz.image
    },
  },
}).mount("#app")
