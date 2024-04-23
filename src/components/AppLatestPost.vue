<script>
export default{
    name:"AppLatestPost"
}
</script>


<template>
<section id="latest-post ">
    <div class="ms-container-md my-5">
        <h3 class="text-center">Latest Posts</h3>
        <p class="text-center ">If you are planning on developing a product landing</p>
        <div class="row my-5 p-3">
            <div class="col-4">
                <div class="card position-relative p-2">
                    <img src="../assets/img/17.jpg" class="card-img-top" alt="...">
                    <div class="date p-1 rounded-1" >25 ottobre 1999</div>
                    <div class="ps-0 card-body">
                        <h5 class="card-title">Life Lack Meaning</h5>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card position-relative p-2">
                    <img src="../assets/img/18.jpg" class="card-img-top" alt="...">
                    <div class="date p-1 rounded-1" >25 ottobre 1999</div>
                    <div class="ps-0 card-body">
                        <h5 class="card-title">Life Lack Meaning</h5>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card position-relative p-2">
                    <img src="../assets/img/19.jpg" class="card-img-top" alt="...">
                    <div class="date p-1 rounded-1" >25 ottobre 1999</div>
                    <div class="ps-0 card-body">
                        <h5 class="card-title">Life Lack Meaning</h5>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables'as*;
.card{
    p{
        text-align: left;
    }
    .date{
        position: absolute;
        top:15px;
        left: 15px;
        background-color: $white;
        color: $dark-grey;
    }
}
</style>