<template>
	<add-weight-form v-if="addingWeight" @cancelAddingWeight="closeAddingWeight" @addWeight="addWeight" />
	<base-card v-else>
		<h2>Twoja waga</h2>

		<base-card-container>
        <base-button caption="Dodaj wagę" @click="openAddWeight" look="empty"/>
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
import AddWeightForm from './AddWeightForm.vue';

export default {
	components: {AddWeightForm},
	
	props: ["userWeightData"],

	data() {
		return {
			addingWeight: false,
		}
	},

	methods: {
		removeCard(id) {
			this.$emit("removeCard", id, "userWeights");
		},

        openAddWeight() {
            this.addingWeight = true;
        },

		closeAddingWeight() {
			this.addingWeight = false;
		},

		addWeight(weightValue, dateValue) {
			this.addingWeight = false;
			this.$emit("addWeight", weightValue, dateValue)
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
