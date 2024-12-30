function onSelectSportsman(e) {
  const targetElement = e.target;
  if (targetElement.className === "arrow") {
    // const item  = targetElement.parent
    const item = targetElement.closest(".item");

    // const listContainer = item.parent
    const listContainer = item.closest("[class^=list]");
    if (listContainer.className === "list-main")
      listContainer.nextElementSibling.append(item);
    else listContainer.previousElementSibling.append(item);
  }
}
document.querySelector(".container").onclick = onSelectSportsman;
