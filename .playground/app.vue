<script setup>

const counter = ref(0);


/* network */

async function testNetwork() {
  const response = await ufetch('https://api.github.com/users/octocat');
  alert(response);
}

</script>


<template>
  <u-app>
    <div class="h-screen flex flex-col items-center justify-center">
      <u-card class="min-w-lg">
  
        <u-button
          :label="`Counter: ${counter}`"
          @click="counter++"
        />
  
        <u-separator class="my-3" />
  
        <u-button
          label="Launch Toast"
          @click="toastSuccess({ title: 'Success' })"
        />

        <u-separator class="my-3" />

        <u-button
          label="Test Network"
          loading-auto
          @click="testNetwork()"
        />
  
      </u-card>
    </div>
  </u-app>
</template>
