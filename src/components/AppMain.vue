<script >
import AppGetTips from './AppGetTips.vue';
import AppHero from './AppHero.vue';
import AppOnlinemarketing from './AppOnlinemarketing.vue';
import AppPopularFeatures from './AppPopularFeatures.vue';
import AppOutTestimonials from './AppOurTestimonials.vue';
import AppLatestPost from './AppLatestPost.vue';
import AppContact from './AppContact.vue';
export default{
    name: 'AppMain',
  components:{
    AppHero,
    AppOnlinemarketing,
    AppGetTips,
    AppPopularFeatures,
    AppOutTestimonials,
    AppLatestPost,
    AppContact
    
  }
}
</script>

<template>
 <AppHero></AppHero>
 <AppOnlinemarketing></AppOnlinemarketing>
 <AppGetTips></AppGetTips>
 <AppPopularFeatures></AppPopularFeatures>
 <AppOutTestimonials></AppOutTestimonials>
 <AppLatestPost></AppLatestPost>
 <AppContact></AppContact>
</template>

<style lang="scss" scoped>

</style>
