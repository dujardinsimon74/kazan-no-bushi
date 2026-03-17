<script setup lang="ts"></script>

<template>
    <section
        class="relative z-10 py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900"
    >
        <!-- About heading -->
        <div class="max-w-4xl mx-auto px-4 mb-12">
            <h2
                class="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-100"
                data-lag="0.1"
            >
                Stage, Passage de grade et Compétition
            </h2>
            <p
                class="text-center text-slate-200 mb-12 text-sm uppercase tracking-widest"
                data-lag="0.15"
            >
                Kazan No Bushi 2026
            </p>
        </div>

        <!-- HightLights — full width -->
        <div class="mb-24">
            <HightLights />
        </div>

        <!-- Divider -->
        <div class="max-w-4xl mx-auto px-4 mb-24">
            <div class="border-t border-slate-800" />
        </div>

        <!-- Program — centred, padded -->
        <div class="px-4">
            <Program />
        </div>

        <!-- Divider -->
        <div class="max-w-4xl mx-auto px-4 mb-24">
            <div class="border-t border-slate-800" />
        </div>

        <!-- Categories — full width -->
        <Categories />

        <!-- Divider -->
        <div class="max-w-4xl mx-auto px-4 mb-24">
            <div class="border-t border-slate-800" />
        </div>

        <!-- Venue — full width -->
        <Venue />

        <!-- Divider -->
        <div class="max-w-4xl mx-auto px-4 mb-24">
            <div class="border-t border-slate-800" />
        </div>

        <!-- Registration — centred, padded -->
        <div class="px-4">
            <Registration />
        </div>

        <!-- Footer note -->
        <p class="text-center text-xs text-slate-600 mt-16 px-4">
            © Kazan No Bushi 2026 · Tous droits réservés
        </p>
    </section>
</template>
``` Now update the three image-backed components to be truly full-width (no
`max-w` on the root, no rounded corners, content constrained inside with
`max-w-4xl mx-auto px-4`).
