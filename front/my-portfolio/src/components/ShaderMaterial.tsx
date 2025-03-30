import { RawShaderMaterial, GLSL3, Vector2 } from "three";
import vertexShader from "@/shaders/vertex.vert";
import fragmentShader from "@/shaders/fragment.frag";

/**
* remove this row : #version 330 es
*/
function removeWebGLVersionRow(shader: string){
  const idx = shader.indexOf('\n', 0);
  shader = shader.substring(idx + 1);

  return shader
}


const material = new RawShaderMaterial({
  uniforms: {
    u_time: { value: 0.0 },
    u_resolution: { value: new Vector2(1,1) },
    u_mouse: { value: new Vector2(0, 0) }
  },
  vertexShader: removeWebGLVersionRow(vertexShader),
  fragmentShader: removeWebGLVersionRow(fragmentShader),
  glslVersion: GLSL3
});

export default material;
