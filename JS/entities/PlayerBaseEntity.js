game.PlayerBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "Batmobile",
                width: 100,
                height: 75,
                spritewidth: "100",
                spriteheight: "75",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 75)).toPolygon();
                }

            }]);
        this.broken = false;
        this.health = game.data.playerBasehealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);

        this.type = "PlayerBase";

        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            game.data.win = false;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    loseHealth: function(damage) {
        this.health = this.health = damage;
    },
    onCollision: function() {

    }

});