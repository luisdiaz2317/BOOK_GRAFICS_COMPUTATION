

// Constructor and object definition
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function TextureRenderable(myTexture) {
    Renderable.call(this);
    Renderable.prototype.setColor.call(this, [1, 1, 1, 0]); // Alpha of 0: switch off tinting of texture
    Renderable.prototype._setShader.call(this, gEngine.DefaultResources.getTextureShader());
    this.mTexture = myTexture;          // texture for this object, cannot be a "null"
}
gEngine.Core.inheritPrototype(TextureRenderable, Renderable);


TextureRenderable.prototype.draw = function (vpMatrix) {
    // activate the texture
    gEngine.Textures.activateTexture(this.mTexture);
    Renderable.prototype.draw.call(this, vpMatrix);
};

TextureRenderable.prototype.getTexture = function () { return this.mTexture; };
TextureRenderable.prototype.setTexture = function (t) { this.mTexture = t; };

