<template>
	<user-weights
		:userWeightData="userData.userWeights"
		@removeCard="removeCard"
		@addWeight="addWeight"
		/>

	<user-exercises
		@removeCard="removeCard"
		:userExercisesData="userData.userExercises"
		:userTrainingPlans="userData.userTrainingPlans" />
</template>

<script>
import UserWeights from "./components/UserWeights.vue";
import UserExercises from "./components/UserExercises.vue";

const getDate = () => {
	const currentDate = new Date().toJSON().slice(0,10).split('-').reverse().join('-');
	const idFromTimestamp = new Date().getTime().toString();

	return {
		currentDate,
		idFromTimestamp
	}

}

export default {
	components: {
		UserWeights,
		UserExercises,
	},

	data() {
		return {
			userData: {
				userName: "Adam",
				userId: 0,
				userWeights: [
					{
						date: "01-05-2023",
						value: 80,
						id: "1",
					},
					{
						date: "01-04-2023",
						value: 81,
						id: "2",
					},
					{
						date: "01-03-2023",
						value: 82,
						id: "3",
					},
					{
						date: "01-02-2023",
						value: 83,
						id: "4",
					},
					{
						date: "01-01-2023",
						value: 84,
						id: "5",
					},
				],
				userExercises: [
					{
						id: "0",
						name: "Ćw1",
						records: [
							{ id: "1", value: 6 },
							{ id: "2", value: 5 },
							{ id: "3", value: 4 },
							{ id: "4", value: 3 },
							{ id: "5", value: 2 },
							{ id: "6", value: 1 },
						],
					},
					{
						id: "1",
						name: "Ćw2",
						records: [
							{ id: "11", value: 6 },
							{ id: "22", value: 5 },
							{ id: "33", value: 4 },
							{ id: "44", value: 3 },
							{ id: "55", value: 2 },
							{ id: "66", value: 1 },
						],
					},
					{
						id: "2",
						name: "Ćw3",
						records: [
							{ id: "111", value: 6 },
							{ id: "222", value: 5 },
							{ id: "333", value: 4 },
							{ id: "444", value: 3 },
							{ id: "555", value: 2 },
							{ id: "666", value: 1 },
						],
					},
					{
						id: "3",
						name: "Ćw4",
						records: [
							{ id: "1111", value: 6 },
							{ id: "2222", value: 5 },
							{ id: "3333", value: 4 },
							{ id: "4444", value: 3 },
							{ id: "5555", value: 2 },
							{ id: "6666", value: 1 },
						],
					},
					{
						id: "4",
						name: "Ćw5",
						records: [
							{ id: "11111", value: 6 },
							{ id: "22222", value: 5 },
							{ id: "33333", value: 4 },
							{ id: "44444", value: 3 },
							{ id: "55555", value: 2 },
							{ id: "66666", value: 1 },
						],
					},
				],
				userTrainingPlans: [
					{
						id: "0",
						name: "A",
						exercisesId: [
							{ id: "0", value: 0 },
							{ id: "1", value: 2 },
							{ id: "2", value: 4 },
						],
					},
					{
						id: "1",
						name: "B",
						exercisesId: [
							{ id: "0", value: 1 },
							{ id: "1", value: 3 },
						],
					},
				],
			},
		};
	},

	created() {
		console.log(this.userData);
	},

	methods: {
		addWeight(weightValue, dateValue) {
			this.userData.userWeights.unshift({
				date: dateValue,
				value: weightValue,
				id: getDate().idFromTimestamp,
			});
		},

		removeCard(id, arr, parentId) {
			let elementToRemove, indexOfElementToRemove, parentElement;
			switch (arr) {
				case "userWeights":
					elementToRemove = this.userData.userWeights.find((element) => element.id === id);
					indexOfElementToRemove = this.userData.userWeights.indexOf(elementToRemove);

					this.userData.userWeights.splice(indexOfElementToRemove, 1);
					break;

				case "userExercises":
					elementToRemove = this.userData.userExercises.find((element) => element.id === id);
					indexOfElementToRemove = this.userData.userExercises.indexOf(elementToRemove);

					this.userData.userExercises.splice(indexOfElementToRemove, 1);
					break;

				case "records":
					parentElement = this.userData.userExercises.find((element) => element.id === parentId);
					elementToRemove = parentElement.records.find((element) => element.id === id);
					indexOfElementToRemove = parentElement.records.indexOf(elementToRemove);

					parentElement.records.splice(indexOfElementToRemove, 1);
					break;

				case "userTrainingPlans":
					elementToRemove = this.userData.userTrainingPlans.find((element) => element.id === id);
					indexOfElementToRemove = this.userData.userTrainingPlans.indexOf(elementToRemove);

					this.userData.userTrainingPlans.splice(indexOfElementToRemove, 1);
					break;

				case "exercisesId":
					elementToRemove = this.userData.userTrainingPlans.exercisesId.find((element) => element.id === id);
					indexOfElementToRemove = this.userData.userTrainingPlans.exercisesId.indexOf(elementToRemove);

					this.userData.userTrainingPlans.exercisesId.splice(indexOfElementToRemove, 1);
					break;
			}
		},
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Changa:wght@200;400;700&display=swap");

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body * {
	font-family: "Changa", sans-serif;
	line-height: 1rem;
}

#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 40px;
}
</style>
