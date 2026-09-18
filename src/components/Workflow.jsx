const STEPS = [
  {
    index: '01 / PLAN',
    title: 'Give the work a home.',
    body: 'Turn a goal into a clear project with owners, milestones, and tasks.',
  },
  {
    index: '02 / WORK',
    title: 'Make progress visible.',
    body: 'Everyone sees what needs attention without asking for another update.',
  },
  {
    index: '03 / DISCUSS',
    title: 'Talk beside the task.',
    body: 'Keep questions and decisions connected to the thing they are about.',
  },
  {
    index: '04 / SHIP',
    title: 'Close the loop.',
    body: 'Deadlines and milestones live in the same place as the work.',
  },
]

export default function Workflow() {
  return (
    <section className="py-[110px] max-[800px]:py-20" id="workflow">
      <div className="wrap">
        <div className="bg-dark text-off-white rounded-[28px] p-[75px_65px] max-[800px]:p-[45px_25px]">
          <div className="grid grid-cols-1 min-[801px]:grid-cols-2 gap-[50px] mb-[50px]">
            <h2 className="text-[38px] min-[801px]:text-[52px] min-[1101px]:text-[65px] leading-[0.98] tracking-[-0.065em] m-0">
              Plan. Work.
              <br />
              Keep moving.
            </h2>
            <p className="text-[#aeb1aa] text-[17px] leading-[1.6] max-w-[450px] mt-1 mb-0">
              Novi connects the small moments that make a project move: assigning a task, asking a question, writing
              a decision, and hitting the deadline.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[471px]:grid-cols-2 min-[801px]:grid-cols-4 border-t border-[#454844]">
            {STEPS.map((step, i) => (
              <div
                key={step.index}
                className={`group pt-[27px] pr-0 pl-0 min-[801px]:pl-5 min-[801px]:first:pl-0 min-h-[150px] min-[801px]:border-r min-[801px]:last:border-r-0 border-[#454844] max-[800px]:border-b max-[800px]:pb-[25px] max-[800px]:pr-[15px]`}
              >
                <div className="text-accent font-mono text-[11px] tracking-[0.08em] uppercase mb-[25px]">
                  {step.index}
                </div>
                <h3 className="text-[19px] m-0 mb-[10px] tracking-[-0.03em] transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[#9ea19a] m-0 max-w-[210px]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
