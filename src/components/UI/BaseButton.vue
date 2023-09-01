<template>
	<button
		:type="type"
		:class="look"
		>

		{{ caption }}
	</button>

</template>

<script>
export default {
	props: ["type", "caption", "look"],


};
</script>

<style scoped>
button {
	width: fit-content;
	padding: .5rem 1rem;
	border: 2px solid black;
	background: black;
	color: white;
	font-weight: bold;
	cursor: pointer;
}

button:hover {
	background: white;
	color: black;
}

.empty {
	background: white;
	color: black;
}

.empty:hover {
	background: black;
	color: white;
}

</style>
