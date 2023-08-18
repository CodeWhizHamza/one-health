import InfoItem from "@/app/components/InfoItem";
import { getData } from "@/app/utils";

async function getInformation() {
  const data = await getData(process.env.URL + "/api/information");
  return data;
}

async function Information() {
  const infos = await getInformation();
  return (
    <main className="container">
      <section>
        <h1 className="text-4xl text-gray-900 font-bold mt-2">Information</h1>
        {infos.length === 0 && (
          <div className="text-lg mt-6 h-96">No new information found.</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {infos.map(
            (info: {
              _id: string;
              text: string;
              image: string;
              links: string;
            }) => (
              <InfoItem key={info._id} data={info} />
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Information;
