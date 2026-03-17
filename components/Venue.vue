<script setup lang="ts">
const cardPt = {
    root: { class: "!bg-white/10 backdrop-blur-sm !border-white/20" },
    body: { class: "text-white" },
};
</script>

<template>
    <div class="relative py-16 mb-24">
        <!-- Background image -->
        <div
            class="absolute inset-0 bg-[url('/artenium.jpg')] bg-cover bg-center"
        />
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-indigo-950/70" />
        <!-- Content -->
        <div class="relative z-10 max-w-4xl mx-auto px-4">
            <h2
                class="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-100"
                data-lag="0.1"
            >
                Lieu
            </h2>
            <p
                class="text-center text-slate-200 mb-12 text-sm uppercase tracking-widest"
                data-lag="0.15"
            >
                Comment nous rejoindre
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card data-lag="0.15" :pt="cardPt">
                    <template #title>
                        <div class="flex items-center gap-2">
                            <span class="text-xl">📍</span>
                            <span class="text-base font-semibold text-white"
                                >Adresse</span
                            >
                        </div>
                    </template>
                    <template #content>
                        <p class="text-sm text-slate-200 leading-relaxed">
                            Artenium<br />
                            4 Parc de l'Artière, 63122 Ceyrat<br />
                            France
                        </p>
                    </template>
                </Card>
                <Card data-lag="0.2" :pt="cardPt">
                    <template #title>
                        <div class="flex items-center gap-2">
                            <span class="text-xl">🚗</span>
                            <span class="text-base font-semibold text-white"
                                >Accès</span
                            >
                        </div>
                    </template>
                    <template #content>
                        <ul class="text-sm text-slate-200 space-y-2">
                            <li class="flex items-start gap-2">
                                Parking gratuit sur place
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
