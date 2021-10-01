import style from "../styles/home.module.css"

export default function Home() {
  return (
    <>
    <div className={style.wrapper}>
      <header className={style.headerWrapper}>
        <div className={style.headerContainer}>
          <img src='/hello.png'/>
          <h1>Página</h1>
        </div>
        <div className={style.description}>
          <p>I'm a Product Designer with UI & UX skills</p>
          <p>who love to build powerful and elegant products</p>
          <p>with x years of experience in the tech industry</p>
          <p>I'm currently working at Lorem Ipsum.</p>
        </div>
      </header>
    <main className={style.mainContent}>
      <section className={style.project}>
        <img src='/preview.jpg'/>
        <h2 className={style.projectTitle}>
          Não faço ideia
        </h2>
        <p className={style.legenda}>Enterprise 2009</p>
      </section>
      <section className={style.project}>
        <img src='/preview.jpg'/>
        <h2 className={style.projectTitle}>
          Rapaz sei não
        </h2>
        <p className={style.legenda}>Enterprise 2009</p>
      </section>
      <section className={style.project}>
        <img src='/preview.jpg'/>
        <h2 className={style.projectTitle}>
          Não Sei
        </h2>
        <p className={style.legenda}>Enterprise 2009</p>
      </section>
      <section className={style.project}>
        <img src='/preview.jpg'/>
        <h2 className={style.projectTitle}>
          Não
        </h2>
        <p className={style.legenda}>Enterprise 2009</p>
      </section>

    </main>
    </div>
    </>
  )
}
