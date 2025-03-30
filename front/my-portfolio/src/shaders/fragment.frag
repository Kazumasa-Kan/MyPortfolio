#version 300 es
precision mediump float;

in vec2 vUv;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 fragColor;

// ランダムノイズ
float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

// 補間付きノイズ
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x)
         + (c - a) * u.y * (1.0 - u.x)
         + (d - b) * u.x * u.y;
}

// 直角構造ノイズ（折り返し＋段階）
float angularFBM(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {
        vec2 warped = p * frequency;
        warped = abs(warped - floor(warped));
        warped = step(0.5, warped);
        float n = noise(warped * 8.0);
        value += n * amplitude;
        frequency *= 2.2;
        amplitude *= .3;
    }

    return value;
}

// 回転マトリクス
mat2 rotate2D(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy*2.;

    // === jitter方向を45度に傾ける ===
    mat2 rot = rotate2D(radians(45.0));
    vec2 rotatedUV = rot * (uv - 0.5) + 0.5; // 中心を基準に回転

    // jitterを「回転後の空間」に対して適用
    vec2 jitter = vec2(
        rand(floor(rotatedUV * 10.0)) * 2.5,
        rand(floor(rotatedUV * 12.0 + 5.0)) * 2.1
    );

    // 元の uv に jitter を加える（模様全体に影響）
    uv += jitter;

    vec2 offset = vec2(0, -u_time * 0.1 * jitter.y);

    // 中心回転
    vec2 center = vec2(0.5);
    vec2 rotated = rotate2D(radians(45.0)) * (uv - center) + center;

    vec2 p = rotated + offset;

    float n = floor(angularFBM(p) * 6.0) / 6.0;

    float n_x = floor(angularFBM(p + vec2(1.0 / u_resolution.x, 0.0)) * 6.0) / 6.0;
    float n_y = floor(angularFBM(p + vec2(0.0, 1.0 / u_resolution.y)) * 6.0) / 6.0;
    float diff = max(abs(n - n_x), abs(n - n_y));

    float edge = smoothstep(0.02, 0.05, diff);
    float glow = smoothstep(0.1, 0.5, diff);

    float pulse = 0.8 + 0.2 * sin(u_time * 2.0);

    vec3 edgeColor = vec3(0.1765, 0.5216, 0.9137);
    vec3 glowColor = edgeColor * 0.5;
    vec3 color = glowColor * glow + edgeColor * edge * pulse;

    fragColor = vec4(color, 1.0);
}

