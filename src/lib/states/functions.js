function cifrarId(id) {
  return window.btoa(id);
}

function descifrarId(id) {
  return window.atob(id);
}
