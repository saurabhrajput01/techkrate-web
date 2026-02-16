import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "../data/blogData";

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col pt-20">
            {/* Header Section */}
            <section className="text-center py-20 px-6 bg-black relative overflow-hidden">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white mb-4">
                    Latest <span className="text-[#2563EB]">Articles</span>
                </h2>

                <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                    Explore insights, news, and updates from Techkrate to stay ahead in tech and innovation.
                </p>

                <div className="mt-6 flex justify-center">
                    <span className="block w-24 h-1.5 rounded-full bg-[#2563EB]/20 relative overflow-hidden">
                        <span className="absolute inset-y-0 left-0 bg-[#2563EB] w-1/2 animate-[shimmer_2s_infinite]"></span>
                    </span>
                </div>
            </section>

            {/* Blog Cards Grid */}
            <main className="flex-grow max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((post, idx) => (
                        <Link key={post.id} to={`/blogs/${post.id}`} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative cursor-pointer group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-0 flex flex-col h-full"
                            >
                                {/* Blog Image */}
                                <div className="aspect-[16/9] overflow-hidden relative z-10">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Blog Content */}
                                <div className="p-6 relative z-10">
                                    {/* Date */}
                                    <p className="text-xs tracking-wide text-[#2563EB] mb-1">
                                        Press Release · {post.date} · 3 min read
                                    </p>

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    {/* Summary */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {post.secondTitle || "Explore the latest insights from Techkrate."}
                                    </p>

                                    {/* Read More */}
                                    <span className="text-[#2563EB] text-sm flex items-center gap-2 font-medium group-hover:underline transition-all duration-300">
                                        Read more →
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Blogs;