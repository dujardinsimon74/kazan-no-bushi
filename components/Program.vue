<script setup lang="ts">
interface ScheduleEvent {
    time: string;
    label: string;
    detail: string | null;
    highlight?: boolean;
}

interface Day {
    label: string;
    note: { title: string; items: string[] } | null;
    events: ScheduleEvent[];
}

const days: Day[] = [
    {
        label: "Samedi",
        note: {
            title: "2 stages concomitants",
            items: ["Juniors & Adultes — Roger ARMAND", "Jeunes — Marc RAGONA"],
        },
        events: [
            {
                time: "9h30",
                label: "Accueil & vérification des inscriptions",
                detail: null,
                highlight: true,
            },
            {
                time: "11h – 13h",
                label: "Kihon",
                detail: null,
            },
            { time: "13h – 13h30", label: "Pause repas", detail: null },
            {
                time: "13h30 – 15h",
                label: "Kihon",
                detail: null,
            },
            { time: "15h – 16h", label: "Ji-geiko", detail: null },
            {
                time: "16h30",
                label: "Passage de grades",
                detail: "1er à 3ème dan",
                highlight: true,
            },
        ],
    },
    {
        label: "Dimanche",
        note: {
            title: "3 compétitions",
            items: ["Jeunes", "Femmes", "Open"],
        },
        events: [
            {
                time: "8h",
                label: "Ouverture des portes",
                detail: "Contrôle des passeports et des shinaïs pour tous les compétiteurs",
            },
            {
                time: "9h30",
                label: "Début des compétitions",
                detail: null,
                highlight: true,
            },
        ],
    },
];
</script>

<template>
    <div class="max-w-2xl mx-auto mb-24">
        <h2
            class="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-100"
            data-lag="0.1"
        >
            Programme
        </h2>
        <p
            class="text-center text-slate-200 mb-12 text-sm uppercase tracking-widest"
            data-lag="0.15"
        >
            Déroulement du week-end
        </p>

        <div
            v-for="(day, dayIndex) in days"
            :key="day.label"
            :class="dayIndex > 0 ? 'mt-12' : ''"
            data-lag="0.1"
        >
            <!-- Day separator -->
            <div class="flex items-center gap-3 mb-6">
                <div class="h-px flex-1 bg-slate-400" />
                <span
                    class="text-2xl font-semibold uppercase tracking-widest text-slate-200"
                >
                    {{ day.label }}
                </span>
                <div class="h-px flex-1 bg-slate-400" />
            </div>

            <!-- Optional info note -->
            <div
                v-if="day.note"
                class="mb-8 rounded-xl border border-indigo-800 bg-indigo-900/40 px-5 py-4 text-sm text-slate-200"
                data-lag="0.12"
            >
                <p class="font-semibold mb-2 text-slate-200">
                    {{ day.note.title }}
                </p>
                <ul class="space-y-1 text-slate-200">
                    <li
                        v-for="item in day.note.items"
                        :key="item"
                        class="flex items-start gap-2"
                    >
                        <span class="mt-0.5 text-slate-200">›</span>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>

            <!-- Timeline -->
            <div class="flex flex-col">
                <div
                    v-for="(event, index) in day.events"
                    :key="event.time"
                    class="flex items-stretch gap-5"
                    :data-lag="0.1 + index * 0.04"
                >
                    <!-- Time column -->
                    <div class="flex flex-col items-center">
                        <div
                            class="flex items-center justify-center py-1 min-w-24"
                        >
                            <Tag
                                :value="event.time"
                                :severity="
                                    event.highlight ? 'primary' : 'secondary'
                                "
                                rounded
                                class="font-semibold text-xs whitespace-nowrap"
                            />
                        </div>
                        <!-- Connector -->
                        <div
                            v-if="index < day.events.length - 1"
                            class="w-px flex-1 bg-slate-400 my-0.5 self-center"
                        />
                    </div>

                    <!-- Content column -->
                    <div class="pb-6 pt-1.5 flex-1">
                        <p
                            class="font-semibold text-sm leading-snug"
                            :class="
                                event.highlight
                                    ? 'text-slate-100'
                                    : 'text-slate-300'
                            "
                        >
                            {{ event.label }}
                        </p>
                        <p
                            v-if="event.detail"
                            class="text-xs text-slate-300 mt-1"
                        >
                            {{ event.detail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
