<script setup>

const counter = ref(0);

</script>


<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <u-button
      :label="`Counter: ${counter}`"
      @click="counter++"
    />
  </div>
</template>
