<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalLoginForm from './ModalLoginForm.vue'

const { open, close } = useModal({
  component: ModalLoginForm,
  attrs: {
    onSubmit(formData) {
      alert(JSON.stringify(formData, null, 2))
      close()
    },
  },
})
</script>

<template>
  <button @click="open" class="button">
    Open Modal
  </button>

  <ModalsContainer />
</template>

<style>
.button {
  padding: 16px;
  background-color: blueviolet;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}
</style>
