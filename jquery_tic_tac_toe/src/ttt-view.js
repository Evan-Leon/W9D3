class View {
  constructor(game, $el) {
    
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = this.$el.find("ul");
    const that = this;
    $ul.on("click", "li", function (e){
      
      that.makeMove($(e.target))
    }); 
  }

  makeMove($square) {
    debugger
    // add player symbol
    const symbol = this.game.currentPlayer;
    $square.text(symbol);
    // add a class selected 
    // add alert if move is invalid
    //
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
