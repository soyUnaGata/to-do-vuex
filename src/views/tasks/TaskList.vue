<template>
    <h1>LIST</h1>
    <div class="d-flex" style="max-width: 450px;">
        <input type="text" placeholder="Enter your task" v-model="task.content">
        <button class="btn waves-effect waves-light w-100" type="submit" name="action" @click="addTask">+</button>
    </div>
</template>

<script>
import TasksService from '@/services/tasks-service.js'

export default ({
    data() {
        return {
            task: {
                content: '',
                completed: false
            },
            
        }
    },
    mounted() {
        if(!this.$store.getters.currentUser) {
            this.$router.push('/');
            return;
        }

        this.tasks = TasksService.getAll(this.$store.getters.currentUser.id);
    },
    methods: {
        async addTask() {

            if (!this.task.content) return;

            let task = await TasksService.get(this.task);

            if (!task) task = await TasksService.create({ tasks: this.task });
          
       
            console.log(task)
        }
    }
})
</script>