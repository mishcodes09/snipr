<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const inputCode = ref("");
const outputCode = ref("");
const sourceFramework = ref("Vue");
const targetFramework = ref("React");
const isTranslating = ref(false);

const frameworks = ["Vue", "React", "Angular", "Svelte", "Vanilla JS"];

const handleTranslate = async () => {
  if (!inputCode.value.trim()) return;

  isTranslating.value = true;
  outputCode.value = "";

  // Simulate AI translation - replace with actual API call
  setTimeout(() => {
    outputCode.value = `// Translated from ${sourceFramework.value} to ${targetFramework.value}\n\nexport default function TranslatedComponent() {\n  return (\n    <div className="bg-blue-500 p-4 rounded-lg">\n      {/* Your translated code here */}\n      <h1>Hello from ${targetFramework.value}</h1>\n    </div>\n  );\n}`;
    isTranslating.value = false;
  }, 2000);
};

const copyOutput = () => {
  navigator.clipboard.writeText(outputCode.value);
  alert("Copied to clipboard!");
};

const saveToLibrary = () => {
  router.push("/dashboard");
};
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <!-- Header -->
    <header
      class="border-b border-zinc-800 px-6 py-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <div
          class="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center cursor-pointer"
          @click="router.push('/dashboard')"
        >
          <span class="font-bold text-lg">S</span>
        </div>
        <h1 class="text-xl font-light">AI Translator</h1>
      </div>
      <button
        @click="router.push('/dashboard')"
        class="text-zinc-400 hover:text-white text-sm"
      >
        Back to Dashboard
      </button>
    </header>

    <!-- Main Content -->
    <main class="p-6 max-w-7xl mx-auto">
      <!-- Framework Selectors -->
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="flex items-center gap-2">
          <label class="text-sm text-zinc-400">From:</label>
          <select
            v-model="sourceFramework"
            class="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option v-for="fw in frameworks" :key="fw" :value="fw">
              {{ fw }}
            </option>
          </select>
        </div>

        <button
          @click="
            [sourceFramework, targetFramework] = [
              targetFramework,
              sourceFramework,
            ]
          "
          class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
        >
          <svg
            class="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>

        <div class="flex items-center gap-2">
          <label class="text-sm text-zinc-400">To:</label>
          <select
            v-model="targetFramework"
            class="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option v-for="fw in frameworks" :key="fw" :value="fw">
              {{ fw }}
            </option>
          </select>
        </div>
      </div>

      <!-- Code Editors -->
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <!-- Input -->
        <div
          class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
        >
          <div
            class="flex items-center justify-between px-4 py-3 border-b border-zinc-800"
          >
            <span class="text-sm text-zinc-400"
              >Input ({{ sourceFramework }})</span
            >
            <button
              @click="inputCode = ''"
              class="text-xs text-zinc-500 hover:text-white"
            >
              Clear
            </button>
          </div>
          <textarea
            v-model="inputCode"
            placeholder="Paste your component code here..."
            class="w-full h-96 bg-transparent p-4 text-sm font-mono text-zinc-300 resize-none focus:outline-none"
          ></textarea>
        </div>

        <!-- Output -->
        <div
          class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
        >
          <div
            class="flex items-center justify-between px-4 py-3 border-b border-zinc-800"
          >
            <span class="text-sm text-zinc-400"
              >Output ({{ targetFramework }})</span
            >
            <div class="flex gap-2">
              <button
                v-if="outputCode"
                @click="copyOutput"
                class="text-xs text-blue-400 hover:text-blue-300"
              >
                Copy
              </button>
            </div>
          </div>
          <div class="relative h-96">
            <textarea
              v-model="outputCode"
              readonly
              placeholder="Translated code will appear here..."
              class="w-full h-full bg-transparent p-4 text-sm font-mono text-green-400 resize-none focus:outline-none"
            ></textarea>

            <!-- Loading Overlay -->
            <div
              v-if="isTranslating"
              class="absolute inset-0 bg-zinc-900/80 flex items-center justify-center"
            >
              <div class="flex items-center gap-3">
                <svg
                  class="w-6 h-6 text-blue-500 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span class="text-zinc-400">Translating...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-center gap-4">
        <button
          @click="handleTranslate"
          :disabled="!inputCode.trim() || isTranslating"
          class="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
        >
          <span v-if="isTranslating">Translating...</span>
          <span v-else>Translate Code</span>
          <svg
            v-if="!isTranslating"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </button>

        <button
          v-if="outputCode"
          @click="saveToLibrary"
          class="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-8 py-3 rounded-xl font-medium transition-colors"
        >
          Save to Library
        </button>
      </div>
    </main>
  </div>
</template>
