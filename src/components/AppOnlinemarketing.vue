<script>
export default{
    name: 'AppOnlinemarketing'
}
</script>

<template>
    <section id="marketing" >    
        <div class="ms-container-md">
            <div class="row">
                <div v-for="n in 3" class="col-4">
                    <div class="row">
                        <div class="col-2">
                            <img src="../assets/img/24.png" alt="">
                        </div>
                        <div class="col-10">
                            <h5>Online Marketing</h5>
                            <p>It's all a established fact that a render will be distracted</p>
                            <ul>
                                <li><i class="fa-solid fa-check me-2"></i> SEO</li>
                                <li><i class="fa-solid fa-check me-2"></i> SEM</li>
                                <li><i class="fa-solid fa-check me-2"></i> Website Strategy</li>
                                <li><i class="fa-solid fa-check me-2"></i> Social management</li>
        
                            </ul>
                        </div>
                    </div>
                    
                </div>
             
            </div>
            
            
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;
#marketing{
    margin-top: 5rem;
    ul{
        
        padding: 0;
        li{
            margin: 0.5rem auto;
            color:$dark-grey

        }
        .fa-solid{
            color: $blue;
        }
    }
}
</style>