import { useState } from 'react';
import BlogHero from './Sections/BlogHero/BlogHero';
import BlogFeatured from './Sections/BlogFeatured/BlogFeatured';
import BlogGrid from './Sections/BlogGrid/BlogGrid';
import BlogTopics from './Sections/BlogTopics/BlogTopics';
import BlogNewsletter from './Sections/BlogNewsletter/BlogNewsletter';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <BlogTopics />
      <BlogNewsletter />
    </>
  );
}
