"use client";

import { useState } from "react";
import BlogCard from "./blog-card";
import { Search } from "lucide-react";

export default function BlogGrid({ initialBlogs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(initialBlogs.map((b) => b.category)))];

  // Filter logic
  const filteredBlogs = initialBlogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-14">
      
      {/* ── Filters & Search ── */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-primary/10 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-primary/15 bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* ── Grid ── */}
      {filteredBlogs.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5">
            <Search className="h-8 w-8 text-primary/40" />
          </div>
          <h3 className="text-xl font-bold text-foreground">No articles found</h3>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or category filter.</p>
          <button 
             onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
             className="mt-6 text-sm font-bold text-primary hover:underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
