<template>
  <section
    class="min-h-screen flex items-center justify-center bg-white text-black"
  >
    <div class="text-center max-w-3xl w-full px-5">
      <!-- Heading -->
      <h1 class="text-5xl text-[#362F2E] font-bold leading-tight">
        Translate your code<br />
        to any <span class="text-blue-500">framework</span>
      </h1>

      <p class="mt-3 text-gray-400 text-lg">
        Built a beautiful component in Vue but need it in React? Our AI
        understands your UI patterns and converts them accurately — props,
        events, styling, and all.
      </p>

      <!-- Input Card -->
      <div
        class="mt-10 bg-[rgba(30,30,40,0.9)] rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
      >
        <input
          type="text"
          placeholder="Paste your codes snippets here..."
          class="w-full bg-transparent border-none outline-none text-gray-300 text-base mb-5 placeholder-gray-500"
        />

        <div class="flex justify-between items-center">
          <button
            class="w-10 h-10 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
          >
            +
          </button>

          <div class="flex gap-2.5">
            <button
              class="bg-transparent border-none text-gray-400 text-sm hover:text-white transition-colors"
            >
              💡 Plan
            </button>
            <button
              class="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full text-white font-semibold transition-colors"
            >
              Translate
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// no logic needed yet
</script>
