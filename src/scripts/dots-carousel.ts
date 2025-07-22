export const DotsCompareActive = (idContainer: string) => {
  const container = document.getElementById(idContainer) as HTMLDivElement;
  if (!container) {
    console.log('Not found container :: ', idContainer);
    return;
  };

  const scrollEl = container.querySelector('.card-scroll');
  if (!scrollEl) return;

  const dots = Array.from(container.querySelectorAll('.card-dot'));
  const cards = Array.from<HTMLDivElement>(scrollEl.querySelectorAll('.card-item'));

  const setActive = (idx: number) => {
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-theme-primary', i === idx);
      dot.classList.toggle('bg-theme-dots', i !== idx);
    });
  };
  const updateActive = () => {
    const viewportCenter = scrollEl.scrollLeft + scrollEl.clientWidth / 4;

    let nearestIdx = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 4;
      const dist = Math.abs(cardCenter - viewportCenter);
      if (dist < minDist) {
        minDist = dist;
        nearestIdx = i;
      }
    });
    setActive(nearestIdx);
  };

  updateActive();
  let rafId: number;
  scrollEl.addEventListener('scroll', () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateActive);
  });

  window.addEventListener('resize', updateActive);
}