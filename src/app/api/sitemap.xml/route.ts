import { PostBoxProps } from '@/components/PostBox';
import { NextResponse } from 'next/server';

async function fetchPosts() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { revalidate: 300 }
  });

  if (!response.ok) {
      throw new Error('Erro ao buscar posts')
  }

  return response.json();
};

export async function GET() {
  const baseUrl = 'https://bolsocheio.ai';
  
  const posts = await fetchPosts()

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${posts
        .map(
          (post: PostBoxProps) => `
        <url>
          <loc>${baseUrl}/posts/${post._id}</loc>
          <lastmod>${post.date}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join('')}
    </urlset>
  `.trim();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}