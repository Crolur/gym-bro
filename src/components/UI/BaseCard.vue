<template>
    <div class="card" :style="{backgroundColor: bgColor}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['bgColor']
}
</script>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 4px;
    max-width:320px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem;
}

@media (min-width: 700px) {
    .card{
        max-width: 500px;
    }
}
</style>