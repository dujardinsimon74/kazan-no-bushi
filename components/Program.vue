<script setup lang="ts">
interface CalloutItem {
    label: string;
    name?: string;
}

interface ScheduleEvent {
    time: string;
    label: string;
    detail?: string;
    emphasis: "key" | "default" | "muted";
}

interface Day {
    label: string;
    badge: string;
    callout: { title: string; items: CalloutItem[]; note?: string } | null;
    events: ScheduleEvent[];
    incomplete?: boolean;
}

const days: Day[] = [
    {
        label: "Samedi",
        badge: "Stage",
        callout: {
            title: "2 stages concomitants",
            items: [
                { label: "Juniors & Adultes — ", name: "Roger ARMAND" },
                { label: "Jeunes — ", name: "Marc RAGONA" },
            ],
        },
        events: [
            {
                time: "9h30",
                label: "Accueil & vérification des inscriptions",
                emphasis: "key",
            },
            { time: "11h – 13h", label: "Kihon", emphasis: "default" },
            { time: "13h – 13h30", label: "Pause repas", emphasis: "muted" },
            { time: "13h30 – 15h", label: "Kihon", emphasis: "default" },
            { time: "15h – 16h", label: "Ji-geiko", emphasis: "default" },
            {
                time: "16h30",
                label: "Passage de grades",
                detail: "1er à 3ème dan",
                emphasis: "key",
            },
        ],
    },
    {
        label: "Dimanche",
        badge: "Compétition",
        callout: {
            title: "3 compétitions",
            items: [
                { label: "Jeunes" },
                { label: "Femmes" },
                { label: "Open" },
            ],
            note: "Contrôle des passeports et des shinaïs pour tous les compétiteurs.",
        },
        events: [
            {
                time: "9h30",
                label: "Début des compétitions",
                emphasis: "key",
            },
        ],
        incomplete: true,
    },
];

function dotClass(emphasis: ScheduleEvent["emphasis"]) {
    if (emphasis === "key") {
        return "w-[13px] h-[13px] bg-plan-orange-400 shadow-[0_0_0_4px_#F8F1E3,0_0_0_5px_rgba(232,164,92,0.45)]";
    }
    if (emphasis === "muted") {
        return "w-[7px] h-[7px] bg-plan-navy-700/35 shadow-[0_0_0_4px_#F8F1E3]";
    }
    return "w-[11px] h-[11px] bg-plan-cream-100 border-2 border-plan-navy-700 shadow-[0_0_0_4px_#F8F1E3]";
}

function dotMarginClass(emphasis: ScheduleEvent["emphasis"]) {
    if (emphasis === "key") return "mt-[19px]";
    if (emphasis === "muted") return "mt-[22px]";
    return "mt-[20px]";
}

function titleClass(emphasis: ScheduleEvent["emphasis"], isFinale: boolean) {
    if (emphasis === "muted") {
        return "text-[19px] font-medium italic text-plan-navy-700/60";
    }
    if (isFinale) {
        return "text-[23px] font-black text-plan-navy-700";
    }
    return "text-[21px] font-bold text-plan-navy-700";
}
</script>

<template>
    <div
        id="programme"
        class="relative font-zen pt-24 pb-16 overflow-hidden"
        data-lag="0.05"
    >
        <!-- Background: navy + orange halo -->
        <div class="absolute inset-0 bg-plan-navy-900" />
        <div
            class="absolute inset-0"
            style="
                background-image: radial-gradient(
                    120% 70% at 50% -10%,
                    rgba(232, 164, 92, 0.28) 0%,
                    rgba(232, 164, 92, 0.06) 42%,
                    transparent 70%
                );
                background-repeat: no-repeat;
                background-position: top center;
            "
        />

        <div class="relative z-10 max-w-3xl mx-auto px-4">
            <h2
                class="font-brush text-4xl sm:text-5xl text-center mb-4 text-plan-cream-200"
                data-lag="0.1"
            >
                Programme
            </h2>
            <p
                class="text-center text-plan-ice-200 mb-14 text-sm uppercase tracking-widest"
                data-lag="0.15"
            >
                Déroulement du week-end
            </p>

            <div
                v-for="(day, dayIndex) in days"
                :key="day.label"
                :class="dayIndex > 0 ? 'mt-14' : ''"
                data-lag="0.1"
            >
                <!-- Day header -->
                <div class="flex items-center gap-5 mb-6">
                    <h3
                        class="font-brush text-3xl sm:text-4xl text-plan-cream-200 tracking-wide"
                    >
                        {{ day.label }}
                    </h3>
                    <span class="flex-1 h-px bg-plan-ice-200/20" />
                    <span
                        class="text-xs font-semibold uppercase tracking-[0.2em] text-plan-ice-200/60"
                    >
                        {{ day.badge }}
                    </span>
                </div>

                <!-- Day card -->
                <div
                    class="relative rounded-[22px] bg-plan-cream-100 px-6 py-9 sm:px-10 sm:py-10 shadow-[0_26px_60px_-24px_rgba(6,12,33,0.7)] overflow-hidden"
                    data-lag="0.12"
                >
                    <!-- Callout -->
                    <div
                        v-if="day.callout"
                        class="relative rounded-2xl bg-plan-navy-700 px-6 py-[22px] mb-9"
                    >
                        <p
                            class="text-xs font-bold uppercase tracking-[0.2em] text-plan-orange-400 mb-3.5"
                        >
                            {{ day.callout.title }}
                        </p>
                        <div class="flex flex-col gap-2.5">
                            <div
                                v-for="item in day.callout.items"
                                :key="item.label + (item.name || '')"
                                class="flex items-baseline gap-3 text-plan-cream-300 text-lg font-medium"
                            >
                                <span
                                    class="w-1.5 h-1.5 rounded-full bg-plan-orange-400 shrink-0 -translate-y-0.5"
                                />
                                <span
                                    >{{ item.label
                                    }}<strong
                                        v-if="item.name"
                                        class="font-black text-white"
                                        >{{ item.name }}</strong
                                    ></span
                                >
                            </div>
                        </div>
                        <div
                            v-if="day.callout.note"
                            class="mt-4 pt-3.5 border-t border-plan-orange-400/[0.28] text-sm leading-[1.5] text-plan-cream-300/80"
                        >
                            {{ day.callout.note }}
                        </div>
                    </div>

                    <!-- Timeline -->
                    <div
                        class="relative grid grid-cols-[76px_22px_1fr] sm:grid-cols-[120px_26px_1fr]"
                    >
                        <template
                            v-for="(event, index) in day.events"
                            :key="event.time"
                        >
                            <!-- Finale row (last row with a note): divider, then a
                                 centred [time | dot | title] row, then the note -->
                            <template
                                v-if="
                                    index === day.events.length - 1 &&
                                    event.detail
                                "
                            >
                                <div
                                    class="col-span-3 border-t border-plan-navy-700/[0.14] mt-2 pt-4"
                                />
                                <div
                                    class="text-right text-sm sm:text-[17px] font-black tabular-nums text-plan-navy-700 flex items-center justify-end"
                                >
                                    {{ event.time }}
                                </div>
                                <div class="relative flex items-center justify-center">
                                    <span
                                        class="absolute top-[-20px] bottom-1/2 w-px bg-plan-navy-700/[0.18]"
                                    />
                                    <span
                                        class="rounded-full shrink-0"
                                        :class="dotClass(event.emphasis)"
                                    />
                                </div>
                                <div
                                    class="pl-4 text-[23px] font-black leading-tight text-plan-navy-700 flex items-center"
                                >
                                    {{ event.label }}
                                </div>
                                <div />
                                <div />
                                <div
                                    class="pl-4 pb-3.5 text-sm font-bold tracking-wide text-plan-bronze-600"
                                >
                                    {{ event.detail }}
                                </div>
                            </template>

                            <!-- Regular row -->
                            <template v-else>
                                <!-- Time -->
                                <div
                                    class="text-right text-sm sm:text-[17px] font-black tabular-nums py-3.5"
                                    :class="
                                        event.emphasis === 'muted'
                                            ? 'text-plan-navy-700/50'
                                            : 'text-plan-navy-700'
                                    "
                                >
                                    {{ event.time }}
                                </div>

                                <!-- Rail -->
                                <div class="relative flex justify-center">
                                    <span
                                        class="absolute w-px bg-plan-navy-700/[0.18]"
                                        :class="
                                            index < day.events.length - 1
                                                ? 'top-0 bottom-0'
                                                : 'top-0 h-[26px]'
                                        "
                                    />
                                    <span
                                        class="relative rounded-full self-start"
                                        :class="[
                                            dotClass(event.emphasis),
                                            dotMarginClass(event.emphasis),
                                        ]"
                                    />
                                </div>

                                <!-- Content -->
                                <div class="pl-4 pt-3 pb-3.5">
                                    <div
                                        class="leading-tight"
                                        :class="
                                            titleClass(event.emphasis, false)
                                        "
                                    >
                                        {{ event.label }}
                                    </div>
                                </div>
                            </template>
                        </template>
                    </div>

                    <div
                        v-if="day.incomplete"
                        class="mt-4 rounded-lg border border-dashed border-plan-navy-700/25 px-3 py-2.5 text-[11px] tracking-[0.06em] text-plan-navy-700/45"
                    >
                        suite du déroulé — à compléter
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
