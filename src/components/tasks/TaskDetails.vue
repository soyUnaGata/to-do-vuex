<template>
  <div v-if="task" class="container">
    <div class="row">
      <div class="col s12">
        <p>Content:</p>
        <span>{{ task.content }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <p>Note:</p>
        <span>{{ task.note }}</span>
      </div>
    </div>
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