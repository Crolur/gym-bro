<template>
	<base-card>
		<h2>Twoja waga</h2>

		<base-card-container>
        <base-button caption="Dodaj wagę" @click="addWeight" look="empty"/>
			<base-card
				removable="true"
				v-for="weight in userWeightData"
				:key="weight"
				:id="weight.id"
				@removeCard="removeCard">
				<p class="weight-value">{{ weight.value }}&nbsp;kg</p>
				<p class="weight-date">{{ weight.date }}</p>
			</base-card>
		</base-card-container>
	</base-card>
</template>

<script>
export default {
	props: ["userWeightData"],

	methods: {
		removeCard(id) {
			this.$emit("removeCard", id, "userWeights");
		},

        addWeight() {
            this.$emit("addWeight")
        }
	},

	emits: ["removeCard", "addWeight"],
};
</script>

<style scoped>
.weight-value {
	font-size: 20px;
	font-weight: 700;
}

.weight-date {
	font-size: 14px;
}
</style>
