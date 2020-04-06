module.exports = {
    base: '/bigbigbigbear.github.io/',  // 站点基础路径
    title: 'blog-bear',  // 网站的标题
	description: 'My Vuepress Blog',  // 网站的描述
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/bigbigbigbear/bigbigbigbear.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ]
    }
}