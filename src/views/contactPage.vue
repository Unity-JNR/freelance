
<template>
  
  
    <section id="contact" class="contact ">
  
          <div class="header">
      <h1 class="mt-2 mb-5">Contact me</h1>
        </div>
     <div class="container-fluid" data-aos="fade-up">
  
          <div class="row mt-1">
  
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>Cape Town , Crawford</p>
                </div>
  
                <div class="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>callaward@gmail.com</p>
                </div>
  
                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+27 769839406</p>
                </div>
  
              </div>
  
            </div>
  
            <div class="col-lg-8 mt-5 mt-lg-0">
              <form action="https://submit-form.com/lXg07wxiG" method="post" role="form" class="form_info" >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email"  required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" v-model="subject" required>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
    </section>
    <hr>
    <section id="contact" class="contact ">
  
     
     <div class="container-fluid" data-aos="fade-up">
  
          <div class="row mt-1">
  
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Location:</h4>
                  <p>Cape Town , Northpine</p>
                </div>
  
                <div class="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>unitydemas12@gmail.com</p>
                </div>
  
                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>+27 83 267 3554</p>
                </div>
  
              </div>
  
            </div>
  
            <div class="col-lg-8 mt-5 mt-lg-0">
              <form action="https://submit-form.com/lXg07wxiG" method="post" role="form" class="form_info" >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email"  required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" v-model="subject" required>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
    </section>
  
  </template>
  
  <script>
  export default {
    data(){
      return{
        name:"",
        email:"",
        subject:"",
        message:""
      }
    },
    computed:{
        
      },
      methods:{
        clearForm(){
          this.name='',
          this.email='',
          this.subject='',
          this.message=''
  
        }
  
      },
      mounted(){
          
      }
  
  }
  </script>
  
  <style scoped>
  
  #contact{
    min-height: 77svh;
  }
  .container{
    margin-top:8%
  }
  .header {
      /* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95581/header.png'); */
      /*background-attachment: fixed;*/
      color: #FFF;
      height: 100%;
    background-color: black;
  
  }
      /*--------------------------------------------------------------
  # Contact
  --------------------------------------------------------------*/
  
  #contactName{
      color:maroon
  }
  
  .contact .info {
    width: 100%;
    /* background: #fff; */
  
  }
  
  .contact .info i {
    font-size: 20px;
    color: maroon;
    float: left;
    width: 44px;
    height: 44px;
    background: #eef7ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }
  
  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #45505b;
  }
  
  .contact .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: black;
  }
  
  .contact .info .email,
  .contact .info .phone {
    margin-top: 40px;
  }
  
  .contact .info .email:hover i,
  .contact .info .address:hover i,
  .contact .info .phone:hover i {
    background: maroon;
    color: #fff;
  }
  
  .contact .form_info {
    width: 100%;
    /* background: #fff; */
  }
  
  .contact .form_info .form-group {
    padding-bottom: 8px;
  }
  
  .contact .form_info .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }
  
  .contact .form_info .error-message br+br {
    margin-top: 25px;
  }
  
  .contact .form_info .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }
  
  .contact .form_info .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }
  
  .contact .form_info .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    animation: animate-loading 1s linear infinite;
  }
  
  .contact .form_info input,
  .contact .form_info textarea {
    border-radius: 4px;
    box-shadow: none;
    font-size: 14px;
  }
  
  .contact .form_info input[type=text],
  .contact .form_info input[type=email] {
    height: 44px;
  }
  
  .contact .form_info textarea {
    padding: 10px 12px;
  }
  
  .contact .form_info button[type=submit] {
    background: maroon;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }
  
  .contact .form_info button[type=submit]:hover {
    background:maroon;
  }
  
  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  </style>
  