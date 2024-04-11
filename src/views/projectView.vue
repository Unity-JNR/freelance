<template >

      <div class="container-fluid">
        <div class="row">
           <div class="col-lg-4 pb-4 d-flex justify-content-center" v-for ="item in $store.state.project" :key="item">
               <div class="card">
                 <img class="card-img-top" :src="item.url" alt="Card image cap">
                 <div class="card-body">
                   <h5 class="card-title">{{item.title}}</h5>
                   <p class="card-text">{{item.description}}</p>
                   <div class="links">
                      <a :href="item.link" class="btn btn-primary link" target="_blank">live link</a>
                      <a :href="item.github" class="btn btn-primary link" target="_blank">source</a>
                   </div>
                 </div>
      
             
         </div>
        </div>
      </div>
   </div>

   
</template>
<script>
export default {
    components: {
        
    },
 
   computed: {
      fetchProject() {
           // Call the fetchData action using dispatch
           this.$store.dispatch('fetchProject');
       },
   },

   mounted() {
       this.fetchProject; // Add parentheses to invoke the method
   }

}
</script>

<style scoped>


.card {
width: 18rem;
/* margin: 10px; */
border: 1px solid black;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
/* text-align: center; */
font-size: 15px;
}

.links{
    display: flex;
    justify-content: space-around;
}
.link{
    color: black;
    text-decoration: none;
    /* width: 100px; */
    margin: 5px;
}

img {
width: 100%;
height: 200px;
}

.card-body {
text-align: center;
font-size: 15px;
}

.card-title {
text-align: center;
font-size: 15px;
font-weight: bold;
}

.card-text {
text-align: center;
font-size: 15px;
}
</style>