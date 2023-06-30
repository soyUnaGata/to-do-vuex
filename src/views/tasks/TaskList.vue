<template>
    <div class="page-header d-flex justify-content-end align-items-center">
        <SelectLang />
    </div>

    <h1 class="headline d-flex justify-content-center">{{ $t('headline.list') }}</h1>

    <div class="list__wrapper d-flex flex-column">
        <div class="enter__task d-flex" >
            <input type="text" class="input-for-adding"  :placeholder="$t('placeholder.task')" v-model="content">
            <button class="btn waves-effect waves-light" style="background-color: #66bb6a;" type="submit" name="action" @click="addTask"><i class="small material-icons">add</i></button>
        </div>

        <div class="task__wrapper d-flex flex-column" style="margin: 0 auto; gap: 15px;">
            <div class="task d-flex"  v-for="task in allTasks">
                <div class="about-task d-flex">
                    <p class="task-complete-wrapper">
                        <label>
                            <input type="checkbox" @click="completedTask(task)" v-model="task.completed" />
                            <span></span>
                        </label>
                    </p>
                    <div class="task-content">{{ task.content }}</div>
                    <router-link class="btn d-flex justify-content-center waves-effect waves-light" style="background-color: #29b6f6;" :to="{ name: 'details', params: { taskId: task.id } }"><i class="small material-icons">info</i></router-link>
                    <button class="btn d-flex justify-content-center waves-effect waves-light" style="background-color: #ef5350;" type="button" name="action" @click="deleteTask(task)"> <i class="small material-icons">delete</i></button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import SelectLang from '@/components/SelectLang.vue';

export default ({
    components: {
        SelectLang
    },
    data() {
        return{
            content:'',
        }
    },
    mounted() {
        if (!this.$store.getters.currentUser) {
            this.$router.push('/');
            return;
        }

        this.$store.dispatch('fetchTasks', this.$store.getters.currentUser.id);  
    },
    methods: {
        async addTask() {
            if (!this.content) return;

            await this.$store.dispatch('createTask', { content: this.content, userId: this.$store.getters.currentUser.id });

            this.content = '';
        },
        async completedTask(task){
            await this.$store.dispatch('completeTask', task)
        },
        async deleteTask(task){
            await this.$store.dispatch('deleteTask', {userId: this.$store.getters.currentUser.id, taskId: task.id })
        }

    },
    computed: {
        allTasks() {
            return this.$store.getters.allTasks;
        },
    }
})
</script>

<style>
.list__wrapper{
    gap: 20px; 
}
.enter__task {
    margin: 0 auto;
    gap: 20px;
}
.input-for-adding {
    width: 580px;
}

</style>