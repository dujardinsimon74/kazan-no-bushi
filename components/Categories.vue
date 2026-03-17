<script setup lang="ts">
const cardPt = {
    root: { class: "!bg-white/10 backdrop-blur-sm !border-white/20" },
    body: { class: "text-white" },
};

const categories = [
    {
        icon: "⭐",
        name: "Jeunes",
        details: ["Individuels", "Catégories par âge"],
    },
    {
        icon: "🥇",
        name: "Femmes",
        details: ["Equipes de 3", "Tout niveaux"],
    },
    {
        icon: "🏆",
        name: "Open",
        details: ["Équipes de 3", "Tout niveaux et mixte"],
    },
];
</script>

<template>
    <div class="relative py-16 mb-24">
        <!-- Background image -->
        <div
            class="absolute inset-0 bg-[url('/competition.jpg')] bg-cover bg-center"
        />
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-indigo-950/70" />
        <!-- Content -->
        <div class="relative z-10 max-w-4xl mx-auto px-4">
            <h2
                class="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-100"
                data-lag="0.1"
            >
                Catégories de la compétition
            </h2>
            <p
                class="text-center text-slate-200 mb-12 text-sm uppercase tracking-widest"
                data-lag="0.15"
            >
                Compétitions ouvertes à tous les niveaux
            </p>
            <div class="flex flex-wrap justify-center gap-6">
                <Card
                    v-for="(cat, index) in categories"
                    :key="cat.name"
                    :data-lag="0.1 + index * 0.05"
                    class="w-full sm:w-72"
                    :pt="cardPt"
                >
                    <template #title>
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">{{ cat.icon }}</span>
                            <span class="text-base font-semibold text-white">{{
                                cat.name
                            }}</span>
                        </div>
                    </template>
                    <template #content>
                        <ul class="text-sm text-slate-200 space-y-1 mt-1">
                            <li
                                v-for="detail in cat.details"
                                :key="detail"
                                class="flex items-center gap-2"
                            >
                                <span class="text-indigo-300">›</span>
                                {{ detail }}
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
