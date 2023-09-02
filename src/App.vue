<template>
	<user-weights
	:userWeightData="userData.userWeights"
	/>
	
	<!-- <base-card bgColor="#ccc">
		<base-form title="Tytuł">
			<template #inputs>
				<base-input
					id="nazwa"
					label="Nazwa"
					type="text" />
				<base-input
					id="data"
					label="Data"
					type="date" />
				<base-input
					id="waga"
					label="Waga"
					type="number"
					placeholder="10" />
			</template>
			<template #controls>
				<base-button
					type="submit"
					caption="Dodaj"
					look="base" />
				<base-button
					caption="Anuluj"
					look="empty" />

			</template>
		</base-form>
	</base-card> -->
</template>

<script>
import userDataJSON from "./assets/userData.json";
import userWeights from "./components/userWeights.vue";

export default {
	components: {
		userWeights,
	},

	data() {
		return {
			userData: userDataJSON,
		};
	},

	created() {
		console.log(this.userData);
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
</style>
