<template>
  <div class="home">
    <main class="container">
  <p>Freelance portfolio for</p>
  <section class="animation">
    <div class="first"><div>Frontend</div></div>
    <div class="second"><div>Backend</div></div>
    <div class="third"><div>Fullstack</div></div>
  </section>
</main>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
 
  }
}
</script>

<style>
.home{
  transition: all 0.5s ease-in-out;
  background-image: url('https://cdn-images.imagevenue.com/af/be/49/ME181XNW_o.jpg');
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.104), rgba(0, 0, 0, 0.175));
}

p {
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
  color: black;
  text-wrap:wrap;
  font-size: 30px;
}
.container {
  color: #ffffff;
  font-size: 2.26rem;
  text-transform: uppercase;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation {
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#20a7d8;
}
.second div {
  background-color:darkblue;
}
.third div {
  background-color:black;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

</style>
