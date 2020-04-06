module.exports = {
    base: '/blog/',  // 站点基础路径
    title: 'Bear的博客',  // 网站的标题
	description: 'Never Too Late To Learn',  // 网站的描述
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/bigbigbigbear/blog',
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