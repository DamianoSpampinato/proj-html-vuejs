<script>
export default{
    name: 'AppGetTips'
}
</script>

<template>
    <section id="get-tips">
        <div class="ms-container-md">
            <div class="row">
                <div class="col-6">
                    <h1>Get tip tricks on how to skyrocket your sakes.</h1>
                    <p class="mt-4">Faff about only a quid blower i don't want no agro bleeding chiminey pot burke tosser cras nice one boot fanny!</p>
                    <div class="ms-card d-flex align-items-center p-3 gap-3 active mt-5">
                        <div class="img-container">
                            <img src="../assets/img/510.png" alt="">
                        </div>
                        <div class="text">
                            <h5>Reporting Analysis</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when lookign at its layout.</p>
                        </div>
                    </div>
                    <div class="ms-card mt-4 d-flex align-items-center p-3 gap-3">
                        <div class="img-container">
                            <img src="../assets/img/511.png" alt="">
                        </div>
                        <div class="text">
                            <h5>Technical SEO Audit</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when lookign at its layout.</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-end ">
                    <img class="p-5 pt-3" src="../assets/img/509.jpeg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables'as*;
.img-container{
    width:95px
}


.ms-card{
    &.active{
        h5{
            color: $blue
        }
        box-shadow: -3px 15px 29px 1px rgba(0,0,0,0.34)
    }
    p{
        line-height: 1.8rem;
        color:$dark-gray;
    }
}
</style>