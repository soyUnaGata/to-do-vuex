<template>
    <div class="nav__btns d-flex justify-content-between">
        <div style="margin: 10px 0 0 10px;">
            <button v-if="!editMode" class="btn waves-effect waves-light"
                style="color: #78909c; border: 1px solid #78909c; background-color: transparent;" type="button"
                @click="cancelTask">{{ $t('button.cancel') }}
            </button>
        </div>

        <div>
            <SelectLang />
        </div>
    </div>


    <h1 v-if="editMode" class="headline d-flex justify-content-center">{{ $t('headline.edit') }}</h1>
    <h1 v-else class="headline d-flex justify-content-center">{{ $t('headline.details') }}</h1>

    <div class="task__details-wrapper d-flex">
        <div class="task__details d-flex align-items-center">
            <TaskForm v-if="editMode" :task="task" @save="saveTask" @cancel="resetTask"></TaskForm>
            <TaskDetails v-else :task="task"></TaskDetails>
            <div>
                <button v-if="!editMode" class="btn waves-effect waves-light" type="button"
                    style="background-color: #ffee58;" @click="editMode = !editMode">
                    <i class="small material-icons">edit</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import TaskForm from "@/components/tasks/TaskForm";
import TaskDetails from "@/components/tasks/TaskDetails";
import SelectLang from "@/components/SelectLang.vue";

export default ({
    props: {
        taskId: {
            type: String,
            required: true
        }
    },
    components: {
        TaskDetails,
        TaskForm,
        SelectLang
    },
    data() {
        return {
            editMode: false,
            task: null
        }
    },
    methods: {
        async saveTask() {
            await this.$store.dispatch('updateTask', this.task);
            this.editMode = false;
        },
        resetTask() {
            const task = this.$store.getters.taskById(this.taskId);

            if (!task) {
                this.$router.push('/tasks');
                return;
            }

            this.task = Object.assign({}, task);
            this.editMode = false;
        },
        cancelTask() {
            this.$router.push('/tasks');
        }
    },
    mounted() {
        this.resetTask();
    }
})
</script>

<style>
.task__details-wrapper {
    padding: 0px 20px;
    gap: 15px;
}

.task__details {
    gap: 20px;
    width: 70%;
    margin: 0 auto;
}
</style>