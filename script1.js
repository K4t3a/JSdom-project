function searchCatalog() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.item-card');
  
  items.forEach(item => {
    const itemName = item.querySelector('h3').textContent.toLowerCase();
    if (itemName.includes(searchInput)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function filterCatalog() {
  const category = document.getElementById('category').value;
  const items = document.querySelectorAll('.item-card');
  
  items.forEach(item => {
    if (category === 'all' || item.querySelector('h3').textContent.toLowerCase().includes(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const itemCards = document.querySelectorAll('.item-card');

  itemCards.forEach(itemCard => {
    itemCard.addEventListener('mouseenter', function() {
      itemCard.classList.add('hover');
    });

    itemCard.addEventListener('mouseleave', function() {
      itemCard.classList.remove('hover');
    });

    itemCard.addEventListener('focus', function() {
      itemCard.classList.add('hover');
    });

    itemCard.addEventListener('blur', function() {
      itemCard.classList.remove('hover');
    });
  });
});
