<script>
import LinkFooter from './LinkFooter.vue';

export default{
    name: 'AppFooter',
    components:{
        LinkFooter
    },
    data(){
        return{
            MenuLinks: [
                {
                    href: '#',
                    name:'About Us',
                },
                {
                    href: '#',
                    name:'Theme',
                },
                {
                    href: '#',
                    name:'Features',
                },
                {
                    href: '#',
                    name:'Pricing',
                },
                {
                    href: '#',
                    name:'Blog',
                },
            ],
            AboutUsLinks: [
                {
                    href: '#',
                    name:'About Softbox',
                },
                {
                    href: '#',
                    name:'Roadmap',
                },
                {
                    href: '#',
                    name:'How it works',
                },
                {
                    href: '#',
                    name:'Team',
                },
                {
                    href: '#',
                    name:'News',
                },
            ],
            QuickLinksLinks: [
            {
                    href: '#',
                    name:'About Us',
                },
                {
                    href: '#',
                    name:'Theme',
                },
                {
                    href: '#',
                    name:'Features',
                },
                {
                    href: '#',
                    name:'Pricing',
                },
                {
                    href: '#',
                    name:'Blog',
                },
            ],
        }
    }
}
</script>

<template>
<footer>
<div class="ms-container-md">
    <div class="row p-5">
        <div class="col-3 color-grey">
            <div class="img-container">
                <img src="../assets/img/35.png" alt="">
            </div>
            <p class="mt-3 mb-4">It's all a established fact that a reader will be distracted by the readable content.</p>
            <div>
                Copyright @ 2018 <span>Softbox</span>
            </div>
        </div>
        <div class="col-9 px-5 ">
            <div class="row">
                <div class="col-4">
                    <h4 class=" text-left">Menu</h4>
                    <ul>
                        <LinkFooter class="text-left" v-for="link in MenuLinks" :link="link"></LinkFooter>
                    </ul>
                </div>
                <div class="col-4">
                    <h4 class=" text-left">About Us</h4>
                    <ul>
                        <LinkFooter class="text-left" v-for="link in AboutUsLinks" :link="link"></LinkFooter>
                    </ul>
                </div>
                <div class="col-4">
                    <h4 class=" text-left">Quick Links</h4>
                    <ul>
                        <LinkFooter class="text-left" v-for="link in QuickLinksLinks" :link="link"></LinkFooter>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</footer>
</template>

<style lang="scss" scoped>
@use './src/style/partials/variables'as*;
footer{
    .col-3{
        p{
            line-height: 1.8rem;
        }
        span{
            color: $blue;
        }
    }
    ul{
        padding: 0;
    }
    .color-grey{
        color:$dark-grey
    }
    border-top: 2px solid $dark-grey;
    .img-container{
        width: 150px;
    }
}
</style>