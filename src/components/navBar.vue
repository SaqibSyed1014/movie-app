<template>
  <div class="container my-5">
    <div class="row align-items-center">

      <div class="logo col-2 text-center">
        <img :src="require('@/assets/movie-logo.png')" height="100" width="100" class="img-fluid" alt="logo">
      </div>

      <div class="search-bar col-10">
        <div class="input-group rounded">
          <input
              type="search"
              v-model="search_field"
              class="form-control rounded"
              placeholder="Search in Daraz"
              aria-label="Search"
              aria-describedby="search-addon" />
          <button type="button" class="" id="searchBtn" @click="clicked()">
            <font-awesome-icon icon="search"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
name: "navBar",
  data(){
    return{
      search_field: ''
    }
  },
  methods: {
    clicked(){
      console.log(this.search_field)
      this.$store.state.searchedInput = this.search_field
      this.$store.dispatch('fetchingMoviesData')
      this.$store.state.gotMovies = true
      // this.$emit('search-emitted', this.search_field)
      // this.$store.state.searchedValue = this.search_field
      // console.log('state', this.$store.state.searchedValue)
    }
  }
}
</script>

<style scoped>
.search-bar input{
  background: #f1eded;
  padding: 15px;
}
.search-bar button{
  background-color: #ed3b23;
  /*#512017*/
  color: white;
  padding: 15px 20px;
}
.search-bar button .fa-search{
  font-size: 25px;
}
</style>