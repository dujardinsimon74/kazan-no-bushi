<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

let phrasesInterval: ReturnType<typeof setInterval>;

const phrases = [
    "Affûtage des shinai en cours...",
    "Les arbitres révisent les règlements...",
    "Les shiaijos sont en cours d'installation...",
    "Saint-Nectaire en cours d'affinage...",
    "Les inscriptions sont en cours de traitement...",
    "Les plannings de poules sont en préparation...",
    "Les sensei préparent les derniers entraînements...",
    "Les trophées attendent leurs futurs champions...",
];

const currentPhraseIndex = ref(0);
const currentPhrase = ref(phrases[0]);

onMounted(() => {
    phrasesInterval = setInterval(() => {
        currentPhraseIndex.value =
            (currentPhraseIndex.value + 1) % phrases.length;
        currentPhrase.value = phrases[currentPhraseIndex.value];
    }, 4000);
});

onBeforeUnmount(() => {
    clearInterval(phrasesInterval);
});
</script>

<template>
    <section
        id="hero"
        class="relative flex flex-col items-center justify-center h-screen text-gray-800 overflow-hidden"
    >
        <h1 class="text-2xl sm:text-6xl font-bold mb-6 text-center w-full px-4">
            Kazan No Bushi 2026
        </h1>

        <CountDown />

        <Transition name="fade" mode="out-in">
            <p
                :key="currentPhrase"
                class="mt-10 text-sm sm:text-base text-gray-500 italic text-center px-6 max-w-md"
            >
                {{ currentPhrase }}
            </p>
        </Transition>

        <!-- Scroll hint -->
        <div
            class="absolute bottom-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce"
        >
            <span class="text-xs tracking-widest uppercase">Découvrir</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
