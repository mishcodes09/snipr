<template>
  <section
    class="min-h-screen flex flex-col items-center text-center px-6 pt-12 md:pt-16"
  >
    <!-- Illustration Image (on top of hero text) -->
    <div class="mb-8 md:mb-12">
      <img
        src="/src/assets/japanese.png"
        alt="Hero illustration"
        class="w-full max-w-2xl mx-auto h-auto"
      />
    </div>

    <!-- Heading -->
    <h1 class="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
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
  </section>
</template>
