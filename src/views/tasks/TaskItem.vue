<template>
    <button v-if="!editMode" type="button" @click="editMode = !editMode">Edit</button>
    
    <TaskForm v-if="editMode" :task="task" @save="saveTask" @cancel="resetTask"></TaskForm>
    <TaskDetails v-else :task="task"></TaskDetails>
</template>

<script>
    import TaskForm from "@/components/tasks/TaskForm";
    import TaskDetails from "@/components/tasks/TaskDetails";

    export default ({
        props: {
            taskId: {
                type: String,
                required: true
            }
        },
        components:{
            TaskDetails,
            TaskForm
        },
        data(){
            return {
                editMode: false,
                task: null
            }
        },
        methods: {
            async saveTask(){
                await this.$store.dispatch('updateTask', this.task);
                this.editMode = false;
            },
            resetTask(){
                const task = this.$store.getters.taskById(this.taskId);

                if(!task) 
                {
                    this.$router.push('/tasks');
                    return;
                }

                this.task = Object.assign({}, task);  
                this.editMode = false;
            }
        },
        mounted(){
            this.resetTask();
        }
    })
</script>