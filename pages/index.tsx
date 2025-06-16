import Layout from "@/components/Layout";
import TopPageSection from "@/components/TopPageSection";
import TopPageHero from "@/components/TopPageHero";
import TopPageDX from "@/components/TopPageDX";
import { TopPageNewItems } from "@/components/TopPageNewItems";
import ToppageContentList from "@/components/ToppageContentList";
import FucoidanDescription from "@/components/FucoidanDescription";


export default function Home() {
  return (
    <Layout>
      <TopPageSection />
      <TopPageHero />
      <TopPageDX />
      <TopPageNewItems />
      <ToppageContentList />
      <FucoidanDescription />
    </Layout>
  );
}
