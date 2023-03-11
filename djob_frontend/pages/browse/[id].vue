<script setup>
const route = useRoute()

const {data: job} = await useFetch('http://127.0.0.1:8000/api/v1/jobs/' + route.params.id + '/')

useSeoMeta({
    title: job.value.title,
    ogTitle: job.value.title,
    description: job.value.description
})
</script>

<template>
    <div class="py-10 px-6 grid md:grid-cols-4 gap-3">
        <div class="md:col-span-3">
            <h1 class="mb-6 text-3xl">{{ job.title }}</h1>

            <p>
                {{ job.description }}
            </p>

            <a v-bind:href="'mailto:' + job.company_email" class="inline-block mt-6 py-4 px-6 bg-teal-700 text-white rounded-xl">Apply</a>
        </div>

        <div class="md:col-span-1 p-6 bg-teal-700 text-white rounded-xl">
            <h3 class="mb-6 text-2xl">Company</h3>

            <p class="mb-2">{{ job.company_name }}</p>
            <p>Loca{{ job.company_locatoin }}tion</p>

            <hr class="my-6 opacity-30">

            <h3 class="mb-6 text-2xl">Position</h3>

            <p class="mb-2">{{ job.position_location }}</p>
            <p>{{ job.position_salary }}</p>

            <hr class="my-6 opacity-30">

            <p>Posted at {{ job.created_at_formatted }}</p>
        </div>
    </div>
</template>