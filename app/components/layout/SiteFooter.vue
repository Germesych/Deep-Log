<script setup lang="ts">
const { site } = useAppConfig();
const year = new Date().getFullYear();

const rubrics = ["Веб-разработка", "DevOps", "AI & ML", "Безопасность"];
</script>

<template>
    <footer class="mt-20 border-t border-abyss-800/70 bg-abyss-900/50">
        <div
            class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
            <div>
                <p class="font-mono text-sm text-foam-100">
                    ~/{{ site.title }}
                </p>
                <p class="mt-3 text-sm leading-relaxed text-foam-500">
                    {{ site.tagline }}: статьи, новости индустрии, заметки и
                    портфолио.
                </p>
                <p class="mt-4 font-mono text-xs text-foam-500">
                    <span class="text-kelp-400">⦿</span> статус: на глубине ·
                    аптайм 99.9%
                </p>
            </div>

            <div>
                <h2
                    class="font-mono text-xs uppercase tracking-widest text-foam-500"
                >
                    Разделы
                </h2>
                <ul class="mt-3 space-y-2">
                    <li v-for="item in site.nav.slice(0, 4)" :key="item.to">
                        <NuxtLink
                            :to="item.to"
                            class="text-sm text-foam-300 transition-colors hover:text-ocean-300"
                        >
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div>
                <h2
                    class="font-mono text-xs uppercase tracking-widest text-foam-500"
                >
                    Рубрики
                </h2>
                <ul class="mt-3 space-y-2">
                    <li v-for="rubric in rubrics" :key="rubric">
                        <span class="text-sm text-foam-300">{{ rubric }}</span>
                    </li>
                </ul>
            </div>

            <div>
                <h2
                    class="font-mono text-xs uppercase tracking-widest text-foam-500"
                >
                    Связь
                </h2>
                <ul class="mt-3 space-y-2">
                    <li v-for="social in site.socials" :key="social.url">
                        <a
                            :href="social.url"
                            class="text-sm text-foam-300 transition-colors hover:text-ocean-300"
                        >
                            {{ social.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-abyss-800/70">
            <div
                class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 font-mono text-xs text-foam-500"
            >
                <p>
                    © {{ year }} {{ site.title }} · собрано вручную, без
                    шаблонов
                </p>
                <p>сделано в глубине 🌊</p>
                <a href="#top" class="transition-colors hover:text-ocean-300"
                    >↑ на поверхность</a
                >
            </div>
        </div>
    </footer>
</template>
