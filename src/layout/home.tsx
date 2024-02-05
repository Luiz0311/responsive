import { Header } from "../components/header";
import { Main } from "../components/main";
import { Section } from "../components/section";

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <h2>Introdução</h2>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3243728.jpg&f=1&nofb=1&ipt=e69a77c94d9f85278eacf5007e89cdc934a978c637a87f2305cf81be7c064812&ipo=images"
            alt="banner"
            className="py-10 lg:max-w-[1000px]"
          />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur veritatis nesciunt consequatur unde, laboriosam, quibusdam vel ratione ut magnam aspernatur distinctio similique nihil voluptate temporibus optio quaerat harum atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur veritatis nesciunt consequatur unde, laboriosam, quibusdam vel ratione ut magnam aspernatur distinctio similique nihil voluptate temporibus optio quaerat harum atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur veritatis nesciunt consequatur unde, laboriosam, quibusdam vel ratione ut magnam aspernatur distinctio similique nihil voluptate temporibus optio quaerat harum atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur veritatis nesciunt consequatur unde, laboriosam, quibusdam vel ratione ut magnam aspernatur distinctio similique nihil voluptate temporibus optio quaerat harum atque.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae pariatur veritatis nesciunt consequatur unde, laboriosam, quibusdam vel ratione ut magnam aspernatur distinctio similique nihil voluptate temporibus optio quaerat harum atque.</p>
        </Section>
      </Main>
    </>
  )
}