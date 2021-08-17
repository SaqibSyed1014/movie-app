<template>
  <div>
    <nav-bar @search-emitted="sendingSearchedValue"></nav-bar>
    <div class="text-center">
      <router-view :searched="this.searchedVal"></router-view>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  name: 'App',
  components: {
    navBar,
  },
  data(){
    return{
      searchedVal: ''
    }
  },
  computed: {

  },
  methods: {
    sendingSearchedValue(val){
      this.searchedVal = val;
      console.log('in app', this.searchedVal)
    }
  }
}
</script>

<style>

</style>
