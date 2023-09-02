<template>
	<div
		class="card"
		:style="{ backgroundColor: bgColor }">
		<div
			class="remove"
			v-if="removable"
            @click="removeCard"
            :id="id"
            >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-trash"
				viewBox="0 0 16 16">
				<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
				<path
					d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
			</svg>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ["id", "bgColor", "removable", "parentId"],


    methods: {
        removeCard(){
            this.$emit('removeCard', this.id, this.parentId)
            
        }
    },

    emits: ['removeCard']
};
</script>

<style scoped>
.card {
	position: relative;
	border: 1px solid black;
	border-radius: 4px;
	max-width: 320px;
	min-height: 65px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 16px;
	padding: 1rem;
	background-color: white;
}
.remove {
	position: absolute;
	top: 5px;
	right: 5px;
	color: #8e8e8e;
	cursor: pointer;
}

@media (min-width: 700px) {
	.card {
		max-width: 500px;
	}
}
</style>
