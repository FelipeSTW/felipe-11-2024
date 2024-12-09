<script setup lang="ts">
import LayoutPrincipal from '@/components/layout/layout-principal/LayoutPrincipal.vue'
</script>

<template>
  <LayoutPrincipal>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutPrincipal>
</template>