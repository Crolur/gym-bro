<template>
    <form class="flex flex-col gap-y-5 max-w-md items-center border-2 rounded-lg pb-4">
        <p class="border-b-2 text-center font-bold w-full py-4 text-xl">{{ title }}</p>
        <div class="flex flex-col gap-y-5 w-80">
            <slot name="inputs">
            </slot>
        </div>
        <div class="flex flex-wrap gap-4 w-80">
            <slot name="controls">
            </slot>
        </div>
    </form>
</template>

<script>
export default {
    props: ['title']

};
</script>
