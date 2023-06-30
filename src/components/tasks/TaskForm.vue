<template>
    <div v-if="task" class="container">
      <form @submit.prevent="$emit('save')">
        <div class="row">
          <div class="input-field col s12">
            <input id="content" type="text" v-model="task.content" required>
            <label for="content">{{ $t('input.content') }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="note" class="materialize-textarea" v-model="task.note"></textarea>
            <label for="note">{{ $t('input.note') }}</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button class="btn waves-effect waves-light" style="color: #78909c; border: 1px solid #78909c; background-color: transparent;" type="button" @click="$emit('cancel')">{{ $t('button.cancel') }}</button>
            <button class="btn waves-effect waves-light" style="background-color: #66bb6a;" type="submit">{{ $t('button.save') }}</button>
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