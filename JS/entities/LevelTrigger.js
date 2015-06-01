 game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings){
       this._super(me.Entity, 'init', [x, y, settings]); 
       this.body.onCollision = this.onCollision.bind(this);
       this.level = settings.level;
    },
    
    onCollision: function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer();
    
    }
});