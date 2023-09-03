<template>
	<base-card>
		<base-form title="Dodaj wagę">
			<template #inputs>
				<base-input
					type="date"
					label="Data"
					id="dateInput"
                    ref="dateInput"
                    />
				<base-input
					type="number"
					label="Waga"
					id="weightInput"
					placeholder="kg"
                    ref="weightInput"
                    />
			</template>
			<template #controls>
				<base-button
					caption="Dodaj"
                    type="submit"
					@click.prevent="addWeight" />
				<base-button
					caption="Anuluj"
					@click.prevent="cancelAddingWeight" />
			</template>
		</base-form>
	</base-card>
</template>

<script>
export default {

    emits:["cancelAddingWeight", "addWeight"],

	methods: {
		cancelAddingWeight() {
			this.$emit("cancelAddingWeight");
		},

		addWeight() {
            const weightValue = this.$refs.weightInput.$refs.input.value;
            const dateValue = this.$refs.dateInput.$refs.input.value;
            if(weightValue.trim() != '') {
                this.$emit("addWeight", weightValue, dateValue);
            }
		},

	},
};
</script>
