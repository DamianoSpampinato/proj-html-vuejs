<script>
import{store} from '../store.js';
import LinkNav from './LinkNav.vue';
export default{
    name: 'AppHeader',
    components:{
        LinkNav
    },
    data(){
        return{
            store
        }
    }

}
</script>

<template>
<header>
    <div class="ms-container-md">
        <div class="row justify-content-between">
            <div class="col-2">
                <div class="img-container">
                    <img src="../assets/img/logo-2.png" alt="">
                </div>
            </div>
            <div class="col-6 flex-nowrap align-items-center d-flex justify-content-end gap-3">
                <nav class="d-flex align-items-center">
                   <LinkNav v-for="link in store.navLinks" :link="link"></LinkNav>
                </nav>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <button class="py-2 px-1 rounded-1">Get Started</button>
                
            </div>
        </div>
        
    </div>
</header>
</template>

<style lang="scss" scoped>
@use '../style/generic';
@use '../style/partials/variables' as *;
.img-container{
    width: 50px;
}
header{
    padding-bottom: 10px;
    padding-top: 5px;
    
    button{
        background-color: $blue;
        border: none;
        color: $white;
    }
    li{
        color: $black;
    }
    .active{
        border-bottom: 1px solid $blue;
        color: $blue
    }
}
</style>