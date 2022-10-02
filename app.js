const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");

const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

const listItems = document.querySelectorAll(".list-item");

let selectedItem = activeListItem;

dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item active";

  listItems.forEach((item) => {
    item.className = "list-item";
    selectedItem.className = "list-item active";
  });
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  activeListItem.className = "list-item active night";

  listItems.forEach((item) => {
    item.className = "list-item";
    selectedItem.className = "list-item active night";
  });
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  activeListItem.className = "list-item active light";

  listItems.forEach((item) => {
    item.className = "list-item";
    selectedItem.className = "list-item active light";
  });
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((item) => {
      item.className = "list-item";
    });
    if (sidebar.classList.contains("night")) {
      item.className = "list-item active night";
    } else if (sidebar.classList.contains("light")) {
      item.className = "list-item active light";
    } else {
      item.className = "list-item active";
    }

    selectedItem = item;
  });
});
