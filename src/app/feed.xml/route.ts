import { mockArticles } from '@/data/mockArticles';

const SITE_URL = 'https://run82.ru';

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

export async function GET() {
    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>КофеРан вечеринка Blog</title>
    <link>${SITE_URL}</link>
    <description>Новости, статьи и полезные материалы от КофеРан вечеринка.</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${mockArticles
            .map((post) => {
                const fullContent = Array.isArray(post.content) ? post.content.join('\n\n') : post.content || '';
                return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${SITE_URL}/blog/${post.slug}</link>
        <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        <description>${escapeXml(post.excerpt)}</description>
        <content:encoded><![CDATA[${fullContent}]]></content:encoded>
        <category>${escapeXml(post.category)}</category>
        ${post.coverImage ? `<enclosure url="${SITE_URL}${post.coverImage}" type="image/webp" />` : ''}
      </item>`;
            })
            .join('')}
  </channel>
</rss>`;

    return new Response(feed, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
