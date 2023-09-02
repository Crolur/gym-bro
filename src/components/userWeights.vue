<template>
    <base-card>
    <h2>Twoja waga</h2>

    <base-card-container>
        <base-card
        v-for="weight in userWeightData"
        :key="weight"
        >
        <p class="weight-value">{{ weight.value }}</p>
        <p class="weight-date">{{ weight.date }}</p>
    </base-card>
    </base-card-container>
    </base-card>
</template>

<script>
export default {
    props: ['userWeightData'],
    

}
</script>

<style scoped>
.weight-value {
    font-size: 24px;
    font-weight: 700;
}

.weight-date {
    font-size: 14px;
}
</style>