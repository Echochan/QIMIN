export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Product Details {params?.productId}</h1>
    </main>
  );
}
