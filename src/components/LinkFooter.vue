<script>

export default{
    name :'LinkFooter.vue',
    props:{
        link: Object
    }
   
}
</script>

<template>
<li class="py-2 px-0"><a :href="link.href">{{ link.name }}</a></li>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables'as*;
li{
    color: $dark-grey;
}
</style>