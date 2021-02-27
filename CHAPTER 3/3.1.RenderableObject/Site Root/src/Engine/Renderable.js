//Constructor
//Recibe el simpleshader como un parametro con una variable de instancia de color
function Renderable(shader) {
    this.mShader = shader; // the shader for shading this object
    this.mColor = [1, 1, 1, 1]; // Color for fragment shader
    }

    Renderable.prototype.draw = function() {
        var gl = gEngine.Core.getGL();
        this.mShader.activateShader(this.mColor);//activamos el sombreador
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);//enviamos los vertices
        };    

//Getter and Setter variable de instancia de color
Renderable.prototype.setColor = function(color) { this.mColor = color; };
Renderable.prototype.getColor = function() { return this.mColor; };