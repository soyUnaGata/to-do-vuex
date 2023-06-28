<template>
    <h1>LIST</h1>
    <div class="d-flex" style="max-width: 450px;">
        <input type="text" placeholder="Enter your task" v-model="task.content">
        <button class="btn waves-effect waves-light w-100" type="submit" name="action" @click="addTask">+</button>
    </div>


    <div class="tasks" v-for="task in allTasks">{{ task.content }}</div>
</template>

<script>

export default ({
    data() {
        return {
            task: {
                content: '',
                completed: false
            }

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
            if (!this.task.content) return;

            await this.$store.dispatch('createTask', { content: this.task.content, userId: this.$store.getters.currentUser.id });
        }
    },
    computed: {
        allTasks() {
            return this.$store.getters.getTasks;
        }
    }
})
</script>