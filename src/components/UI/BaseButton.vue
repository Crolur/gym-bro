<template>
	<button
		:type="type"
		
		>

		{{ caption }}
	</button>

</template>

<script>
export default {
	props: ["type", "caption", "look"],

	computed: {
		classes() {
			if(this.look === 'base') {
				return 'bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 active:text-indigo-500'
			}

			if(this.look === 'border') {
				return ' text-indigo-600 hover:bg-indigo-600 hover:text-white active:bg-indigo-500'
			}

			return ''
		}
	}
};
</script>
