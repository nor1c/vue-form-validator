<template>
  <NorForm
    :identifier="'test'"
    @validated="submitForm"
  >
    <!-- input: name -->
    <div>
      <input
        type="text"
        name="name"
        v-model="input.name"
        placeholder="Input Your Name"
        rules="required"
      >
      <div error-for="name" />
    </div>

    <button type="submit">Submit</button>
  </NorForm>
</template>

<script setup lang="ts">
import { NorForm } from '../../dist/nor-form.es'
import { ref } from 'vue'

const input = ref({
  name: ''
})

const submitForm = () => {
  console.log('passed validation check and now submitting form..');
  console.log('input data:', input.value)
}
</script>