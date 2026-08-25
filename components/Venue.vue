<script setup lang="ts">
const cardPt = {
    root: {
        class: "!bg-plan-cream-100 !border-0 rounded-[18px] shadow-[0_24px_54px_-26px_rgba(6,12,33,0.75)] !text-left",
    },
};
</script>

<template>
    <div class="relative pt-24 pb-24 px-5 overflow-hidden">
        <!-- Background image -->
        <img
            src="/artenium.jpg"
            alt="Vue aérienne de l'Artenium"
            class="absolute inset-0 w-full h-full object-cover object-center"
        />
        <!-- Fade veil -->
        <div
            class="absolute inset-0"
            style="
                background: linear-gradient(
                    180deg,
                    #141f45 0%,
                    rgba(20, 31, 69, 0.74) 22%,
                    rgba(20, 31, 69, 0.78) 78%,
                    #141f45 100%
                );
            "
        />

        <div class="relative z-10 max-w-[1000px] mx-auto">
            <div class="text-center">
                <h2
                    class="font-brush text-[clamp(28px,4.2vw,42px)] tracking-[0.03em] text-plan-cream-200"
                    data-lag="0.1"
                >
                    Lieu
                </h2>
                <p
                    class="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-plan-ice-200/55"
                    data-lag="0.15"
                >
                    Comment nous rejoindre
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <Card data-lag="0.15" :pt="cardPt">
                    <template #title>
                        <span
                            class="text-xs font-bold uppercase tracking-[0.2em] text-plan-bronze-600"
                        >
                            Adresse
                        </span>
                        <div class="mt-3.5 text-xl font-black text-plan-navy-700">
                            Artenium
                        </div>
                    </template>
                    <template #content>
                        <p class="mt-1.5 text-[15px] leading-[1.6] text-plan-navy-700/75">
                            4 Parc de l'Artière<br />
                            63122 Ceyrat, France
                        </p>
                    </template>
                </Card>
                <Card data-lag="0.2" :pt="cardPt">
                    <template #title>
                        <span
                            class="text-xs font-bold uppercase tracking-[0.2em] text-plan-bronze-600"
                        >
                            Accès
                        </span>
                    </template>
                    <template #content>
                        <p class="mt-3.5 text-[15px] leading-[1.6] text-plan-navy-700/75">
                            Parking gratuit sur place.
                        </p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
