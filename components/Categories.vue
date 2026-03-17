<script setup lang="ts">
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
    <!-- Categories -->
    <div class="max-w-4xl mx-auto mb-24">
        <h2
            class="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
            data-lag="0.1"
        >
            Catégories de la compétition
        </h2>
        <p
            class="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
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
            >
                <template #title>
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">{{ cat.icon }}</span>
                        <span class="text-base font-semibold">{{
                            cat.name
                        }}</span>
                    </div>
                </template>
                <template #content>
                    <ul class="text-sm text-gray-500 space-y-1 mt-1">
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
</template>
