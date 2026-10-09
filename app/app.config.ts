export default defineAppConfig({
  site: {
    url: "https://deep.log",
    title: "deep.log",
    tagline: "личный IT-блог и портфолио",
    contactUrl: "https://t.me/yourname",
    nav: [
      { code: "01", label: "Статьи", to: "/articles" },
      { code: "02", label: "Новости", to: "/news" },
      { code: "03", label: "Обо мне", to: "/about" },
      { code: "04", label: "Портфолио", to: "/portfolio" },
      { code: "05", label: "Блоки", to: "/blocks" },
    ],
    socials: [
      { label: "Telegram", url: "https://t.me/yourname" },
      { label: "YouTube", url: "https://youtube.com/@yourname" },
      { label: "GitHub", url: "https://github.com/yourname" },
      { label: "Email", url: "mailto:you@example.com" },
      { label: "RSS", url: "/rss.xml" },
    ],
  },
});
