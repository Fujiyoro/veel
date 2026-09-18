import MarqueeModule from 'react-fast-marquee'


const Marquee = MarqueeModule.default

const LOGOS = [  'Thanks', 'for', 'the', 'opportunity', 'to', 'apply', 'to', 'this', 'role', 'I', 'am', 'grateful', 'and ', 'broke.']

export default function Trust() {
  return (
    <section className="pt-[85px] pb-[30px] text-center" id="resources">
      <div className="wrap">
        <p className="text-[#858680] text-[13px] font-mono tracking-[0.08em] uppercase">
          Built for teams that prefer momentum over process
        </p>

     
        <div className="mt-7">
          <Marquee autoFill gradient gradientColor="white" gradientWidth={120} speed={55}>
            {LOGOS.map((logo, i) => (
              <span key={i} className="mx-[22px] text-[#62635f] font-bold tracking-[-0.03em]">
                {logo}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="mt-[75px] mx-auto max-w-[780px] text-[27px] min-[801px]:text-[36px] min-[1101px]:text-[43px] leading-[1.08] tracking-[-0.055em]">
          &ldquo;Novi gives us just enough structure to know what&rsquo;s happening, without turning our work into a
          second job.&rdquo;
          <small className="block mt-5 text-[#858680] text-xs tracking-normal">
            — Jacky Chen, Product Lead at Veel
          </small>
        </div>
      </div>
    </section>
  )
}
