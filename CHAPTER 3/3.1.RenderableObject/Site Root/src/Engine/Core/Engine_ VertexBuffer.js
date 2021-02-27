"use strict"; // Operate in Strict mode
var gEngine = gEngine || { };
// The VertexBuffer object
gEngine.VertexBuffer = (function() {
    // First: define the vertices for a square
var verticesOfSquare = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
    ];//0.0 --> z-Dimension, is because is 2D

// reference to the vertex positions for the square in the gl context
var mSquareVertexBuffer = null; //private for be into the function
var getGLVertexRef = function() { return mSquareVertexBuffer;  };//
var initialize = function() {
var gl = gEngine.Core.getGL();
// Step A: Create a buffer on the gGL context for our vertex positions
mSquareVertexBuffer = gl.createBuffer(); //--> storing the vertex positions and the reference to the GPU buffer in the global variable
// Step B: Activate vertexBuffer
gl.bindBuffer(gl.ARRAY_BUFFER, mSquareVertexBuffer);
// Step C: Loads verticesOfSquare into the vertexBuffer
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesOfSquare),
gl.STATIC_DRAW);
};
var mPublic = {
initialize: initialize,
getGLVertexRef: getGLVertexRef
};
return mPublic;
}());