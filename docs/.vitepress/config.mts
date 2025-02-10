import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [["link", { rel: "icon", href: "https://img.waterflowfit.top/img/202502081817663.png" }]],
	title: "⛰️正西风落叶下长安",
	description: "A VitePress Site  of Blog",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "文章", link: "/markdown-examples" }
		],
		footer: {
			message: "MIT Licensed | Copyright © 2022-present Licorace",
			copyright: '<a id="record" href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">沪ICP备2022012685号-1</a>'
		},

		sidebar: [
			{
				text: "文章",
				collapsed: false,
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" }
				]
			}
		],
		socialLinks: [{ icon: "github", link: "https://github.com/licorace/blog-" }]
	}
})
