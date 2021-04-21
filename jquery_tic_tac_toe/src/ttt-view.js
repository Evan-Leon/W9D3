class View {
  constructor(game, $el) {
    
    this.$el = $el;
    this.game = game;
    this.setupBoard();
  }

  bindEvents() {

  }

  makeMove($square) {

  }

  setupBoard() {
    const $ul = $("<ul>");
    this.$el.append($ul);
    let $li;
    for (let i = 0; i < 9; i++) {
      $li = $("<li>"); 
      $ul.append($li);
    }
  }
}

module.exports = View;
