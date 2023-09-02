<template>
    <div class="card-container">
        <slot></slot>
    </div>
</template>

<style>
.card-container {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 8px;
    overflow-x: auto;
    width: 100%;
}
</style>