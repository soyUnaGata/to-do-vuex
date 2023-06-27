<template>
  <div class="wrapper d-flex">
    <div class="container d-flex flex-column align-items-center">
      <h3 class="headline">MY TO DO LIST</h3>

      <div class="add-task-input">
        <input type="text" class="add-task-text">
        <button class="save-task">Save</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  
}
</script>


<style>
.container {
  margin: 0 auto;
  gap: 20px;
}
.headline {
  margin-top: 75px;
  color: var(--main-color);
  font-size: 40px;
  font-weight: 900;
}
</style>
