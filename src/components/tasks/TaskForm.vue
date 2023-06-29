<template>
    <div v-if="task" class="container">
      <form @submit.prevent="$emit('save')">
        <div class="row">
          <div class="input-field col s12">
            <input id="content" type="text" v-model="task.content" required>
            <label for="content">Content</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="note" class="materialize-textarea" v-model="task.note"></textarea>
            <label for="note">Note</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button class="btn waves-effect waves-light" type="button" @click="$emit('cancel')">Cancel</button>
            <button class="btn waves-effect waves-light" type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
</template>


<script>
    export default ({
        props: {
            task: {
                type: Object,
                required: true
            }
        }
    })
</script>