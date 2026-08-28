<script setup lang="ts">
const channels = [
    {
        type: "email",
        label: "kendo@asm-omnisports.com",
        href: "mailto:kendo@asm-omnisports.com",
        external: false,
    },
    {
        type: "instagram",
        label: "@asm_kendo",
        href: "https://www.instagram.com/asm_kendo/",
        external: true,
    },
    {
        type: "facebook",
        label: "ASM Kendo",
        href: "https://www.facebook.com/kazankendo",
        external: true,
    },
];
</script>

<template>
    <div class="relative pt-20 pb-24 px-5 text-center">
        <h2
            class="font-brush text-[clamp(28px,4.2vw,42px)] tracking-[0.03em] text-plan-cream-200"
            data-lag="0.1"
        >
            Contact
        </h2>
        <p
            class="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-plan-ice-200/55"
            data-lag="0.15"
        >
            Restons en contact
        </p>

        <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-11 max-w-[760px] mx-auto"
        >
            <a
                v-for="channel in channels"
                :key="channel.type"
                :href="channel.href"
                :target="channel.external ? '_blank' : undefined"
                :rel="channel.external ? 'noopener noreferrer' : undefined"
                class="rounded-[18px] bg-plan-cream-100 shadow-[0_24px_54px_-26px_rgba(6,12,33,0.75)] px-6 py-7 flex flex-col items-center gap-3 hover:-translate-y-0.5 transition-transform"
                data-lag="0.15"
            >
                <div
                    class="w-10 h-10 rounded-full bg-plan-navy-700 flex items-center justify-center shrink-0"
                >
                    <svg
                        v-if="channel.type === 'email'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.75"
                        stroke="currentColor"
                        class="w-5 h-5 text-plan-orange-400"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>
                    <svg
                        v-else-if="channel.type === 'instagram'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.75"
                        stroke="currentColor"
                        class="w-5 h-5 text-plan-orange-400"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                    <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-5 h-5 text-plan-orange-400"
                        fill="currentColor"
                    >
                        <path
                            d="M13.5 21v-7.5h2.51l.38-2.91h-2.89V8.72c0-.84.23-1.42 1.44-1.42h1.55V4.7c-.27-.04-1.18-.11-2.24-.11-2.22 0-3.74 1.35-3.74 3.84v2.15H8v2.91h2.51V21h3Z"
                        />
                    </svg>
                </div>
                <span class="text-sm font-bold text-plan-navy-700 break-all">
                    {{ channel.label }}
                </span>
            </a>
        </div>
    </div>
</template>
