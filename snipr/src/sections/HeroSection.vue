<script setup>
import { ref } from "vue";
import heroBg from "/src/assets/images/landscape.jpg";

const codeSnippet = ref("");
const snippetTitle = ref("");

const saveSnippet = () => {
  if (!codeSnippet.value.trim()) return;
  console.log("Saving:", snippetTitle.value, codeSnippet.value);
  codeSnippet.value = "";
  snippetTitle.value = "";
};
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center text-center px-6 pt-12 md:pt-16"
  >
    <!-- Heading -->
    <h1
      class="text-5xl text-[#362F2E] md:text-6xl font-bold leading-tight max-w-4xl"
    >
      Build once.
      <span class="text-blue-500">Use everywhere.</span>
    </h1>

    <!-- Subtext -->
    <p class="mt-6 text-zinc-400 max-w-xl">
      Save your code snippets and instantly convert them across frameworks.
    </p>

    <!-- Buttons -->
    <div class="mt-8 flex gap-4">
      <button
        class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium"
      >
        Start Saving
      </button>

      <button
        class="border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-xl"
      >
        See Demo
      </button>
    </div>

    <!-- Image with code overlay -->
    <div
      class="px-6 md:px-12 lg:px-20 mt-12 w-full relative h-64 md:h-96 lg:h-120"
    >
      <img
        :src="heroBg"
        alt="Code Snippet Example"
        class="w-full h-full object-cover rounded-lg shadow-lg"
      />

      <!-- Code Input Overlay - Clean Glassmorphism -->
      <div class="absolute inset-0 flex items-center justify-center p-8">
        <div
          class="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-2xl shadow-2x2 border border-white/20"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>
            <span class="text-grey text-sm font-mono">New Snippet</span>
          </div>

          <!-- Title Input -->
          <input
            v-model="snippetTitle"
            type="text"
            placeholder="Snippet title..."
            class="w-full bg-transparent border border-black rounded-lg px-4 py-2 mb-3 text-black placeholder:text-grey focus:outline-none focus:border-blue-400/50"
          />

          <!-- Code Textarea -->
          <textarea
            v-model="codeSnippet"
            placeholder="Paste your code here..."
            rows="6"
            class="w-full bg-transparent border border-black rounded-lg px-4 py-3 text-black placeholder:text-grey font-mono text-sm resize-none focus:outline-none focus:border-blue-400/50"
          ></textarea>

          <!-- Save Button -->
          <button
            @click="saveSnippet"
            class="w-full mt-4 bg-blue-500/80 hover:bg-blue-500 px-4 py-2.5 rounded-lg font-medium transition-colors backdrop-blur-sm"
          >
            Save Snippet
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
