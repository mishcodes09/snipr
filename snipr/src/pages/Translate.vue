<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import DashboardNavbar from "../components/DashboardNavbar.vue";

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

const swapFrameworks = () => {
  const temp = sourceFramework.value;
  sourceFramework.value = targetFramework.value;
  targetFramework.value = temp;
};
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <DashboardNavbar />

    <div class="flex">
      <!-- Sidebar - Matching Dashboard/NewSnippet -->
      <aside
        class="w-64 bg-white border-r border-black h-screen sticky top-16 p-6 hidden md:block overflow-y-auto"
      >
        <nav class="space-y-1">
          <button
            @click="router.push('/dashboard')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6 md:p-12 lg:p-20">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <h2
            class="text-sm font-medium tracking-widest text-zinc-500 uppercase"
          >
            Translate Code
          </h2>
          <button
            @click="router.push('/dashboard')"
            class="text-zinc-600 hover:text-black px-4 py-2 text-sm font-medium transition-colors border border-zinc-300 hover:border-black rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>

        <!-- Framework Selectors - In Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black rounded-lg overflow-hidden mb-6"
        >
          <!-- Source Framework -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >From</label
            >
            <select
              v-model="sourceFramework"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="fw in frameworks" :key="fw" :value="fw">
                {{ fw }}
              </option>
            </select>
          </div>

          <!-- Swap Button -->
          <div class="bg-white p-6 flex items-center justify-center">
            <button
              @click="swapFrameworks"
              class="p-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors border border-black"
            >
              <svg
                class="w-5 h-5 text-black"
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
          </div>

          <!-- Target Framework -->
          <div class="bg-white p-6">
            <label
              class="block text-sm text-zinc-500 uppercase tracking-wider mb-2"
              >To</label
            >
            <select
              v-model="targetFramework"
              class="w-full bg-zinc-50 border border-black rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option v-for="fw in frameworks" :key="fw" :value="fw">
                {{ fw }}
              </option>
            </select>
          </div>
        </div>

        <!-- Code Editors Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black rounded-lg overflow-hidden mb-6"
        >
          <!-- Input -->
          <div class="bg-white">
            <div
              class="flex items-center justify-between px-6 py-4 border-b border-black bg-zinc-50"
            >
              <span
                class="text-sm font-medium text-black uppercase tracking-wider"
                >Input ({{ sourceFramework }})</span
              >
              <button
                @click="inputCode = ''"
                class="text-xs text-zinc-500 hover:text-black transition-colors"
              >
                Clear
              </button>
            </div>
            <textarea
              v-model="inputCode"
              placeholder="Paste your component code here..."
              class="w-full h-80 bg-white p-6 text-sm font-mono text-zinc-700 resize-none focus:outline-none"
              spellcheck="false"
            ></textarea>
          </div>

          <!-- Output -->
          <div class="bg-white relative">
            <div
              class="flex items-center justify-between px-6 py-4 border-b border-black bg-zinc-50"
            >
              <span
                class="text-sm font-medium text-black uppercase tracking-wider"
                >Output ({{ targetFramework }})</span
              >
              <button
                v-if="outputCode"
                @click="copyOutput"
                class="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                Copy
              </button>
            </div>
            <div class="relative h-80">
              <textarea
                v-model="outputCode"
                readonly
                placeholder="Translated code will appear here..."
                class="w-full h-full bg-zinc-50 p-6 text-sm font-mono text-green-700 resize-none focus:outline-none"
              ></textarea>

              <!-- Loading Overlay -->
              <div
                v-if="isTranslating"
                class="absolute inset-0 bg-white/90 flex items-center justify-center"
              >
                <div class="flex items-center gap-3">
                  <svg
                    class="w-6 h-6 text-blue-600 animate-spin"
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
                  <span class="text-zinc-600">Translating...</span>
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
            class="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-200 disabled:text-zinc-400 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
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
            class="bg-white hover:bg-zinc-50 border border-black text-black px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Save to Library
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
