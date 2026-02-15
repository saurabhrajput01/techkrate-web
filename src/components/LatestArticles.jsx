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
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-[32px] md:text-[48px] font-normal tracking-[-0.01em] leading-[1.15] text-white font-['Neue']">
            Latest Articles & Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12 mb-8 lg:mb-12">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blogs/${article.id}`}
              className="group premium-card overflow-hidden hover:shadow-md transition-all duration-300 card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <div className="text-sm text-blue-400 font-medium mb-3 font-['Neue'] tracking-[-0.01em]">
                  {article.category || "Insights"}
                </div>

                <h3 className="text-xl text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors font-['Neue'] font-medium tracking-[-0.01em]">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 font-['Neue'] tracking-[-0.01em] leading-relaxed">
                  {(article.secondTitle && article.secondTitle.includes("Your offline software")) ||
                    (article.excerpt && article.excerpt.includes("Your offline software"))
                    ? null
                    : (article.secondTitle || article.excerpt || "Read more about this topic...")}
                </p>

                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 font-['Neue'] tracking-[-0.01em]">
                  <span>Read more</span>
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors font-['Neue'] tracking-[-0.01em]"
          >
            View all articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;