<template>
    <section class="flex flex-col justify-items-center max-w-6xl mx-auto px-10">
        <div class="mb-16 pt-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{{ title }}</h1>
        </div>
        <slot></slot>

    </section>
</template>
  
<script setup lang="ts">
defineProps(['title'])

</script>