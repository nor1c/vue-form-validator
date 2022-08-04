<template>
  <form :id="identifier">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';

/**
 * @emits
 */
const emit = defineEmits ([
  'validated'
])

/**
 * @props
 */
const props = defineProps ({
  identifier: {
    type: String,
    default: ''
  }
})

onMounted (() => {
  window.onload = function() {
    const form = document.querySelector("form")
    form!.onsubmit = submitted.bind(form)
  }

  const submitted = async (event) => {
    event.preventDefault()
    await validate()
  }
})

/**
 * @methods
 */
/**
 * Validate user input data when submitting form.
 * If validation passes, emit `validated` event and continue to execute method passed by user.
 */
const validate = () => {
  const validationPassed = false

  if (props.identifier === '') {
    console.error('form must have a prop identifier (:id="string")')
  } else {
    /**
     * Running validation on all input fields in the form.
     */
    // get all inputs in form
    const form = document.getElementById(props.identifier)
    const inputs = form!.getElementsByTagName('input')

    const errorContentEl = document.querySelectorAll('.error-content')
    errorContentEl.forEach(el => el.remove())
    
    for (let inputIdx = 0; inputIdx < inputs.length; inputIdx++) {
      // get input rule options
      const rules = inputs[inputIdx].getAttribute('rules')?.split('|') ?? []
      
      // get input value
      const inputValue = inputs[inputIdx].value
      
      if (rules.length) {
        // config for rule 'required'
        if (rules.includes('required')) {
          if (inputValue === '') {
            console.error(`validation error: input for ${inputs[inputIdx].name} is required`)

            const errorDiv = document.querySelectorAll('div[error-for]')[0]
            errorDiv.innerHTML = '<span class="error-content">' + inputs[inputIdx].name + ' is required' + '</div>'
          }
        }
      }
    }

    /**
     * If validation passes, emit `validated` event and continue to execute method passed by user.
     */
    if (validationPassed) {
      emit('validated')
    }
  }
}

</script>