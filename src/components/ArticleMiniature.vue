<template>
    <a :href="`/artykul/${articleId}`">
        <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time :datetime="date" class="text-gray-500">{{ date.toLocaleDateString() }}</time>
                <a v-for="tag in tags" href="#"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ tag }}
                </a>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span class="absolute inset-0"></span>
                    {{ title }}
                </h3>
                <div class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" v-html="articleContent"></div>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
                <img v-if="authorPhoto" :src="authorPhoto"  class="h-16 w-16 rounded-full bg-gray-50">
                <UserCircleIcon v-else class="h-16 w-16 text-gray-200"/>
                <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                        <!-- <a href="#"> -->
                        <span class="absolute inset-0"></span>
                        {{ author }}
                        <!-- </a> -->
                    </p>
                    <p class="text-gray-600">{{ authorRole }}</p>
                </div>
            </div>
        </article>
    </a>
</template>

<script setup lang="ts">
import {
  UserCircleIcon
} from '@heroicons/vue/24/solid'
import { marked } from "marked";
const props = defineProps(['title', 'author', 'authorRole', 'content', 'authorPhoto', 'date', 'articleId', 'tags'])

const articleContent = marked.parse(props.content ?? "");
</script>