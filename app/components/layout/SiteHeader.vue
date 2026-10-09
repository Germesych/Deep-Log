<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
    <a
        href="#content"
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ocean-500 focus:px-3 focus:py-2 focus:text-abyss-950"
    >
        К содержанию
    </a>

    <header
        class="sticky top-0 z-40 border-b border-abyss-800/70 bg-abyss-950/85 backdrop-blur"
    >
        <div
            class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4"
        >
            <NuxtLink
                to="/"
                class="font-mono text-base text-foam-100 transition-colors hover:text-ocean-300"
            >
                ~/{{ site.title }}
            </NuxtLink>

            <nav
                aria-label="Основная навигация"
                class="hidden items-center gap-5 lg:flex"
            >
                <NuxtLink
                    v-for="item in site.nav"
                    :key="item.to"
                    :to="item.to"
                    class="group text-sm text-foam-300 transition-colors hover:text-foam-100"
                >
                    <span
                        class="mr-1.5 font-mono text-xs text-ocean-500 transition-colors group-hover:text-ocean-300"
                    >
                        {{ item.code }} </span
                    >{{ item.label }}
                </NuxtLink>
            </nav>

            <a
                :href="site.contactUrl"
                class="rounded-md border border-ocean-500/50 px-4 py-1.5 text-sm text-ocean-300 transition-colors hover:border-ocean-400 hover:bg-ocean-500/10"
            >
                Связаться
            </a>
        </div>
    </header>
</template>
