import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createStore} from "vuex";
import Pagination from 'v-pagination-3';

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
        fetchingMoviesData(context, event)
        {
            let axios = require('axios');
            console.log('inside action')
            let config = {
                method: 'get',
                url: 'https://api.themoviedb.org/3/search/movie?api_key=56bce017dad37c06d00fdd35c76dfaee&query=' + store.state.searchedInput + '&page=' + event,
                headers: { }
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data, 'event is', event);
                    console.log('response full results', response.data.results)
                    context.commit('updatingMoviesState', {
                        movieResults: response.data,
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

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).component('pagination', Pagination).use(router).use(store).mount('#app')
