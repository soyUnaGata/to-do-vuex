<template>
  <MainPage/>
  <nav>
    
    <router-link to="/more">More</router-link>
  </nav>
  <router-view/>
</template>

<script>
import MainPage from './views/MainPage.vue';

export default {
  name: 'App',
  components:{
    MainPage
  },
}
</script>


