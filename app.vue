<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen text-gray-800"
    >
        <h1 class="text-2xl sm:text-6xl font-bold mb-6 text-center w-full px-4">
            Kazan No Bushi 2026
        </h1>
        <div
            class="flex flex-wrap justify-center gap-4 px-4 text-2xl sm:text-3xl md:text-4xl font-mono text-center"
        >
            <Card class="w-28 sm:w-32 md:w-36 lg:w-40">
                <template #title>
                    <span class="text-2xl sm:text-4xl">{{ days }}</span>
                </template>
                <template #content>
                    <p class="text-xs sm:text-sm">Jours</p>
                </template>
            </Card>
            <Card class="w-28 sm:w-32 md:w-36 lg:w-40">
                <template #title>
                    <span class="text-2xl sm:text-4xl">{{ hours }}</span>
                </template>
                <template #content>
                    <p class="text-xs sm:text-sm">Heures</p>
                </template>
            </Card>
            <Card class="w-28 sm:w-32 md:w-36 lg:w-40">
                <template #title>
                    <span class="text-2xl sm:text-4xl">{{ minutes }}</span>
                </template>
                <template #content>
                    <p class="text-xs sm:text-sm">Minutes</p>
                </template>
            </Card>
            <Card class="w-28 sm:w-32 md:w-36 lg:w-40">
                <template #title>
                    <span class="text-2xl sm:text-4xl">{{ seconds }}</span>
                </template>
                <template #content>
                    <p class="text-xs sm:text-sm">Secondes</p>
                </template>
            </Card>
        </div>

        <Transition name="fade" mode="out-in">
            <p
                :key="currentPhrase"
                class="mt-10 text-sm sm:text-base text-gray-500 italic text-center px-6 max-w-md"
            >
                {{ currentPhrase }}
            </p>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { DateTime, Interval } from "luxon";

const TARGET = DateTime.local(2026, 7, 1, 0, 0, 0);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
    const now = DateTime.now();

    if (now >= TARGET) {
        days.value = hours.value = minutes.value = seconds.value = 0;
        clearInterval(countdownInterval);
        return;
    }

    const diff = Interval.fromDateTimes(now, TARGET).toDuration([
        "days",
        "hours",
        "minutes",
        "seconds",
    ]);

    days.value = Math.floor(diff.days);
    hours.value = Math.floor(diff.hours);
    minutes.value = Math.floor(diff.minutes);
    seconds.value = Math.floor(diff.seconds);
};

let countdownInterval: ReturnType<typeof setInterval>;
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
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    phrasesInterval = setInterval(() => {
        currentPhraseIndex.value =
            (currentPhraseIndex.value + 1) % phrases.length;
        currentPhrase.value = phrases[currentPhraseIndex.value];
    }, 4000);
});

onBeforeUnmount(() => {
    clearInterval(countdownInterval);
    clearInterval(phrasesInterval);
});
</script>

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
