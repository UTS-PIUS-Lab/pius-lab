import PageHero from "../../components/PageHero";
import AwardsTimeline from "../../components/AwardsTimeline";
import { news } from "../../data/news";

const awards = news
  .filter(n => n.badge === "award")
  .sort((a, b) => parseInt(a.date, 10) - parseInt(b.date, 10));

export default function Awards() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="Awards"
        subtitle="A timeline of iAwards, industry, and research recognition earned by PIUS Lab projects since 2018."
      />
      <AwardsTimeline items={awards} />
    </>
  );
}
