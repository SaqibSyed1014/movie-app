<template>
<div class="movies-page">
  <router-link to="/details"><h1>Movies Page</h1></router-link>
  <div class="all-cards container d-flex justify-content-center my-5">

    <div class="row m-3" v-for="i in Math.ceil(this.$store.state.movieResults.length / 5)" :key="i">
      <div class="card p-0 mb-5" v-for="movie in this.$store.state.movieResults.slice((i - 1) * 5, i * 5)" :key="movie">
        <router-link to="/details">
          <div class="card-img-wrapper">
            <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="Image not loaded">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ movie.original_title }} - <span class="movie-lang">({{ movie.original_language.toUpperCase() }})</span></h5>
            <p class="card-text">{{ movie.release_date }}</p>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</div>
</template>

<script>
// const axios = require('axios');

export default {
name: "ProductsPage",
  props: {
    searched: {
      type: String,
    }
  },
  data(){
    return {
      apiKey: '56bce017dad37c06d00fdd35c76dfaee',
      movies: '',
    }
  },
  methods: {
  listingMovies(){
    console.log('ahaaaaa')
    this.movies = this.$store.state.movieResults
    console.log('this updated mmovie', this.movies)
  }
  },
}
</script>

<style scoped>
.movies-page .card{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: calc((100vw - 80px - 260px - (30px * 4)) / 4);
  position: relative;
  height: 29rem;
}
.movies-page .card .card-img-wrapper img:hover{
  transform: scale(1.1,1.1);
  transition: .3s ease-in-out;
}
.movies-page .card-img-wrapper{
  overflow: hidden;
  height: calc((100vw - 80px - 260px - (30px * 4)) / 4 * 1.5);
}
.movies-page .card-img-wrapper img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.movies-page .card a{
  color: #0b0b1c;
  text-decoration: none;
  font-size: 20px;
}
.movies-page .movie-lang{
  color: gray;
}
.card-body{
  padding: 10px;
  width: 100%;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>