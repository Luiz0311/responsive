import { Children } from "react"

export function Section({ children }: any) {

  return (
    <section className="flex flex-col items-center">
      {Children.map(children, child => <>{child}</>)}
    </section>
  )
}