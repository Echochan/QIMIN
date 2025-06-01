export default async function Docs(
  {params}: {params: Promise<{slug: string[]}>},
) {
  const { slug } = await params
  if(slug?.length === 2) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">feature: {slug[0]} and concept: {slug[1]}</h1>
      </main>
    )
  } 
  else if(slug?.length === 1) {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">feature: {slug[0]}</h1>
        </main>
    )
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Docs</h1>
    </main>
  )
}