import Layout from "@/components/Layout";
import ProductGrid from "@/components/FucoidanProductList";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function FucoidanPage() {
  return (
    <Layout>
        <ProductGrid/>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
