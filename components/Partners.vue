<script setup lang="ts">
const partners = [
    { file: "asm-omnisports.png", name: "ASM Omnisports", wide: true, keepSize: true },
    { file: "francekendo.png", name: "France Kendo", keepSize: true },
    { file: "CRKaura.png", name: "CRK Aura" },
    { file: "Cam.png", name: "Clermont Auvergne Métropole" },
    { file: "volvic.png", name: "Volvic", keepSize: true },
    { file: "sooji.png", name: "Sooji" },
    { file: "maison_koji.png", name: "La Maison du Koji" },
    { file: "wagaya.png", name: "Wagaya" },
    { file: "painpaill.png", name: "Au Pain Paillasse" },
    { file: "chaton.png", name: "Les Heures Qui Filent" },
    { file: "tatsei.png", name: "Tatsei" },
    { file: "sunfuckingLove.png", name: "Sunflower Graphisme" },
];
</script>

<template>
    <div class="relative pt-20 pb-24 px-5 text-center">
        <h2
            class="font-brush text-[clamp(28px,4.2vw,42px)] tracking-[0.03em] text-plan-cream-200"
            data-lag="0.1"
        >
            Partenaires
        </h2>
        <p
            class="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-plan-ice-200/55"
            data-lag="0.15"
        >
            Merci pour leur soutien
        </p>

        <div
            class="flex flex-wrap justify-center gap-4 mt-11 max-w-[900px] mx-auto"
        >
            <div
                v-for="partner in partners"
                :key="partner.file"
                class="rounded-[14px] bg-plan-cream-100 shadow-[0_18px_40px_-22px_rgba(6,12,33,0.8)] flex items-center justify-center"
                :class="[
                    partner.wide ? 'w-[220px] h-[96px]' : 'w-[150px] h-[96px]',
                    partner.keepSize ? 'p-1.5' : 'p-0',
                ]"
            >
                <img
                    :src="`/partenaires/${partner.file}`"
                    :alt="partner.name"
                    class="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    </div>
</template>
