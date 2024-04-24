<script>

export default{
    name :'LinkNav.vue',
    props:{
        link: Object
    }
   
}
</script>

<template>
<li class="py-2" :class="{active: link.active}"><a :href="link.href">{{ link.name }}</a></li>
</template>

<style lang="scss" scoped>

</style>