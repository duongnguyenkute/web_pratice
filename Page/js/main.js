document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initTabToggle();
    initCharacterToggle();
  });
  
  // ===== SLIDER FUNCTIONALITY =====
  function initSlider() {
    const buttons = document.querySelectorAll('.event__silder__buttons button');
    const track = document.querySelector('.event__silder__track');
  
    if (!buttons.length || !track) return;
  
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100;
      track.style.transform = `translateX(${offset}%)`;
  
      buttons.forEach((btn, idx) => {
        const img = btn.querySelector('img');
        if (img) {
          img.src = idx === index ? './img/Ellipse 1.svg' : './img/Ellipse 2.svg';
        }
      });
    }
  
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  }
  
  // ===== TAB SWITCHING FUNCTIONALITY =====
  function changeTab(tabId, groupId) {
    const group = document.querySelector(`[data-tab-group="${groupId}"]`);
    if (!group) return;
  
    const tabs = group.querySelectorAll('.tab__content');
    const buttons = group.querySelectorAll('.box__left__subtitle');
  
    tabs.forEach(tab => tab.classList.add('hidden'));
    buttons.forEach(btn => {
      btn.classList.remove('font-semibold', 'text--tertiary', 'background__remove');
      btn.classList.add('font-normal');
    });
  
    const activeTab = group.querySelector(`#${tabId}`);
    if (activeTab) activeTab.classList.remove('hidden');
  
    const activeBtn = Array.from(buttons).find(btn =>
      btn.getAttribute('onclick')?.includes(`'${tabId}'`)
    );
    if (activeBtn) {
      activeBtn.classList.remove('font-normal');
      activeBtn.classList.add('font-semibold', 'text--tertiary', 'background__remove');
    }
  }
  
  // ===== CHARACTER DETAIL TOGGLE =====
  function initCharacterToggle() {
    const highlights = document.querySelectorAll('.card__highlight');
  
    highlights.forEach(highlight => {
      highlight.addEventListener('click', function () {
        const card = this.closest('.trustees__card');
        const detail = card?.querySelector('.detail');
        if (detail) {
          detail.classList.toggle('hidden');
        }
      });
    });
  }
  