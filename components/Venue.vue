<script setup lang="ts"></script>
<template>
    <div class="max-w-4xl mx-auto mb-24">
        <h2
            class="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
            data-lag="0.1"
        >
            Lieu
        </h2>
        <p
            class="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
            data-lag="0.15"
        >
            Comment nous rejoindre
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card data-lag="0.15">
                <template #title>
                    <div class="flex items-center gap-2">
                        <span class="text-xl">📍</span>
                        <span class="text-base font-semibold">Adresse</span>
                    </div>
                </template>
                <template #content>
                    <p class="text-sm text-gray-500 leading-relaxed">
                        Artenium<br />
                        4 Parc de l'Artière, 63122 Ceyrat<br />
                        France
                    </p>
                </template>
            </Card>
            <Card data-lag="0.2">
                <template #title>
                    <div class="flex items-center gap-2">
                        <span class="text-xl">🚗</span>
                        <span class="text-base font-semibold">Accès</span>
                    </div>
                </template>
                <template #content>
                    <ul class="text-sm text-gray-500 space-y-2">
                        <li class="flex items-start gap-2">
                            Parking gratuit sur place
                        </li>
                    </ul>
                </template>
            </Card>
        </div>
    </div>
</template>
