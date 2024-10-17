<script setup lang="ts"></script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <UHorizontalNavigation
      :links="[
        {
          label: 'Users',
          to: '/',
        },
        {
          label: 'About',
          to: '/about',
        },
      ]"
      class="border-b border-gray-200 dark:border-gray-800"
    />
    <div class="px-5">
      <NuxtPage />
    </div>
  </div>
</template>
