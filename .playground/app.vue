<script setup>

/* base */

const counter = ref(0);


/* form */

const { form, formTag } = useForm({
  fields: [
    {
      key: 'firstName', identifier: 'text', label: 'First Name', width: 6,
    },
    {
      key: 'lastName', identifier: 'text', label: 'Last Name', width: 6,
    },
    {
      key: 'email', identifier: 'text', label: 'Email',
      type: 'email',
    },
    {
      key: 'password', identifier: 'text', label: 'Password',
      type: 'password',
    },
  ]
});


/* dialog */

async function openChoicePickerDialog() {
  await launchChoicePickerDialog({
    icon: 'lucide:package',
    title: 'Do you want to submit?',
    subtitle: 'Adminssion Process',
    text: 'Are you sure you want to submit your application?',
    startButtons: [
      {
        color: 'primary',
        icon: 'lucide:check',
        label: 'Submit',
        onClick: async () => {
          
          await new Promise(resolve => setTimeout(resolve, 1000));

          toastSuccess({
            icon: 'lucide:check',
            title: 'Submission Completed',
            description: 'Your submission has been completed successfully.',
          });

        }
      },
    ],
  })
}

async function openFormPickerDialog() {
  await launchFormPickerDialog({
    icon: 'lucide:text',
    title: 'Admission Form',
    subtitle: 'Your Personal Information',
    text: 'Please fill out the form below to submit your application.',
    initialForm: {
      firstName: 'John',
    },
    fields: [
      {
        key: 'firstName', identifier: 'text', label: 'First Name', width: 6,
      },
      {
        key: 'lastName', identifier: 'text', label: 'Last Name', width: 6,
      },
      {
        key: 'email', identifier: 'text', label: 'Email',
        type: 'email',
      },
      {
        key: 'password', identifier: 'text', label: 'Password',
        type: 'password',
      },
    ],
    submitButton: {
      icon: 'lucide:send',
      color: 'primary',
      label: 'Submit Application',
      onClick: async form => {

        await new Promise(resolve => setTimeout(resolve, 1000));

        toastSuccess({
          icon: 'lucide:check',
          title: 'Form Submitted',
          description: JSON.stringify(form, null, 2),
        });

      },
    },
  });
}

</script>


<template>
  <u-app>

    <un-typography
      icon="lucide:package"
      title="Unified Nuxt UI"
      subtitle="A Complete Package"
      text="A reuseable Nuxt layer which integrates Nuxt UI and some other useful libraries into your Nuxt application."
      class="text-2xl max-w-6xl mx-auto mb-6 mt-12 p-3"
    />

    <div class="grid grid-cols-3 gap-3 p-3 max-w-6xl mx-auto">

      <u-card class="[&>div]:flex [&>div]:flex-col [&>div]:h-full">
        <un-typography
          icon="lucide:component"
          title="Nuxt UI"
          text="Nuxt UI is a component library that provides a set of styled components for your application."
          class="mb-3"
        />
        <div class="flex gap-2 mt-auto">
          <u-button
            :label="`Counter: ${counter}`"
            @click="counter++"
          />
        </div>
      </u-card>

      <u-card class="[&>div]:flex [&>div]:flex-col [&>div]:h-full">
        <un-typography
          icon="lucide:message-circle"
          title="Unified Toast"
          text="Toast notifications are a simple way to display messages to the user."
          class="mb-3"
        />
        <div class="flex gap-2 mt-auto">
          <u-button 
            label="Launch Success Toast" 
            @click="toastSuccess({ title: 'Success' })" 
          />
          <u-button 
            label="Launch Error Toast" 
            @click="toastError({ title: 'Error' })" 
          />
        </div>
      </u-card>

      <u-card class="[&>div]:flex [&>div]:flex-col [&>div]:h-full">
        <un-typography
          icon="lucide:wrench"
          title="Radash"
          text="Radash is a library of utility functions for working with arrays, objects, and strings."
          class="mb-3"
        />
        <div class="flex gap-2 mt-auto">
          <u-button 
            label="See Change Case" 
            @click="toast({ title: `Camel case of 'a simple text' is ${radCamel('a simple text')}` })" 
          />
        </div>
      </u-card>

      <u-card class="[&>div]:flex [&>div]:flex-col [&>div]:h-full">
        <un-typography
          icon="lucide:text"
          title="Form"
          text="Form is a component that provides a set of styled form elements for your application."
          class="mb-3"
        />
        <div class="mt-auto">
          <form-tag />
          <pre class="text-xs font-mono mt-3">{{ form }}</pre>
        </div>
      </u-card>

      <u-card class="[&>div]:flex [&>div]:flex-col [&>div]:h-full">
        <un-typography
          icon="lucide:package"
          title="Dialogs"
          text="Dialogs are a way to display modal content to the user."
          class="mb-3"
        />
        <div class="flex flex-col gap-2">
          <u-button 
            block
            label="Launch Choice Picker Dialog" 
            loading-auto
            @click="openChoicePickerDialog()" 
          />
          <u-button 
            block
            label="Launch Form Picker Dialog" 
            loading-auto
            @click="openFormPickerDialog()" 
          />
        </div>
      </u-card>

    </div>
  </u-app>
</template>


<style>
  body {
    background-color: #FAFAFA;
  }
</style>
