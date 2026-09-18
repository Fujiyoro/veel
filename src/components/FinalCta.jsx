export default function FinalCta() {
  return (
    <section className="py-[120px]" id="start">
      <div className="wrap">
        <div className="bg-accent rounded-[27px] p-[65px] max-[800px]:p-[40px_25px] grid grid-cols-1 min-[801px]:grid-cols-[1.2fr_1fr] gap-[50px] max-[800px]:gap-[25px] items-end">
          <h2 className="text-[45px] min-[801px]:text-[60px] min-[1101px]:text-[76px] leading-[0.92] tracking-[-0.07em] m-0">
            Keep the work
            <br />
            in one place.
          </h2>
          <div>
            <p className="text-[#33366b] leading-[1.6] max-w-[390px]">
              Bring your projects, conversations, docs, and deadlines into a workspace your team can actually enjoy
              using.
            </p>
            <button
              className="bg-ink text-off-white border-0 rounded-full px-[18px] py-[11px] cursor-pointer mt-2 transition-transform hover:-translate-y-px max-[470px]:w-full"
              onClick={() => alert('Cant start for free in this economy :)')}
            >
              Start free&nbsp; →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
