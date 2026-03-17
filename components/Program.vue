<script setup lang="ts">
const saturday = [
    {
        time: "9h30",
        label: "Accueil & vérification des inscriptions",
        detail: null,
    },
    {
        time: "11h – 13h",
        label: "Kihon",
        detail: null,
        highlight: true,
    },
    {
        time: "13h – 13h30",
        label: "Pause repas",
        detail: null,
    },
    {
        time: "13h30 – 15h",
        label: "Kihon",
        detail: null,
        highlight: true,
    },
    {
        time: "15h – 16h",
        label: "Ji-geiko",
        detail: null,
    },
    {
        time: "16h30",
        label: "Passage de grades",
        detail: "1er à 3ème dan",
    },
];

const sunday = [
    {
        time: "8h",
        label: "Ouverture des portes",
        detail: "Contrôle des passeports et des shinaïs pour tous les compétiteurs",
    },
    {
        time: "9h30",
        label: "Début des compétitions",
        detail: null,
    },
];
</script>

<template>
    <div class="max-w-2xl mx-auto mb-24">
        <h2
            class="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
            data-lag="0.1"
        >
            Programme
        </h2>
        <p
            class="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
            data-lag="0.15"
        >
            Déroulement du week-end
        </p>

        <!-- Saturday -->
        <div data-lag="0.1">
            <div class="flex items-center gap-3 mb-6">
                <div class="h-px flex-1 bg-gray-100" />
                <span
                    class="text-xs font-semibold uppercase tracking-widest text-indigo-400"
                >
                    Samedi
                </span>
                <div class="h-px flex-1 bg-gray-100" />
            </div>

            <!-- Dual-stage note -->
            <div
                class="mb-8 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-4 text-sm text-indigo-700"
                data-lag="0.12"
            >
                <p class="font-semibold mb-2">2 stages concomitants</p>
                <ul class="space-y-1 text-indigo-600 text-xs">
                    <li class="flex items-start gap-2">
                        <span class="mt-0.5 text-indigo-300">›</span>
                        <span
                            ><span class="font-medium"
                                >Juniors &amp; Adultes</span
                            >
                            — Roger ARMAND</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="mt-0.5 text-indigo-300">›</span>
                        <span
                            ><span class="font-medium">Jeunes</span> — Marc
                            RAGONA</span
                        >
                    </li>
                </ul>
            </div>

            <div class="flex flex-col">
                <div
                    v-for="(event, index) in saturday"
                    :key="event.time"
                    class="flex items-stretch gap-6"
                    :data-lag="0.1 + index * 0.04"
                >
                    <!-- Time column -->
                    <div class="flex flex-col items-center">
                        <div
                            class="shrink-0 w-14 h-10 rounded-full flex items-center justify-center"
                            :class="
                                event.highlight
                                    ? 'bg-indigo-100 border-2 border-indigo-300'
                                    : 'bg-indigo-50 border-2 border-indigo-200'
                            "
                        >
                            <span
                                class="text-xs font-bold leading-none text-center"
                                :class="
                                    event.highlight
                                        ? 'text-indigo-600'
                                        : 'text-indigo-500'
                                "
                            >
                                {{ event.time }}
                            </span>
                        </div>
                        <div
                            v-if="index < saturday.length - 1"
                            class="w-px flex-1 bg-gray-100 my-1"
                        />
                    </div>

                    <!-- Content column -->
                    <div class="pb-7 pt-1.5">
                        <p
                            class="font-semibold text-sm leading-snug"
                            :class="
                                event.highlight
                                    ? 'text-indigo-700'
                                    : 'text-gray-700'
                            "
                        >
                            {{ event.label }}
                        </p>
                        <p
                            v-if="event.detail"
                            class="text-xs text-gray-400 mt-1"
                        >
                            {{ event.detail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sunday -->
        <div class="mt-10" data-lag="0.1">
            <div class="flex items-center gap-3 mb-6">
                <div class="h-px flex-1 bg-gray-100" />
                <span
                    class="text-xs font-semibold uppercase tracking-widest text-indigo-400"
                >
                    Dimanche
                </span>
                <div class="h-px flex-1 bg-gray-100" />
            </div>

            <div class="flex flex-col">
                <div
                    v-for="(event, index) in sunday"
                    :key="event.time"
                    class="flex items-stretch gap-6"
                    :data-lag="0.15 + index * 0.04"
                >
                    <!-- Time column -->
                    <div class="flex flex-col items-center">
                        <div
                            class="shrink-0 w-14 h-10 rounded-full bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center"
                        >
                            <span
                                class="text-xs font-bold text-indigo-500 leading-none text-center"
                            >
                                {{ event.time }}
                            </span>
                        </div>
                        <div
                            v-if="index < sunday.length - 1"
                            class="w-px flex-1 bg-gray-100 my-1"
                        />
                    </div>

                    <!-- Content column -->
                    <div class="pb-7 pt-1.5">
                        <p
                            class="font-semibold text-gray-700 text-sm leading-snug"
                        >
                            {{ event.label }}
                        </p>
                        <p
                            v-if="event.detail"
                            class="text-xs text-gray-400 mt-1"
                        >
                            {{ event.detail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
