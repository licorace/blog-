import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "正西风落叶下长安",
	description: "A VitePress Site  of Blog",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" }
		],
		footer: {
			message: "MIT Licensed | Copyright © 2022-present Licorace",
			copyright: '<a id="record" href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: none;">沪ICP备2022012685号-1</a>'
		},

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" }
				]
			}
		],

		socialLinks: [{ icon: "github", link: "https://github.com/licorace" }]
	}
})
