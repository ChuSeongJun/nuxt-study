<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin Page" />
      <PageDescription description="어드민 레이아웃 실습페이지" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
  // middleware: 'admin-only'

  // middleware: ['admin-only']
  // 여러개면 배열로 설정을 할 수 있다.
});
</script>

<style scoped></style>
