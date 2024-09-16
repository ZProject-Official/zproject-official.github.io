import Layout from "@theme/Layout";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageCards from "../components/HomepageCards";

export default function Home(): JSX.Element {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageCards />
    </Layout>
  );
}
