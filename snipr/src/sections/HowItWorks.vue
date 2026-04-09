<!-- src/sections/HowItWorks.vue -->
<script setup>
const steps = [
  {
    number: "01",
    title: "Paste Your Code",
    description:
      "Copy any UI component, hero section, or form from your project and paste it into the editor.",
  },
  {
    number: "02",
    title: "Tag & Save",
    description:
      "Add a title, choose a category, and save it to your personal snippet library.",
  },
  {
    number: "03",
    title: "Access Anywhere",
    description:
      "Find and copy your snippets instantly when starting new projects.",
  },
];
</script>

<template>
  <section class="px-6 md:px-12 lg:px-20 py-20 bg-zinc-50">
    <h2 class="text-3xl font-light text-center mb-12">How it works</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div v-for="step in steps" :key="step.number" class="text-center">
        <span class="text-5xl font-light text-zinc-200">{{ step.number }}</span>
        <h3 class="text-xl mt-4 mb-2">{{ step.title }}</h3>
        <p class="text-zinc-500 text-sm leading-relaxed">
          {{ step.description }}
        </p>
      </div>
    </div>
  </section>
</template>
