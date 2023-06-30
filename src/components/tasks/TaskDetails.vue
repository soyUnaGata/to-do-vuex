<template>
    <div v-if="task" class="container">
        <div class="row">
            <div class="col s12">
                <p class="subtitile">{{ $t('input.content') }}:</p>
                <span>{{ task.content }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <p class="subtitile">{{ $t('input.note') }}:</p>
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

<style>
    .subtitile {
        font-size: 18px;
        font-weight: 700;
    }
</style>