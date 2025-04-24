
import ReactSwagger from "@/components/react-swagger";
import { getApiDocs } from "@/lib/swagger";


export default async function Page() {
  const spec = await getApiDocs();
  return (
    <section className="container mx-auto">
      <ReactSwagger spec={spec} />
    </section>
  );
}