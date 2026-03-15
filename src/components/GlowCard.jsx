import { useRef } from "react";

const GlowCard = ({ card }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const rect = currentCard.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    currentCard.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card timeline-card h-full rounded-2xl border border-black-50 bg-black-100 p-8 md:p-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#839CB5]">
            {card.company}
          </p>
          <p className="mt-2 text-white-50">{card.location}</p>
        </div>
        <div className="rounded-full border border-black-50 bg-black-200 px-4 py-2 text-sm font-semibold text-white-50">
          {card.badge}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg leading-8 text-white-50">{card.summary}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {card.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full bg-black-200 px-4 py-2 text-sm text-white-50"
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="glow" />
    </div>
  );
};

export default GlowCard;
