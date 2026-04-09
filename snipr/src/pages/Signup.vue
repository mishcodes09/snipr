<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleSignup = () => {
  console.log("Signup:", name.value, email.value, password.value);
};
</script>

<template>
  <div
    class="h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="/src/assets/images/landscape.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Signup Card -->
    <div class="relative z-20 w-full max-w-md px-4">
      <div
        class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl w-full"
      >
        <div class="flex flex-col p-8">
          <!-- Header -->
          <div class="text-center mb-6">
            <h3 class="text-lg font-light text-white">Create account</h3>
            <p class="text-white/60 mt-1 text-xs">
              Start building your Snipr library
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSignup" class="flex flex-col space-y-4">
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
                  placeholder="Min 8 characters"
                  class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors"
                  required
                  minlength="8"
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

            <div class="flex items-start gap-2 text-xs">
              <input
                type="checkbox"
                class="mt-1 rounded bg-white/10 border-white/30 text-blue-500 focus:ring-0"
                required
              />
              <span class="text-white/60">
                I agree to the
                <a href="#" class="text-blue-400 hover:text-blue-300">Terms</a>
                and
                <a href="#" class="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500/80 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Create Account
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-2">
              <div class="flex-1 h-px bg-white/20"></div>
              <span class="text-white/40 text-xs">or</span>
              <div class="flex-1 h-px bg-white/20"></div>
            </div>

            <!-- GitHub -->
            <button
              type="button"
              class="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..."
                />
              </svg>
              Continue with GitHub
            </button>

            <!-- Footer -->
            <p class="text-center text-white/60 text-xs mt-2">
              Already have an account?
              <a
                href="/login"
                class="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
