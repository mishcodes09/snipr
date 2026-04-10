<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleLogin = () => {
  console.log("Login:", email.value, password.value);
};
</script>

<template>
  <div
    class="h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/src/assets/images/landscape.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Login Card -->
    <div class="relative z-20 w-full max-w-md px-4">
      <div
        class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl w-full"
      >
        <div class="flex flex-col p-8 h-full">
          <!-- Header -->
          <div class="text-center mb-8">
            <h3 class="text-lg font-light text-white">Welcome back</h3>
            <p class="text-white/60 mt-1 text-xs">
              Sign in to your Snipr account
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="flex flex-col space-y-4">
            <div>
              <label class="block text-xs text-white/70 mb-1">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="you@example.com"
                class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-xs text-white/70 mb-1">Password</label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors"
                  required
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
                >
                  {{ showPassword ? "Hide" : "Show" }}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between text-xs">
              <label
                class="flex items-center gap-2 text-white/60 cursor-pointer"
              >
                <input
                  type="checkbox"
                  class="rounded bg-white/10 border-white/30 text-blue-500 focus:ring-0 w-3 h-3"
                />
                Remember me
              </label>
              <a href="#" class="text-blue-400 hover:text-blue-300">Forgot?</a>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500/80 hover:bg-blue-500 backdrop-blur-sm text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Sign In
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-2">
              <div class="flex-1 h-px bg-white/20"></div>
              <span class="text-white/40 text-xs">or</span>
              <div class="flex-1 h-px bg-white/20"></div>
            </div>

            <!-- GitHub Login -->
            <button
              type="button"
              class="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </button>

            <!-- Footer -->
            <p class="text-center text-white/60 text-xs mt-4">
              Don't have an account?
              <a
                href="/signup"
                class="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
