import { Children } from 'react'

export function Main({ children }: any) {
  return (
    <>
      <div className="p-6"></div>
      <main className='max-w-[1240px] mx-auto px-4'>
        {Children.map(children, child => <>{child}</>)}
      </main>
    </>
  )
}