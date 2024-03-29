import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { client } from "../../../util/genqlClient";

export default function Item() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (id: string) =>
    client.query({
      getOneItem: {
        __args: { id },
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        url: true,
        createdAt: true,
      },
    });

  const deleteItem = async (id: string) => {
    await client
      .mutation({
        deleteItem: {
          __args: { id },
          id: true,
        },
      })
      .then((_res) => router.push("/"));
  };

  const { data, error } = useSWR(id, fetcher);

  return (
    <div>
      <Link href="/">Back</Link>
      {error && <p>Oops, something went wrong!</p>}
      {data?.getOneItem && (
        <>
          <h1>{data.getOneItem.title}</h1>
          <p className="description">{data.getOneItem.description}</p>
          {data.getOneItem.imageUrl ? (
            <img src={data.getOneItem.imageUrl} height="640" width="480" />
          ) : (
            <img
              src="https://user-images.githubusercontent.com/33921841/132140321-01c18680-e304-4069-a0f0-b81a9f6d5cc9.png"
              height="640"
              width="480"
            />
          )}
          {data.getOneItem.url && (
            <p className="description">
              <a
                href={data.getOneItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="external-url"
              >
                Check out item &#8599;
              </a>
            </p>
          )}
          <div>
            <em>Created At: {data.getOneItem && new Date(data.getOneItem.createdAt).toDateString()}</em>
            <button className="delete" onClick={(evt) => data.getOneItem && deleteItem(data.getOneItem.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
