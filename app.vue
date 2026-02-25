<template>
    <div
        class="flex flex-col items-center justify-center min-h-screen text-gray-800"
    >
        <h1 class="text-5xl font-bold mb-6">Kazan No Bushi 2026</h1>
        <div class="flex space-x-4 text-4xl font-mono">
            <div
                class="bg-gray-100 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
                <span>{{ days }}</span>
                <p class="text-sm">Jours</p>
            </div>
            <div
                class="bg-gray-100 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
                <span>{{ hours }}</span>
                <p class="text-sm">Heures</p>
            </div>
            <div
                class="bg-gray-100 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
                <span>{{ minutes }}</span>
                <p class="text-sm">Minutes</p>
            </div>
            <div
                class="bg-gray-100 w-32 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
                <span>{{ seconds }}</span>
                <p class="text-sm">Secondes</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { DateTime, Interval } from "luxon";

const TARGET = DateTime.local(2026, 7, 1, 0, 0, 0);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const updateCountdown = () => {
    const now = DateTime.now();

    if (now >= TARGET) {
        days.value = hours.value = minutes.value = seconds.value = 0;
        if (interval) clearInterval(interval);
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

onMounted(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
    if (interval) clearInterval(interval);
});
</script>

<style scoped></style>
