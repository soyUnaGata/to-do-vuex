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
import UsersService from '@/services/users-service.js'
import { useRouter } from 'vue-router';

export default ({
    data() {
        return {
            username: ''
        }
    },
    methods: {
        async submit(){
            if (!this.username) return;

            let user = await UsersService.get(this.username);

            if (!user) user = await UsersService.create({ username: this.username });
            if (!user) return;

            this.$router.push('/tasks')
        }
    }
})
</script>