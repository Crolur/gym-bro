<template>
	<label :for="id">
		<span>{{ label }}:</span>
		<input
			:type="type"
			:id="id"
			:placeholder="placeholder"
			step="0.01"
			min="0" />
	</label>
</template>

<script>
export default {
	props: ["label", "type", "id", "placeholder"],
};
</script>

<style scoped>
label {
	display: flex;
	flex-direction: column;
}

input {
	border-radius: 4px;
	padding: 0 8px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type="number"] {
	-moz-appearance: textfield;
}
</style>
