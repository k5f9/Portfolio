<template>
  <NuxtLayout>
    <ClientOnly>
      <Transition name="page" mode="out-in">
        <NuxtPage />
        <Analytics />
      </Transition>
    </ClientOnly>
  </NuxtLayout>
</template>

<style>
/* основная анимация */
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

/* когда страница появляется */
.page-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.985);
}

/* когда страница уходит */
.page-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.985);
}
</style>


<script setup lang="ts">

import { Analytics } from '@vercel/analytics/next';

onMounted(() => {
  const preventZoom = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault()
    }
  }

  window.addEventListener('wheel', preventZoom, { passive: false })

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && ['+', '-', '='].includes(e.key)) {
      e.preventDefault()
    }
  })
})
</script>

