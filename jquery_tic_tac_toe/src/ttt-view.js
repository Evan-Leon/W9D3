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
    let symbol = this.game.currentPlayer;
    
    try {
      this.game.playMove($square.data("pos"));

      if (symbol === 'x'){
        $square.addClass("mark-x");
      } else {
        $square.addClass("mark-o");
      }

      $square.text(symbol);
      if (this.game.isOver()){
        const $figcaption = $("<figcaption>");

        if (this.game.winner()) {
          $figcaption.text(this.game.winner() + ", you win!!");
        } else {
          $figcaption.text("Draw.....play again NOW");
        }
        this.$el.append($figcaption);
        const $listItems = this.$el.find("li");
        $listItems.removeClass("mark-o mark-x");
        $listItems.addClass("gameover");
        this.$el.find("ul").off();
      }
    } catch {
      alert("THAT IS AN INVALID MOVE!!, try again please");
    }
    



  }

  setupBoard() {
    const $ul = $("<ul>");
    this.$el.append($ul);
    let $li;
    let pos;
    for (let i = 0; i < 9; i++) {
      pos = [Math.floor(i/3), (i % 3)];
      $li = $("<li>"); 
      $li.data("pos", pos);
      $ul.append($li);
    }
  }
}

module.exports = View;
