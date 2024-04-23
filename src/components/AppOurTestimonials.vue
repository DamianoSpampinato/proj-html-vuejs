<script>
export default{
    name: 'AppOutTestimonials'
}
</script>

<template>
<section id="our-testimonials">
    <div class="ms-container-md mt-5">
        <div class="text-center">
            <h3>Our Testimonials</h3>
            <p>If you are planning on developing a product landing app or website,<br> take a look at this beautiful-crafted</p>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="line-wrapper">
                    <div class="ms-card d-flex flex-column justify-content-center align-items-center p-5 pb-2">
                        <div class="quotes">
                            <i class="fa-solid fa-quote-left"></i>
                        </div>

                        <div class=" img-container rounded-circle overflow-hidden">
                            <img  src="../assets/img/26.jpeg" alt="">
                        </div>
                        <div class="user text-center mt-2 mb-3" >
                            Julia Ann <span class="role" >COO Softbox</span>
                        </div>
                        <div class="text mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex inventore ut, magnam fugiat error, similique nobis maxime, harum tempore assumenda? Quod ratione architecto, placeat error sequi nam maxime ex?</p>
                        </div>
                    </div>
                    <div class="line">
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="line-wrapper">
                    <div class="ms-card d-flex flex-column justify-content-center align-items-center p-5 pb-2">
                        <div class="quotes">
                            <i class="fa-solid fa-quote-left"></i>
                        </div>

                        <div class=" img-container rounded-circle overflow-hidden">
                            <img  src="../assets/img/27.jpeg" alt="">
                        </div>
                        <div class="user text-center mt-2 mb-3" >
                            Mac Znder <span class="role" >COO Softbox</span>
                        </div>
                        <div class="text mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex inventore ut, magnam fugiat error, similique nobis maxime, harum tempore assumenda? Quod ratione architecto, placeat error sequi nam maxime ex?</p>
                        </div>
                    </div>
                    <div class="line">
                        <div class="line-2"></div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="text-center mt-4"><i class="fa-solid fa-circle active"></i> <i class="fa-solid fa-circle"></i></div>
    </div>
</section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables'as*;
#our-testimonials{
    background-image:  url('../assets/img/15.png'),
                linear-gradient(
                    $tran-blue,
                    $white);
    background-color: $white-blue;
    background-repeat: no-repeat;
}
.ms-card{
    background-color: $white;
    position: relative;
}
.quotes{
    font-size: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 50%;
}
.line-wrapper{
    box-shadow: 0px 14px 50px -2px rgba(0,0,0,0.6);
    position: relative;

}
.line{
    width: 95%;
    opacity: 85%;
    background-color: $white;
    height: 12px;
    display: block;
    position: absolute;
    top: 100%;
    left:50%;
    transform: translateX(-50%);
    
}
.line-2{
    box-shadow: 0px 14px 50px -2px rgba(0,0,0,0.6);
    opacity: 75%;
    width: 95%;
    height: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: $white;
}
    .text{
    p{
        color: $dark-grey;
    }
}
.img-container{
    width: 60px;
}
.user{
    color: $grey-black;
    font-weight: bold;
    .role{
        color: $dark-grey;
        font-weight: 300;
    }
}
.active{
    color:$blue
}
</style>