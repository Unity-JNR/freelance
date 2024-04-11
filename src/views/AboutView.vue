<template>
  <div class="about">
    <div class="box">
      <header>
        <h1>About Us</h1>
      </header>
      <div >
        <main>
          <section class="about-section">
            <h2>Who am We?</h2>
            <div class="bg">
              <h2>Objective</h2>
    <p class="lead p">
      Our main aim is to make websites that are exactly what our clients need. Whether it's a simple site or a more complex web app, We want to use our skills to make something that really works for them
    </p>

            </div>
          </section>
          <section class="about-section">
            <hr>
            <h2 class=" ">More About Me: </h2>
            <h2>Purpose:</h2>
    <ul class="list-group">
      <li class="list-group-item"><strong>Show What we Can Do:</strong> We want to demonstrate that we are good at using lots of
        different tools and technologies to build websites. From the basic building blocks like HTML and
        CSS to more advanced stuff like JavaScript and databases, I've got it covered.</li>
      <li class="list-group-item"><strong>Be Creative:</strong> Our team love coming up with new ideas and finding fun ways to make
        websites stand out. We want to show that we can think creatively and make websites that are
        unique and interesting.</li>
      <li class="list-group-item"><strong>Share our Work:</strong>we have done a bunch of projects in the past, and I want to show
        them off! Whether it's a website for a small business or a bigger project for a company, we want
        to show the variety of stuff we have worked on.</li>
      <li class="list-group-item"><strong>Make Good Websites:</strong> Quality is really important to me. we want to make sure
        that every website We build is well-made, easy to use, and looks good. We test everything
        thoroughly to make sure it works the way it should.</li>
      <li class="list-group-item"><strong>Build Trust:</strong> We want potential clients to know that they can trust me to do a
        good job. We share feedback from past clients and examples of successful projects to show
        that we are reliable and can deliver results.</li>
      <li class="list-group-item"><strong>Get More Business:</strong> Ultimately, We want this portfolio to help me find new
        clients and projects to work on. By showing what We can do and proving that we are good at it, We
        hope to attract people who need help with their websites.</li>
    </ul>
  
            <!-- <div class="container"> -->
              <div class="row mt-5">
                <div class="col-lg-4 ">
                  <h3 id="heading">unity:</h3>
                 
                </div>
                <div class="col-lg-4">
                  <h3 id="heading">calla:</h3>
                 
                </div>
                <div class="col-lg-4">
                  <h3 id="heading">tash:</h3>
                
                </div>
              </div>
            <!-- </div> -->
          </section>
        </main>
      </div>
     
    </div>
  </div>
 
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');

.about {
    font-family: 'Marcellus', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #1685c5;;
    color: #000;
    text-align: center;
    padding: 20px 0;
  
}

header h1 {
    margin: 0;
    font-weight: bolder !important;
    font-family: 'Marcellus', sans-serif;
}
h2{
  color: #000 !important;
  font-family: 'Marcellus', sans-serif;
}
h2::first-letter{
  color: lawngreen !important;
}

.p{
  color: #D9D9D9;
  font-family: 'Marcellus', sans-serif;
}
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.about-section {
    max-width: 800px;
    margin-bottom: 20px;
}

.about-section h2 {
    color: #333;
    margin-top: 0;
    font-family: 'Marcellus', sans-serif;
}

hr {
  border: 0;
  height: 1.5px;
  background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255));
}
.bg {
  background-color: rgba(143, 143, 143, 0.8);
  border-radius: 25px;
  padding: 15px;
  box-shadow: 0 0 20px rgb(69, 50, 215); /* Horizontal offset, vertical offset, blur radius, color */
}
.list-group-item{
  height: 50px;
  background-color: #D9D9D9;
  font-family: 'Marcellus', sans-serif;
}

h3{
  color: lawngreen;
  font-family: 'Marcellus', sans-serif;
}

.list-group{
  border-radius: 20px;
  /* box-shadow: 0 0 20px rgb(69, 50, 215); Horizontal offset, vertical offset, blur radius, color */
}


/* Media Queries */
@media screen and (max-width: 300px) {
  /* Adjust styles for small devices (less than 300px wide) */
  header {
    padding: 10px 0;
  }
  p{
    text-wrap:wrap;
  }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
  /* Adjust styles for devices between 301px and 720px wide */
  main {
    padding: 10px;
  }
  p{
    text-wrap:wrap;
  }
}

@media screen and (min-width: 721px) {
  /* Adjust styles for larger devices (greater than 720px wide) */
  .about-section {
    max-width: 1000px;
  }
  p{
    text-wrap:wrap;
  }
}
</style>
