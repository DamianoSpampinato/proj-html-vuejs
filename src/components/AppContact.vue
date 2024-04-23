<script>
export default{
    name: 'AppContact'
}
</script>

<template>
<section id="contact">
    <h3 class="text-center">Contact with our team</h3>
    <p class="text-center">If you are planning on developing a product landing</p>
    <div class="ms-container-md">
        <div class="row">
            <div class="col-6 bg-primary">
            </div>
            <div class="col-6">
                <div class="img-container mb-5">
                    <img src="../assets/img/35.png" alt="">
                </div>
                <div class="adress mb-3">
                    <strong>9840 Share St. Fond Du Lac, Wl 54935</strong>
                </div>
                <div class="contacts mb-5">
                    <div class="number">0 1223 456 789</div>
                    <div class="mail">mail@softbox.com</div>
                </div>
                <div class="buttons mb-5">
                    <div class="btn mx-1"><i class="fa-brands fa-facebook-f"></i></div>
                    <div class="btn mx-1"><i class="fa-brands fa-x-twitter"></i></div>
                    <div class="btn mx-1"><i class="fa-brands fa-github"></i></div>
                    <div class="btn mx-1"><i class="fa-brands fa-instagram"></i></div>
                </div>
                <h3>Get In Touch</h3>
                <form>
                    <div class="row">
                        <div class="col-6 my-3">
                            <input class="p-2" type="text" placeholder="Your Name">
                        </div>
                        <div class="col-6 my-3">
                            <input class="p-2" type="email" placeholder="Your Email">
                        </div>
                       
                            <div class="col-12 my-3">
                                <input class="p-2" type="text" placeholder="Your Subject">
                            </div>
                            <div class="col-12 my-3">
                                <textarea class="p-2" name="" id=""  placeholder="Your Message" rows="5"></textarea>
                            </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped lang="scss" >
@use '../style/partials/variables'as*;
.btn{
    border: 1px solid $dark-grey;
    color: $blue;
}
.img-container{
    width: 140px;
}

.col-6{
    input{
        width: 100%
    }
}
.col-12{
    input{ 
      
            width :100%;
        }
    textarea{
        width :100%;

    }
}
</style>