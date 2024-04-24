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
            <div class="col-6">
                <div class="map">
                    <img src="../assets/img/StaticMapService.GetMapIma.png" alt="">
                    <div class="indications-wrapper px-3 p-2">
                        <div class="row">
                            <div class="col-9">
                                <div class="indications">
                                    <div>
                                        <strong>Storey Ave</strong>
                                    </div>
                                    <div>
                                        <small>San Francisco, California 94129</small>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
    
                                <div class="icon">
                                    <img class="icon-1" src="../assets/img/entity11.png" alt="">
                                </div>
                                <div class="text-small">indicazi</div>
                            </div>
                        </div>
                            <div class="map-bigger mt-3">Visualizza mappa più grande</div>
                    </div>
                    <!-- zoom button -->
                    <div class="zoom">
                        <div class="btn d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="btn d-flex justify-content-center align-items-center border-top">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                    </div>
                    <!-- satellite image -->
                    <div class="satellite">
                        <img src="../assets/img/satellite.jpg" alt="">
                    </div>
                    <!-- RED POINTER -->
                    <div class="red-pointer">
                        <div class="icon">
                            <img class="icon-red-pointer" src="../assets/img/entity11.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <span>Dati mappa 2020</span>
                        <span>Termini e condizioni d'uso</span>
                        <span>Segnala un errore nella mappa</span>
                    </div>
                </div>
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
                            <div>

                                <button class="px-3 rounded-1">Send Message</button>
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
.map{
position: relative;
    .indications-wrapper{
        position: absolute;
        top: 15px;
        left: 15px;
        background-color: $white;
        .map-bigger{
            color: $blue;
            font-weight: 500;
            cursor: pointer;
        }
    }
    .col-3{
        overflow: hidden;

    }
    .text-small{
        font-size: 14px;
        color: $blue;
        font-weight: 500;
    }
}
.icon{
    margin: 0 auto;
    width: 30px;
    height: 30px;
   overflow: hidden;
   cursor: pointer;

    img{
        width: 90px;
    }
    .icon-1{
        
        object-fit: contain;

    }


}
.zoom{
    width: 50px;
    height: 100px;
    background-color: white;
    position: absolute;
    bottom: 20px;
    right: 15px;
    cursor: pointer;

    .btn{
        color: grey;
        width: 100%;
        height: 50%;
        border: none;
       
    }
}
.satellite{
    width: 70px;
    height: 70px;
    overflow:hidden;
    padding: 5px;
    background-color: white;
    position: absolute;
    left: 15px;
    bottom: 15px;
    cursor: pointer;

    
        img{
            height: 59px;
            
        }
    
}
.red-pointer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.icon-red-pointer{
    object-fit: cover;
    object-position: -30px -85px;
    cursor: pointer;
   
}
.info{
    font-size: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    span{
        background-color: lightgrey;
        margin: 0 2px;
        cursor: pointer;
    }
}
</style>