<script>
</script>

<template>
    <section id="hero">
        <div class="container rounded-2 p-5">
            <div class="row">
                <div class="col-6 p-4 d-flex flex-column justify-content-around">
                    <div class="text">
                        <h1 class="mb-5">The biggest platform for your growth.</h1>
                        <p class="">There are many variations of passages of Lorem ipsum dolor sit, amet coreiciendis be vut the majority have suffred</p>
                    </div>
                    <div class="button">
                        <button class="rounded-1 flex-shrink-0">Read more</button>
                    </div>
                </div>
                <div class="col-6 position-relative d-flex justify-content-end"><img src="../assets/img/508.jpeg" alt=""></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables'as*;
img{
    position: absolute;
    top: 0
}
.container{
    background-color: $tran-blue;
    img{
        width: 80%;
    }
}

</style>