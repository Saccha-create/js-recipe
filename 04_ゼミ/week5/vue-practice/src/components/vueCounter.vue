<template>
  <div>🔥 {{ number }} 🔥</div>
  <button v-on:click="countUp">+1</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  created: function () {
    this.count = 100
  },
  computed: {
    number: function () {
      if (this.count % 3 === 0) {
        return this.count + "!!!!"
      } else {
        return this.count
      }
    },
  },

  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}
</script>
