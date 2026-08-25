<script setup lang="ts">
const cardPt = {
    root: {
        class: "!bg-plan-cream-100 !border-0 rounded-[14px] shadow-[0_18px_40px_-22px_rgba(6,12,33,0.8)]",
    },
    body: { class: "!py-4 !px-2.5" },
};

import { ref, onMounted, onBeforeUnmount } from "vue";
import { DateTime, Interval } from "luxon";

const TARGET = DateTime.local(2026, 11, 28, 9, 30, 0);
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
    <div class="flex flex-wrap justify-center gap-3.5 mt-9 px-4">
        <Card class="min-w-[104px]" :pt="cardPt">
            <template #title>
                <span
                    class="block text-[34px] font-black leading-none tabular-nums text-plan-bronze-600"
                    >{{ days }}</span
                >
            </template>
            <template #content>
                <p
                    class="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-plan-navy-700/60"
                >
                    Jours
                </p>
            </template>
        </Card>
        <Card class="min-w-[104px]" :pt="cardPt">
            <template #title>
                <span
                    class="block text-[34px] font-black leading-none tabular-nums text-plan-bronze-600"
                    >{{ hours }}</span
                >
            </template>
            <template #content>
                <p
                    class="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-plan-navy-700/60"
                >
                    Heures
                </p>
            </template>
        </Card>
        <Card class="min-w-[104px]" :pt="cardPt">
            <template #title>
                <span
                    class="block text-[34px] font-black leading-none tabular-nums text-plan-bronze-600"
                    >{{ minutes }}</span
                >
            </template>
            <template #content>
                <p
                    class="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-plan-navy-700/60"
                >
                    Minutes
                </p>
            </template>
        </Card>
        <Card class="min-w-[104px]" :pt="cardPt">
            <template #title>
                <span
                    class="block text-[34px] font-black leading-none tabular-nums text-plan-bronze-600"
                    >{{ seconds }}</span
                >
            </template>
            <template #content>
                <p
                    class="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-plan-navy-700/60"
                >
                    Secondes
                </p>
            </template>
        </Card>
    </div>
</template>
