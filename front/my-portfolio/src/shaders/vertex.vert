#version 330 es
layout(location = 0) in vec3 position; // 頂点座標
layout(location = 1) in vec2 uv;       // UV座標

out vec2 vUv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * mvPosition;
}
