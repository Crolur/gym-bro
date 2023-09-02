<template>
	<base-card>
		<h2>Twoje ćwiczenia</h2>
		<base-card
			@removeCard="removeExerciseCard"
			removable="true"
			v-for="exercise in userExercisesData"
			:key="exercise.id"
			:id="exercise.id">
				<p>{{ exercise.name }}</p>
				<base-card-container>
                <base-button caption="Dodaj wartość" look="empty"/>
					<base-card
						@removeCard="removeRecordCard"
						removable="true"
						v-for="record in exercise.records"
						:key="record.id"
						:id="record.id"
						:parentId="exercise.id">
						<p class="record">{{ record.value }}&nbsp;kg</p>
					</base-card>
				</base-card-container>
            </base-card>
            <base-button caption="Dodaj ćwiczenie" look="empty"/>
	</base-card>
</template>

<script>
export default {
	props: ["userExercisesData", "userTrainingPlans"],

	methods: {
		removeExerciseCard(id) {
			this.$emit("removeCard", id, "userExercises");
		},

		removeRecordCard(id, parentId) {
			this.$emit("removeCard", id, "records", parentId);
		},

	},
};
</script>

<style>
.record {
    font-weight: 700;
    font-size: 18px;
}
</style>