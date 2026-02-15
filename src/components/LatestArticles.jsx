import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import getDataFromFirestore from "../Getdatafromfirestrore";

const LatestArticles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const blogs = await getDataFromFirestore("blogs");

        const sortedBlogs = blogs
          .sort((a, b) => {
            const dateA = a.date?.seconds || 0;
            const dateB = b.date?.seconds || 0;
            return dateB - dateA;
          })
          .slice(0, 3);

        setArticles(sortedBlogs);

      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {[1,2,3].map(i=>(
              <div key={i} className="h-80 rounded-2xl bg-white/5 animate-pulse"/>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black">

      {/* PROFESSIONAL CONTAINER */}
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">

        {/* ⭐ ENTERPRISE HEADER */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full mb-5 font-['Neue'] tracking-[-0.01em]">
            Insights & Resources
          </span>

          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] leading-[1.15] text-white mb-5 font-['Neue'] tracking-[-0.01em]">
            Latest Articles & Insights
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-['Neue']">
            Expert insights, product updates, and industry knowledge to help you stay ahead.
          </p>

        </div>

        {/* ⭐ PROFESSIONAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

          {articles.map((article) => (

            <Link
  key={article.id}
  to={`/blogs/${article.id}`}
  className="group relative rounded-2xl overflow-hidden transition-all duration-500"
>

  {/* ⭐ Glow border layer (ULTRA PREMIUM EFFECT) */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-transparent blur-xl"/>
  </div>

  {/* CARD */}
  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl hover:border-white/20 transition-all duration-300">

    {/* IMAGE */}
    <div className="relative aspect-video overflow-hidden rounded-t-2xl">

      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover transition duration-[900ms] group-hover:scale-110"
      />

      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"/>
    </div>

    {/* CONTENT */}
    <div className="p-7">

      {/* CATEGORY */}
      <div className="text-sm text-blue-400 font-medium mb-3 font-['Neue'] tracking-[-0.01em]">
        {article.category || "Insights"}
      </div>

      {/* TITLE */}
      <h3 className="text-xl text-white mb-3 leading-snug line-clamp-2 group-hover:text-blue-400 transition">
        {article.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {article.secondTitle || article.excerpt || "Read more about this topic..."}
      </p>

      {/* CTA */}
      <div className="flex items-center text-blue-400 font-medium">
        Read more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
      </div>

    </div>

  </div>

</Link>


          ))}

        </div>

        {/* ⭐ VIEW ALL BUTTON (ENTERPRISE STYLE) */}
        <div className="flex justify-center mt-16">

          <Link
            to="/blogs"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300"
          >
            View All Articles
            <ArrowRight size={18}/>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default LatestArticles;
