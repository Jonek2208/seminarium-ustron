<template>
    <div class="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <img src="/src/assets/seminarium-dron2.png" alt=""
            class="blur-sm brightness-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <!-- <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="lg:flex flex-row">

                <img src="/src/assets/seminarium-rekrutacja.jpg" class="mr-20 max-h-96 pb-4" alt="">
                <div class="mx-auto max-w-2xl lg:mx-0 text-base text-white ">
                    <h1 class="text-4xl font-semibold">Rekrutacja 2024</h1>
                    <!-- <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">40-lecie Seminarium Teologicznego w Ustroniu</h2> -->
                    <p class="mt-6 text-lg leading-8">
                        Seminarium Teologiczne w Ustroniu ogłasza nabór na lata 2024-2026
                        Zapraszamy do nauki w Seminarium wszystkich, którzy pragną pogłębić poznanie Boga i Jego Słowa.
                    </p>
                    <p class="mt-6 text-lg leading-8">
                        Przyjęcia do Seminarium odbędą się 22 lutego 2024 roku w godzinach 8.00 - 10.00 w siedzibie Seminarium.
                    </p>
                    <div class="text-slate-200 mt-10 py-4 text-2xl font-semibold">
                        <a href="/artykul/rekrutacja-2024">Zobacz więcej <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Artykuły</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Najnowsze artykuły</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <ArticleMiniature v-for="article in articlesUnpacked" :title="article.title" :author="article.author.name"
                    :author-role="article.author.title" :author-photo="article.author.imageUrl()" :content="article.content"
                    :date="article.date" :article-id="article.articleId" :tags="article.tags" />
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import ArticleMiniature from '../components/ArticleMiniature.vue'
import { people, articles } from '../data'
import type { Person } from '../data'

let articlesUnpacked: { title: string, content: string, date: Date, author: Person, articleId: string, tags: string[] }[] = []
for (let article of articles) {
    const author = people.find((x) => x.id === article.authorId)
    if (author) {
        articlesUnpacked.push({ title: article.title, content: article.content, author, date: article.date, articleId: article.articleId, tags: article.tags })
    }
}

</script>