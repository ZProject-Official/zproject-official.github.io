import Layout from "@theme/Layout";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageCards from "../components/HomepageCards";

export default function Home(): JSX.Element {
  return (
    <Layout description="Transformez vos idées en réalité.<head />">
      <HomepageHeader />
      <HomepageCards />
    </Layout>
  );
}
