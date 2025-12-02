const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function renderBookmarks() {
  list.innerHTML = "";

  bookmarks.forEach(function (url, i) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";

    const editBtn = document.createElement("button");
    editBtn.textContent = "редагувати";
    editBtn.classList.add("edit");
    editBtn.onclick = function () {
      const newUrl = prompt("введіть новий URL", url);
      if (newUrl) {
        bookmarks[i] = newUrl;
        saveBookmarks();
        renderBookmarks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "видалити";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
      bookmarks.splice(i, 1);
      saveBookmarks();
      renderBookmarks();
    };

    li.appendChild(link);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", function () {
  const url = input.value;
  if (!url) {
    alert("будь ласка, введіть URL!");
    return;
  }
  bookmarks.push(url);
  saveBookmarks();
  renderBookmarks();
  input.value = "";
});

renderBookmarks();
