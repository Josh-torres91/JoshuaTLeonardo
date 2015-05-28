game.EnemyBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "Joker",
                width: 122,
                height: 297,
                spritewidth: "122",
                spriteheight: "297",
                getShape: function() {
                    return(new me.Rect(0, 0, 122, 297)).toPolygon();
                }

            }]);
        this.broken = false;
        this.health = game.data.enemyBaseHealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);

        this.type = "EnemyBaseEntity";

        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    
    loseHealth: function(damage) {
        this.health = this.health - damage;
    },
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            game.data.win = true;
//            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    onCollision: function() {

    }
});