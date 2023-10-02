<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import type { FormData } from './LoginFormVorms.vue'
import LoginFormVorms from './LoginFormVorms.vue'

const emit = defineEmits<{
  (e: 'submit', formData: FormData): void
}>()
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
    content-transition="vfm-fade"
    overlay-transition="vfm-fade"
  >
    <LoginFormVorms @submit="formData => emit('submit', formData)" />
  </VueFinalModal>
</template>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  min-width: 500px;
  padding: 32px;
  border-radius: 16px;
  background-color: white;
}
</style>
