<script setup lang="ts">
const cardPt = {
    root: { class: "!bg-white/10 backdrop-blur-sm !border-white/20" },
    body: { class: "text-white" },
};

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

onMounted(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
    clearInterval(countdownInterval);
});
</script>

<template>
    <div
        class="flex flex-wrap justify-center gap-4 px-4 text-2xl sm:text-3xl md:text-4xl font-mono text-center"
    >
        <Card class="w-28 sm:w-32 md:w-36 lg:w-40" :pt="cardPt">
            <template #title>
                <span class="text-2xl sm:text-4xl">{{ days }}</span>
            </template>
            <template #content>
                <p class="text-xs sm:text-sm">Jours</p>
            </template>
        </Card>
        <Card class="w-28 sm:w-32 md:w-36 lg:w-40" :pt="cardPt">
            <template #title>
                <span class="text-2xl sm:text-4xl">{{ hours }}</span>
            </template>
            <template #content>
                <p class="text-xs sm:text-sm">Heures</p>
            </template>
        </Card>
        <Card class="w-28 sm:w-32 md:w-36 lg:w-40" :pt="cardPt">
            <template #title>
                <span class="text-2xl sm:text-4xl">{{ minutes }}</span>
            </template>
            <template #content>
                <p class="text-xs sm:text-sm">Minutes</p>
            </template>
        </Card>
        <Card class="w-28 sm:w-32 md:w-36 lg:w-40" :pt="cardPt">
            <template #title>
                <span class="text-2xl sm:text-4xl">{{ seconds }}</span>
            </template>
            <template #content>
                <p class="text-xs sm:text-sm">Secondes</p>
            </template>
        </Card>
    </div>
</template>
