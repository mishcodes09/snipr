<script setup>
const features = [
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Any Framework",
    description:
      "Vue, React, Angular, Svelte, vanilla JS — switch between them instantly.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Instant Results",
    description:
      "Paste your component, select target framework, get translated code in seconds.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Syntax Perfect",
    description:
      "AI understands component logic, props, and event handling for accurate conversion.",
  },
];
</script>

<template>
  <section class="px-6 md:px-12 lg:px-20 py-20 bg-zinc-900 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <div>
        <span
          class="text-sm text-blue-400 font-medium uppercase tracking-wider"
        >
          AI Powered
        </span>
        <h2 class="text-3xl md:text-4xl font-light mt-2 mb-4">
          Translate your code to any framework
        </h2>
        <p class="text-zinc-400 mb-8 leading-relaxed">
          Built a beautiful component in Vue but need it in React? Our AI
          understands your UI patterns and converts them accurately — props,
          events, styling, and all.
        </p>

        <!-- Features list -->
        <div class="space-y-4 mb-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex gap-4"
          >
            <div
              class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0"
            >
              <svg
                class="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="feature.icon"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-medium text-white">{{ feature.title }}</h3>
              <p class="text-sm text-zinc-500">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <a
          href="/translate"
          class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-colors"
        >
          Try AI Translation
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>

      <!-- Right: Visual/Code Preview -->
      <div class="relative">
        <div
          class="bg-zinc-950 rounded-xl border border-zinc-800 p-4 shadow-2xl"
        >
          <!-- Fake code editor showing translation -->
          <div
            class="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800"
          >
            <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div class="w-3 h-3 rounded-full bg-zinc-700"></div>
            <span class="text-xs text-zinc-500 ml-2">translator.ai</span>
          </div>

          <div class="space-y-3 font-mono text-sm">
            <div class="flex items-center gap-3 text-zinc-500">
              <span
                class="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded"
                >Vue</span
              >
              <span class="truncate"
                >&lt;script setup&gt;...&lt;/script&gt;</span
              >
            </div>
            <div class="flex justify-center">
              <svg
                class="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <div class="flex items-center gap-3 text-zinc-500">
              <span
                class="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded"
                >React</span
              >
              <span class="truncate">export default function()...</span>
            </div>
          </div>
        </div>

        <!-- Decorative blur -->
        <div
          class="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full -z-10"
        ></div>
      </div>
    </div>
  </section>
</template>
