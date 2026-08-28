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
        class="relative flex flex-col items-center justify-center min-h-screen font-zen overflow-hidden text-center"
    >
        <!-- Background image -->
        <img
            src="/fond-mila.jpeg"
            alt="Combat de kendo"
            class="absolute inset-0 w-full h-full object-cover object-top"
        />

        <!-- Navy veil -->
        <div class="absolute inset-0 bg-plan-navy-900/[0.72]" />

        <!-- Orange halo -->
        <div
            class="absolute inset-0"
            style="
                background-image: radial-gradient(
                    120% 80% at 50% -10%,
                    rgba(232, 164, 92, 0.34) 0%,
                    rgba(232, 164, 92, 0.07) 44%,
                    transparent 72%
                );
            "
        />

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center px-5">
            <img
                src="/logo-asm.png"
                alt="Logo ASM"
                class="w-24 h-24 sm:w-32 sm:h-32 mb-6 drop-shadow-xl rounded-full"
            />
            <h1
                class="font-title text-[clamp(54px,10vw,120px)] leading-none tracking-wide text-plan-cream-200 drop-shadow-[0_2px_0_rgba(20,31,69,0.6)]"
            >
                KAZAN NO BUSHI
            </h1>
            <div
                class="mt-4 text-[clamp(20px,4vw,32px)] font-medium tracking-[0.14em] text-plan-ice-200"
            >
                les 28 et 29 novembre 2026
            </div>

            <CountDown />

            <Transition name="fade" mode="out-in">
                <p
                    :key="currentPhrase"
                    class="mt-8 text-sm sm:text-base italic text-center px-6 max-w-md text-plan-ice-200/60"
                >
                    {{ currentPhrase }}
                </p>
            </Transition>

            <a
                href="#programme"
                class="mt-8 inline-flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-plan-orange-400/90 hover:text-plan-orange-300 transition-colors"
            >
                Découvrir
                <span
                    class="w-px h-[34px]"
                    style="
                        background: linear-gradient(
                            180deg,
                            rgba(232, 164, 92, 0.8),
                            transparent
                        );
                    "
                />
            </a>
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
