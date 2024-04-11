import { createStore } from 'vuex'
let hostedData = 'https://unity-jnr.github.io/Info/';

export default createStore({
  state: {
    project:[]
  },
  getters: {
  },
  mutations: {
    setProject(state,data){
      state.project = data;
    }
  },
  actions: {
    fetchProject({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.projects)
          commit('setProject', data.projects);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    }
  },
  modules: {
  }
})
