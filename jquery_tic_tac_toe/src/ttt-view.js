class View {
  constructor(game, $el) {
    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove($square) {

  }

  setupBoard() {
    const $ul = $("<ul>");
    $(".ttt").append($ul);
    let $li;
    for (let i = 0; i < 9; i++) {
      $li = $("<li>"); 
      $ul.append($li);
    }
  }
}

module.exports = View;
