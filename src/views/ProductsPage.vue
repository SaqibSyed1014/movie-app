<template>
  <div class="movies-page">
    <h1 @click="showType()">Movies</h1>

    <div class="movies-display-section">

      <div class="container">
        <div class="all-cards d-flex flex-column align-items-center my-5">

          <div class="row" v-for="i in Math.ceil(this.$store.state.movieResults.results.length / 4)" :key="i">
            <div class="card p-0 mx-4 mb-5" v-for="movie in this.$store.state.movieResults.results.slice((i - 1) * 4, i * 4)"
                 :key="movie">
              <router-link to="/details">
                <div class="card-img-wrapper">
                  <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path"
                       alt="Image not loaded">
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ movie.original_title }} -
                    <span class="movie-lang">({{ movie.original_language.toUpperCase() }})</span></h5>
                  <p class="card-text">{{ movie.release_date.substr(0, 4) }}</p>
                </div>
              </router-link>
            </div>
          </div>

        </div>

        <div class="pagination-container d-flex justify-content-center mb-3">
          <pagination v-model="page" :records="this.$store.state.movieResults.total_results" :per-page="20"
                      @paginate="myCallback($event)"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>



export default {
name: "ProductsPage",
  components: {

  },
  props: {
    searched: {
      type: String,
    }
  },
  data(){
    return {
      page: 1,
      apiKey: '56bce017dad37c06d00fdd35c76dfaee',
      movies: '',
    }
  },
  methods: {
    myCallback(event){
      console.log('pressed', event)
      this.$store.dispatch('fetchingMoviesData', event)
    },
    listingMovies(){
      console.log('ahaaaaa')
      this.movies = this.$store.state.movieResults
      console.log('this updated mmovie', this.movies)
    },
    showType(){
      console.log('array is ', this.$store.state.movieResults.results);
    }
  },
}
</script>

<style scoped>

.movies-page .card{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: calc((100vw - 80px - 260px - (30px * 4)) / 4);
  height: 29rem;
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
.movies-page .card .card-img-wrapper img:hover{
  transform: scale(1.1,1.1);
  transition: .3s ease-in-out;
}
.card-body{
  padding: 10px;
  width: 100%;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.movies-page .card a{
  color: #0b0b1c;
  font-size: 20px;
}
.movies-page .movie-lang{
  color: gray;
}

</style>