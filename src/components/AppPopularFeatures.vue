<script>
export default{
    name: 'AppPopularFeatures'
}
</script>

<template>
    <section id="popular-features">
        <div class="ms-container-md">
            <div class="header">
                <div class="row">
                    <div class="col-9">
                        <h1>Popular features that yout business needs</h1>
                        <p>Faff about only a quid blower i don't want no agro bleeding chiminey<br> pot burke tosser cras nice one boot fanny!</p>
                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <button class="px-3 rounded-1">
                            Explore More Features
                        </button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                            <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img class="filter-blue" src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-3 mb-4">   
                    <div class="ms-card p-3 pb-4">
                        <div class="estetic-element">
                            <div class="hover-border">
                                <div class="hover-border"></div>
                            </div>
                        </div>
                        <h5>Customized Invoices</h5>
                        <div class="img-container mt-4">
                            <img src="../assets/img/graphic1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables'as*;
.estetic-element{
    opacity: 0;
    position: absolute;
    bottom: -20px;
    right: -20px;
    transition: 200ms ease-in;
    .hover-border{
        
        border-top: 5px dotted $white;
        border-bottom: 5px dotted $white;
        height: 15px;
        width: 50px;
        position: relative;
        
        .hover-border{
            position: absolute;
            position: absolute;
            bottom: -50%;
            left: 50%;
            transform: rotate(-90deg) translateX(50%) translateY(-50%);
        }
    }
}
.ms-card{
    box-shadow: -3px 15px 29px 1px rgba(0,0,0,0.34);
    position: relative;
    transition: 200ms ease-in;
    &:hover{
        background-color:$green ;
        h5{
            color: $white;
        }
        img{
            filter: invert(1);
        }
        .estetic-element{
            opacity: 100%;
        }
    }
    
    .img-container{
        width: 40px;
        
    }
    .filter-blue{
        filter: brightness(0) saturate(100%) invert(46%) sepia(51%) saturate(4982%) hue-rotate(207deg) brightness(101%) contrast(101%);
    }
}
</style>