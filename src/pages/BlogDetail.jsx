import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { marked } from "marked";
import { articles } from "../data/blogData";

const BlogDetail = () => {
    const { id } = useParams();
    const blogPost = articles.find((post) => post.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* ---------- NOT FOUND ---------- */
    if (!blogPost) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <p className="text-2xl font-semibold mb-4">Article not found</p>
                <Link to="/blogs" className="text-[#2563EB] underline">
                    Back to blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                    src={blogPost.imageUrl}
                    alt={blogPost.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                        {blogPost.title}
                    </h1>

                    <div className="mt-6 flex items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
                        <span>By {blogPost.author || "Unknown Author"}</span>
                        <span>•</span>
                        <span>{blogPost.date}</span>
                    </div>

                    {blogPost.secondTitle && (
                        <p className="mt-4 text-lg md:text-2xl text-gray-300 font-light">
                            {blogPost.secondTitle}
                        </p>
                    )}
                </div>
            </section>

            {/* ================= WAVE DIVIDER ================= */}
            <svg
                viewBox="0 0 1440 90"
                className="w-full -mt-1"
                preserveAspectRatio="none"
            >
                <path
                    fill="#000000"
                    d="M0,40 C120,60 240,80 360,75 480,70 600,40 720,30 840,20 960,30 1080,40 1200,50 1320,60 1440,55 L1440,0 L0,0 Z"
                />
            </svg>

            {/* ================= CONTENT SECTION ================= */}
            <section className="bg-black pb-24">
                <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-24 relative z-10">
                    <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">

                        {/* Back Button */}
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-sm text-[#2563EB] hover:bg-[#2563EB] hover:text-black px-4 py-1.5 rounded-full transition mb-8 border border-[#2563EB]/20"
                        >
                            ← Back to articles
                        </Link>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-10">
                            <span className="px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-medium">
                                Tech Blog
                            </span>
                            <span>By {blogPost.author || "Unknown"}</span>
                            <span>•</span>
                            <span>{blogPost.date}</span>
                        </div>

                        {/* Blog Content */}
                        <article
                            className="
                                prose prose-lg max-w-none
                                text-gray-100
                                prose-headings:text-white
                                prose-p:text-gray-300
                                prose-strong:text-white
                                prose-li:text-gray-300
                                prose-a:text-[#2563EB]
                                prose-blockquote:text-gray-100
                                prose-p:leading-[1.85]
                                prose-p:text-[18px]
                                prose-h2:text-2xl
                                prose-h2:mt-16
                                prose-h3:mt-10
                                prose-img:rounded-2xl
                                prose-img:shadow-lg
                                prose-blockquote:border-l-4
                                prose-blockquote:border-[#2563EB]
                                prose-blockquote:bg-[#2563EB]/10
                                prose-blockquote:px-6
                                prose-blockquote:py-4
                                prose-blockquote:rounded-r-xl
                            "
                            dangerouslySetInnerHTML={{ __html: marked(blogPost.content) }}
                        />

                        {/* End Marker */}
                        <div className="mt-20 flex flex-col items-center gap-4">
                            <div className="h-px w-32 bg-gray-700"></div>
                            <p className="text-sm text-gray-400">Thanks for reading </p>
                        </div>

                        {/* Author Card */}
                        <div className="mt-16 bg-gray-800 rounded-xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold">
                                {blogPost.author?.[0] || "A"}
                            </div>
                            <div>
                                <p className="font-semibold text-white">
                                    {blogPost.author || "Unknown Author"}
                                </p>
                                <p className="text-gray-400">
                                    Writing about technology, product design & engineering.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default BlogDetail;