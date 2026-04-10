<!-- FaqSection.vue -->
<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Which frameworks are supported?",
    answer:
      "Currently we support Vue, React, Angular, Svelte, and plain JS components.",
    open: false,
  },
  {
    question: "Can I save unlimited snippets?",
    answer:
      "Yes! You can store all your snippets in your account for easy access.",
    open: false,
  },
  {
    question: "Is my code private?",
    answer:
      "Absolutely! Your snippets are stored securely and only visible to you unless you choose to share them.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-20 bg-white text-black">
    <h2 class="text-4xl font-bold mb-8 text-center">FAQs</h2>
    <div class="max-w-3xl mx-auto space-y-4">
      <div
        v-for="(faq, i) in faqs"
        :key="i"
        class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
      >
        <button
          @click="toggleFaq(i)"
          class="w-full text-left flex justify-between items-center font-medium"
        >
          {{ faq.question }}
          <span>{{ faq.open ? "−" : "+" }}</span>
        </button>
        <p v-if="faq.open" class="mt-2 text-gray-600">{{ faq.answer }}</p>
      </div>
    </div>
  </section>
</template>
