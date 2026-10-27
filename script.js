const searchInput = document.getElementById('event-search');
const clearButton = document.getElementById('clear-search');
const cards = document.querySelectorAll('#event-list article');
const resultCount = document.getElementById('result-count');
const emptyMessage = document.getElementById('empty-message');

function filterEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase('tr-TR');
  let visibleCount = 0;

  cards.forEach((card) => {
    const title = card.querySelector('h2').textContent.toLocaleLowerCase('tr-TR');
    const matches = title.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  emptyMessage.hidden = visibleCount !== 0;
}

if (searchInput && clearButton) {
  searchInput.addEventListener('input', filterEvents);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    filterEvents();
    searchInput.focus();
  });
}
