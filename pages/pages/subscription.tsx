import Layout from "@/components/Layout";
import SubscriptionFAQ from "@/components/SubcriptionFAQ";
import SubscriptionProducts from "@/components/SubscriptionProducts";

export const metadata = {
  title: "Fucoidan là gì?",
  description: "Giới thiệu về Fucoidan biển và lịch sử nghiên cứu."
};

export default function FucoidanPage() {

  return (
    <Layout>
            <SubscriptionProducts />
            <SubscriptionFAQ/>
    </Layout>
  );
}
