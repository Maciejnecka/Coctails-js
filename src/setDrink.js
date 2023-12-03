const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    //  e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify JSON.parse not needed if we set into localStorage
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
