<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="All Courses" />
      <PageDescription description="웹 개발부터 입문까지" />
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for="{ courseSlug, thumbnail, title, subtitle, path } in courses" :key="courseSlug" class="col-12 col-md-4 col-sm-6">
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <CourseCard :thumbnail="thumbnail" :title="title" :subtitle="subtitle" @click="navigate" />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = await useCourses();
</script>
