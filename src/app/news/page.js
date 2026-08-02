import PageHero from "../../components/PageHero";
import NewsCard from "../../components/NewsCard";
import { news } from "../../data/news";

export default function News() {
  return (
    <>
      <PageHero eyebrow="Updates" title="News & updates"
        subtitle="Announcements, publications, partnerships, and events from PIUS Lab." />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {news.map(n => <NewsCard key={n.id} item={n} />)}
          </div>
        </div>
      </section>
    </>
  );
}
