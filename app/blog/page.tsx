// pages/blog.tsx
import React from 'react';
import AppBar from '../component/appar';

const Blog = () => {
  const posts = [
    {
      title: 'Understanding React Hooks',
      excerpt: 'A deep dive into React Hooks and how they can simplify your component logic.',
      date: 'September 20, 2023',
      link: '#',
    },
    {
      title: 'Next.js for Beginners',
      excerpt: 'Learn the basics of Next.js and how to build server-rendered applications.',
      date: 'September 15, 2023',
      link: '#',
    },
    {
      title: 'Styling in React',
      excerpt: 'Explore various methods of styling your React components effectively.',
      date: 'September 10, 2023',
      link: '#',
    },
    {
      title: 'Next.js for Beginners',
      excerpt: 'Learn the basics of Next.js and how to build server-rendered applications.',
      date: 'September 15, 2023',
      link: '#',
    },
    {
      title: 'Styling in React',
      excerpt: 'Explore various methods of styling your React components effectively.',
      date: 'September 10, 2023',
      link: '#',
    },
    {
      title: 'Next.js for Beginners',
      excerpt: 'Learn the basics of Next.js and how to build server-rendered applications.',
      date: 'September 15, 2023',
      link: '#',
    },
    {
      title: 'Styling in React',
      excerpt: 'Explore various methods of styling your React components effectively.',
      date: 'September 10, 2023',
      link: '#',
    },
    {
      title: 'Next.js for Beginners',
      excerpt: 'Learn the basics of Next.js and how to build server-rendered applications.',
      date: 'September 15, 2023',
      link: '#',
    },
    {
      title: 'Styling in React',
      excerpt: 'Explore various methods of styling your React components effectively.',
      date: 'September 10, 2023',
      link: '#',
    },
    {
      title: 'Next.js for Beginners',
      excerpt: 'Learn the basics of Next.js and how to build server-rendered applications.',
      date: 'September 15, 2023',
      link: '#',
    },
    {
      title: 'Styling in React',
      excerpt: 'Explore various methods of styling your React components effectively.',
      date: 'September 10, 2023',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <AppBar/>
      <h1 className="text-4xl font-bold text-center   pt-20 mb-6">Our Blog</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
            <a href={post.link} className="text-blue-500 hover:underline mt-2 block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
