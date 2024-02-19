let tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let div;

for (let tooltip of tooltips) {
  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    if (div && div.textContent === tooltip.getAttribute('title')) {
      div.remove();
      div = null;
      return;
    } else if (div) {
      div.remove();
    }
    div = document.createElement('div');
    div.classList.add('tooltip');
    div.classList.add('tooltip_active');
    div.textContent = tooltip.getAttribute('title');
    let coords = getCoords(tooltip);
    div.style.left = coords.left + "px";
    div.style.top = coords.bottom + "px";
    div.style.position = "absolute";

    document.body.append(div);
  })
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}