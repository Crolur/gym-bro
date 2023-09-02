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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    padding: 1rem;
    background-color: white;
}

@media (min-width: 700px) {
    .card{
        max-width: 500px;
    }
}
</style>