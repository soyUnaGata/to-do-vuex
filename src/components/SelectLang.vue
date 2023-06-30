<template>
    <div class="d-flex justify-content-end align-items-end">
        <select class="select-lang d-flex " v-model="lang">
            <option v-for="language in $store.getters.allLanguages" :value="language.code" :key="language.code">
                {{ language.name }}
            </option>
        </select>
    </div>
</template>
  
<script>
export default {
    computed: {
        lang:{
            get(){
                return this.$store.getters.currentLanguage;
            },
            set(value){
                this.$store.dispatch('updateLanguage', value);
                this.$i18n.locale = this.$store.getters.currentLanguage;
            }
        }
    }
};
</script>

<style>
.select-lang {
    width: 200px;
    margin: 10px 10px 0px 0;
}
</style>