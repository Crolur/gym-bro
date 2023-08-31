<template>
	a
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
				type="number" />
		</template>
		<template #controls>
			<base-button
				type="submit"
				caption="Dodaj"
				look="base" />
			<base-button
				type="submit"
				caption="Dodaj"
				look="border" />
			<base-button
				type="submit"
				caption="Dodaj"
				look="border" />
			<base-button
				type="submit"
				caption="Dodaj"
				look="border" />
		</template>
	</base-form>
</template>

<script></script>

<style></style>
