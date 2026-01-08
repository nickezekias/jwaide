<script setup lang="ts">
import TopBar from '@/layouts/app/TopBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- <NikkToast /> -->

    <TopBar />

    <div class="flex flex-grow">
      <main class="flex-grow max-w-screen pb-[100vh] md:pb-32 overflow-x-hidden">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
