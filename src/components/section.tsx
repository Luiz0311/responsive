type SectionProps = {
  title: string
  content: string[]
}

export function Section({ title = "Undefined", content }: SectionProps) {
  return (
    <section className="bg-white w-full h-auto">
      <h1 className='text-3xl font-bold border-b-2 border-gray-950'>{title}</h1>
      {content.map(paragraph => (
        <p className="py-3">{paragraph}</p>
      ))}
    </section>
  )
}