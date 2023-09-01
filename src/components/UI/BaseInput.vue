<template>
	<label :for="id">
		<span>
			{{ label }}:
		</span>
		<input
			:type="type"
			:id="id"
			:placeholder="placeholder" />
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
}
</style>