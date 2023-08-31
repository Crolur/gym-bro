<template>
	<button
		:type="type"
		class="inline-block rounded border border-indigo-600 px-6 py-3 text-sm  focus:ring focus:outline-none font-bold w-fit"
		:class="classes"
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
