let highestZ = 1;

function makeDraggable(el) {
  let offsetX, offsetY, isDragging = false;

  el.addEventListener("mousedown", (e) => {
    isDragging = true;
    highestZ++;
    el.style.zIndex = highestZ;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    el.style.left = (e.clientX - offsetX) + "px";
    el.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

document.querySelectorAll(".draggable").forEach(makeDraggable);

function addShirt(thumbnail) {
  const existing = document.querySelector(`img.worn-shirt[src="${thumbnail.src}"]`);

  if (existing) {
    existing.remove();
  } else {
    const img = document.createElement('img');
    img.src = thumbnail.src;
    img.classList.add('draggable', 'worn-shirt', 'shit');
    document.querySelector('.left').appendChild(img);
    makeDraggable(img);
  }
}
function addPant(thumbnail) {
  const existing = document.querySelector(`img.worn-pant[src="${thumbnail.src}"]`);

  if (existing) {
    existing.remove();
  } else {
    const img = document.createElement('img');
    img.src = thumbnail.src;
    img.classList.add('draggable', 'worn-pant', 'pant');
    document.querySelector('.left').appendChild(img);
    makeDraggable(img);
  }
}