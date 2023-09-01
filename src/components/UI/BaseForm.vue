<template>
    <form>
        <p class="title">{{ title }}</p>
        <div class="inputs">
            <slot name="inputs">
            </slot>
        </div>
        <div class="controls">
            <slot name="controls">
            </slot>
        </div>
    </form>
</template>

<script>
export default {
    props: ['title']

};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}

.title {
    font-weight: bold;
}
.inputs {
    display: flex;
    flex-direction: column;
    gap: 8px
}

.controls {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
}
</style>