Vue.createApp({
  data() {
    return {
      zandaka: 0,
      inputValue: 0,
      dialogs: [],
    }
  },
  computed: {
    active() {
      if (this.zandaka == 0) {
        return true
      } else if (this.zandaka < this.inputValue) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    countUp: function () {
      this.zandaka += Number(this.inputValue)
      this.dialogs.push({
        date: new Date(),
        type: "入金",
        money: this.inputValue,
      })
      this.inputValue = 0
    },
    countDown: function () {
      this.zandaka -= Number(this.inputValue)
      this.dialogs.push({
        date: new Date(),
        type: "出金",
        money: this.inputValue,
      })
      this.inputValue = 0
    },
  },
}).mount("#app")

// Vue.createApp({
//   data() {
//     return {
//       dialogs: [
//         {
//           date: new Date(),
//           type: "入金",
//           money: 1000,
//         },
//         {
//           date: new Date(),
//           type: "入金",
//           money: 1000,
//         },
//         {
//           date: new Date(),
//           type: "入金",
//           money: 1000,
//         },
//       ],
//     }
//   },
//   methods: {
//     addlogs: function () {
//       this.dialogs.push({
//         date: new Date(),
//         type: "入金",
//         money: 1000,
//       })
//     },
//   },
// }).mount("#kiroku")
