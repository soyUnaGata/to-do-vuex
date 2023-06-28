<template>
    <div class="page-wrapper d-flex align-items-center justify-content-center">
        <form class="col s12" @submit.prevent="submit">
            <div class="row">
                <div class="input-field col s12">
                    <input placeholder="Enter your Username..." v-model="username" id="first_name" type="text" class="validate">
                </div>
            </div>

            <button class="btn waves-effect waves-light w-100" type="submit" name="action">Submit</button>
        </form>
    </div>
</template>
  
<script>
export default ({
    data() {
        return {
            username: ''
        }
    },
    methods: {
        async submit(){
            if (!this.username) return;

            await this.$store.dispatch('fetchUser', this.username);

            if (!this.$store.getters.currentUser) await this.$store.dispatch('createUser', { username: this.username });
            if (!this.$store.getters.currentUser) return;

            this.$router.push('/tasks')
        }
    }
})
</script>