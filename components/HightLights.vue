<script setup lang="ts">
const cardPt = {
    root: { class: "!bg-white/10 backdrop-blur-sm !border-white/20" },
    body: { class: "text-white" },
};

const highlights = [
    {
        icon: "🥋",
        title: "Stage",
        description:
            "Le samedi, deux stages concomitants animés par Roger ARMAND (Juniors & Adultes) et Marc RAGONA (Jeunes).",
    },
    {
        icon: "📜",
        title: "Passage de grade",
        description:
            "Le samedi soir, du 1er au 3ème dan. Une opportunité pour valider sa progression technique dans le cadre d'un événement regional.",
    },
    {
        icon: "⚔️",
        title: "Compétition",
        description:
            "Le dimanche, les compétiteurs s'affrontent en individuel et par équipes, toutes catégories confondues.",
    },
];
</script>

<template>
    <div class="relative py-16">
        <!-- Background image -->
        <div
            class="absolute inset-0 bg-[url('/stage.jpg')] bg-cover bg-center"
        />
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-indigo-950/70" />
        <!-- Content -->
        <div class="relative z-10 max-w-4xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                    v-for="item in highlights"
                    :key="item.title"
                    class="text-center"
                    :pt="cardPt"
                    data-lag="0.2"
                >
                    <template #header>
                        <div
                            class="text-4xl pt-6 flex items-center justify-center"
                        >
                            {{ item.icon }}
                        </div>
                    </template>
                    <template #title>
                        <span class="text-base font-semibold text-white">{{
                            item.title
                        }}</span>
                    </template>
                    <template #content>
                        <p class="text-sm text-slate-200 leading-relaxed">
                            {{ item.description }}
                        </p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
