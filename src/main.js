import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from "axios";
import { createStore} from "vuex";


const store = createStore({
    state: {
        movieResults: '',
        searchedInput: ''
    },
    mutations: {
        updatingMoviesState(state, payload)
        {
            state.movieResults = payload.movieResults;
            console.log('inside mutations', state.movieResults)
        }
    },
    actions: {
        fetchingMoviesData(context)
        {
            console.log('inside action')
            var config = {
                method: 'get',
                url: 'https://api.themoviedb.org/3/search/movie?api_key=56bce017dad37c06d00fdd35c76dfaee&query=' + store.state.searchedInput,
                headers: { }
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                    console.log(response.data.results)
                    context.commit('updatingMoviesState', {
                        movieResults: response.data.results,
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})


import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSearch)

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).use(router, axios).use(store).mount('#app')
