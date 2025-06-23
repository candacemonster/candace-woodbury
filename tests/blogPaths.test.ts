import { describe, it, expect } from 'vitest';
import { getStaticPaths } from '../src/pages/blog/[slug].astro';
import fs from 'fs';
import path from 'path';

describe('blog getStaticPaths', () => {
  it('includes all slugs from content/blog', async () => {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const expectedSlugs = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''));

    const paths = await getStaticPaths();
    const slugs = paths.map((p: { params: { slug: string } }) => p.params.slug);

    expect(slugs).toHaveLength(expectedSlugs.length);
    expectedSlugs.forEach((slug) => {
      expect(slugs).toContain(slug);
    });
  });
});
