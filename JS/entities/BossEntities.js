game.BossEntities = me.Entity.extend({
    init: function(x, y, settings) {
       this._super(me.Entity, 'init', [x, y, {
                image: "Boss",
                spritewidth: "500",
                spriteheight: "170",
                width: 500,
                height: 170,
                getShape: function() {
                    return (new me.Rect(0, 0, 500, 170)).toPolygon();
                }
            }]);
        
        this.spritewidth = 60;
        var width = settings.width;
        x = this.pos.x;
        this.statX = x;
        this.endX = x + width - this.spritewidth;
        this.pos.x = x + width - this.spritewidth;
        this.updateBounds();
        
        this.alwaysUpdate = true;
        
        this.walkLeft = false;
        this.alive = true
        this.type = "Boss";
        
        this.body.setVelocity(4, 6);
    },
    uupdate: function(delta){
        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);
    
    
        if(this.alive){
            if(this.walkLeft && this.pos.x <= this.statX){
                this.walkLeft = false;
            }else if(!this.walkLeft && this.pos.x >= this.endX){
                this.walkLeft = true;
            }
            this.flipX(this.walkLeft);
            this.body.vel.x += (this.walkLeft) ? -this.body.accel.x * me.timer.tick : this.body.accel.x * me.timer.tick;
            
        }else{
            me.game.world.removeChild(this);
        }
    
    
        this._super(me.Entity, "update", [delta]);
        return true;
    }, 
    
    collideHandler: function() {
        
    }
});
