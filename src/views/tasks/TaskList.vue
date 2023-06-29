<template>
    <h1>LIST</h1>
    <div class="d-flex" style="max-width: 450px;">
        <input type="text" placeholder="Enter your task" v-model="content">
        <button class="btn waves-effect waves-light w-100" type="submit" name="action" @click="addTask">+</button>
    </div>


    <div class="task d-flex" style="margin: 0 auto; width: 300px;" v-for="task in allTasks">
        <div class="about-task d-flex">
            <p>
                <label>
                    <input type="checkbox" @click="completedTask(task)" v-model="task.completed" />
                    <span></span>
                </label>
            </p>
            <div class="task-content">{{ task.content }}</div>
            <router-link class="btn waves-effect waves-light" :to="{ name: 'details', params: { taskId: task.id }}">Edit</router-link>
            <button class="btn waves-effect waves-light" style="background-color: tomato;" type="button" name="action" @click="deleteTask(task)">Delete</button>
        </div>

    </div>
</template>

<script>

export default ({
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