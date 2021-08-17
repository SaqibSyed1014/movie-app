<template>
<div>
  <h3>Detail Page</h3>
  <h2 @click="clickingg">Home</h2>
  <ul v-for="loop in movieResultArray" :key="loop">
    <li>{{ loop.original_title }}</li>
  </ul>
</div>
</template>

<script>
export default {
name: "ProductDetail",
  data(){
      return{
        movieResultArray: ''
      }
  },
  methods: {
    clickingg(){
      this.movieResultArray = this.$store.state.movieResults
      console.log('home movieResult', this.$store.state.movieResults)
    }
  }
}
</script>

<style scoped>

</style>