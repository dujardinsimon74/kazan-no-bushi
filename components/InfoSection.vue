<script setup lang="ts"></script>

<template>
    <section class="relative bg-white z-10 py-24 px-4">
        <!-- About -->
        <div class="max-w-4xl mx-auto mb-24">
            <h2
                class="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800"
                data-lag="0.1"
            >
                Stage, Passage de grade et Compétition
            </h2>
            <p
                class="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
                data-lag="0.15"
            >
                Kazan No Bushi 2026
            </p>
            <HightLights />
        </div>

        <!-- Divider -->
        <div class="max-w-4xl mx-auto mb-24">
            <div class="border-t border-gray-100" />
        </div>

        <Program />

        <!-- Divider -->
        <div class="max-w-4xl mx-auto mb-24">
            <div class="border-t border-gray-100" />
        </div>

        <Categories />

        <!-- Divider -->
        <div class="max-w-4xl mx-auto mb-24">
            <div class="border-t border-gray-100" />
        </div>

        <Venue />

        <!-- Divider -->
        <div class="max-w-4xl mx-auto mb-24">
            <div class="border-t border-gray-100" />
        </div>

        <Registration />

        <!-- Footer note -->
        <p class="text-center text-xs text-gray-300 mt-16">
            © Kazan No Bushi 2026 · Tous droits réservés
        </p>
    </section>
</template>
