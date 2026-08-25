<script setup lang="ts">
const cardPt = {
    root: {
        class: "!bg-plan-cream-100 !border-0 rounded-[18px] shadow-[0_24px_54px_-26px_rgba(6,12,33,0.75)] !text-left",
    },
};

const categories = [
    {
        name: "Jeunes",
        details: ["Individuels", "Catégories par âge"],
    },
    {
        name: "Femmes",
        details: ["Équipes de 3", "Tout niveaux"],
    },
    {
        name: "Open",
        details: ["Équipes de 3", "Tout niveaux et mixte"],
    },
];
</script>

<template>
    <div class="relative pt-24 pb-24 px-5 text-center overflow-hidden">
        <!-- Background image -->
        <img
            src="/competition.jpg"
            alt="Kenshi en armure"
            class="absolute inset-0 w-full h-full object-cover object-center"
        />
        <!-- Fade veil -->
        <div
            class="absolute inset-0"
            style="
                background: linear-gradient(
                    180deg,
                    #141f45 0%,
                    rgba(20, 31, 69, 0.7) 20%,
                    rgba(20, 31, 69, 0.74) 80%,
                    #141f45 100%
                );
            "
        />

        <div class="relative z-10 max-w-[1000px] mx-auto">
            <h2
                class="font-brush text-[clamp(28px,4.2vw,42px)] tracking-[0.03em] text-plan-cream-200"
                data-lag="0.1"
            >
                Catégories de la compétition
            </h2>
            <p
                class="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-plan-ice-200/55"
                data-lag="0.15"
            >
                Ouvertes à tous les niveaux
            </p>

            <div
                class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-11 text-left"
            >
                <Card
                    v-for="(cat, index) in categories"
                    :key="cat.name"
                    :data-lag="0.1 + index * 0.05"
                    :pt="cardPt"
                >
                    <template #title>
                        <span class="text-[19px] font-black text-plan-navy-700">{{
                            cat.name
                        }}</span>
                        <div class="w-8 h-0.5 bg-plan-orange-400 my-3" />
                    </template>
                    <template #content>
                        <ul class="flex flex-col gap-2.5 text-[15px] text-plan-navy-700/78">
                            <li
                                v-for="detail in cat.details"
                                :key="detail"
                                class="flex items-baseline gap-2.5"
                            >
                                <span
                                    class="w-[5px] h-[5px] rounded-full bg-plan-navy-700/40 shrink-0 -translate-y-[3px]"
                                />
                                {{ detail }}
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
