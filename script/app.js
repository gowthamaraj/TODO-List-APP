const search = document.querySelector(".search-todo input");
const add = document.querySelector(".add-todo");
const lists = document.querySelector(".lists");

// add to the list
const makeList = (listText) => {
  const list = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${listText}</span><i class="fa fa-trash delete" aria-hidden="true"></i></li>`;
  lists.innerHTML += list;
};
add.addEventListener("submit", (e) => {
  e.preventDefault();
  makeList(add.add.value.trim());
  add.reset();
});

//delete list
lists.addEventListener("click", e=> {
  if(e.target.tagName == 'I'){
      e.target.parentElement.remove();
  }
})

//filter
search.addEventListener('keyup',e => {
    const search_word = search.value.toLowerCase().trim();
    Array.from(lists.children).filter((list) => {
        return !list.textContent.toLowerCase().includes(search_word);
    }).forEach((list) => {
        list.classList.add('filter');
    });

    Array.from(lists.children).filter((list) => {
        return list.textContent.toLowerCase().includes(search_word);
    }).forEach((list) => {
        list.classList.remove('filter');
    });
})