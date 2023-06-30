<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('fetchLanguges');
    this.$store.dispatch('fetchLanguage');

    //TODO imposible broken case
    if (!this.$store.getters.allLanguages.length) {
      return;
    }

    if (!this.$store.getters.currentLanguage){ 
      this.$store.dispatch('updateLanguage', this.$store.getters.allLanguages[0].code);
    }
    this.$i18n.locale = this.$store.getters.currentLanguage;
  }
}
</script>


