
const HERO_IMAGE = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop'

function scrollToId(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="pt-[78px] pb-[74px] max-[800px]:pt-[58px] max-[800px]:pb-[50px]">
      <div className="wrap">
       
        <h1 className="text-center text-[44px] min-[801px]:text-[72px] min-[1101px]:text-[102px] leading-[1.02] tracking-[-0.06em] m-0 max-w-[1060px] mx-auto">
          Run your team without the tab switching.
        </h1>

        <p className="mt-7 text-center text-[19px] leading-[1.55] text-[#60615d] max-w-[620px] mx-auto">
          Novi brings tasks, docs, and conversations into one calm workspace built for small, fast-moving teams.
        </p>

        <div className="flex gap-[10px] mt-9 justify-center max-[470px]:flex-col max-[470px]:items-stretch">
          <button
            className="bg-ink text-off-white border-0 rounded-full px-[18px] py-[11px] cursor-pointer transition-transform hover:-translate-y-px max-[470px]:text-center"
            onClick={() => scrollToId('#start')}
          >
            Start free&nbsp; →
          </button>
          <button
            className="border border-line bg-transparent px-[18px] py-[11px] rounded-full cursor-pointer hover:bg-[#f2f2ee] max-[470px]:text-center"
            onClick={() => scrollToId('#workflow')}
          >
            See how it works&nbsp; ↓
          </button>
        </div>

        <div className="mt-[72px] max-[800px]:mt-[50px] rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(24,25,22,0.13)]">
         
          <img
            src={HERO_IMAGE}
            alt=""
            className="block w-full aspect-[16/9] max-[800px]:aspect-[4/3] object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
