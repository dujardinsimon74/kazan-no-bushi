<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <HeroSection />
            <InfoSection />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

let smoother: InstanceType<typeof ScrollSmoother> | null = null;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        normalizeScroll: false,
    });

    ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        pin: true,
        pinSpacing: false,
    });
});

onBeforeUnmount(() => {
    smoother?.kill();
    ScrollTrigger.killAll();
});
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

#smooth-wrapper {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#smooth-content {
    overflow: visible;
    width: 100%;
}
</style>
