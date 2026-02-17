"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { articles } from "../data/blogData";

const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="group"
    >
      <Link to={`/blogs/${article.id}`} className="block">
        <div className="
          relative rounded-2xl overflow-hidden
          border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl
          hover:border-[#2563EB]
          shadow-lg shadow-[#2563EB]/20
          transition-all duration-300
        ">
          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition duration-[900ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-7">
            <div className="text-sm text-blue-400 font-medium mb-2">{article.category}</div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
              {article.secondTitle}
            </p>
            <div className="flex items-center text-blue-400 font-medium group-hover:underline">
              Read more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const LatestArticles = () => {
  return (
    <section className="py-18 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            Insights & Resources
          </span>

          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] text-white font-semibold leading-[1.15] mb-3">
            Latest Articles & Insights
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Expert insights, product updates, and industry knowledge to help you stay ahead.
          </p>
        </motion.div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-16">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
