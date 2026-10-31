uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;

varying vec2 vUv;

void main() {
    vec2 direction = vUv - uMouse;

    float distSq = dot(direction, direction);
    float falloff = exp(-distSq * 18.0);

    vec2 safeDirection =
        direction * inversesqrt(max(distSq, 0.00001));

    float bend = 0.05 * falloff * uHover;

    vec2 uv = vUv + safeDirection * bend;

    gl_FragColor = texture2D(uTexture, uv);
}