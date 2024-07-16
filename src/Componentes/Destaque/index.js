import './Destaque.css'

const Destaque = () => {
    return (
        <section className='destaque'>
            <div className='destaque-descricao-box'>
                <h1>Indie</h1>
                <h3>To Sweet - Hozier</h3>
                <p>Andrew John Hozier-Byrne (17 de março de 1990), ou apenas Hozier,
                    é um músico e cantor irlandês de Bray, Condado de Wicklow.
                    Em 2013 lançou o seu primeiro EP, incluindo o single "Take Me to Church",
                    e o seu segundo EP From Eden em 2014. O seu primeiro álbum de estúdio,
                    Hozier, foi lançado na Irlanda em setembro de 2014
                    e no resto do mundo em outubro de 2014.
                </p>
            </div>
            <div className='destaque-video-box'>
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/aezstCBHOPQ"
                    title="Hozier - Too Sweet (Official Lyric Video)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    )
}
export default Destaque;