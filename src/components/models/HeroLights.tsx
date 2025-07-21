import * as THREE from 'three';

const HeroLights = () => (
  <>
    {/* Lamp's main light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={25} // قللت من 100 → 25
      color="white"
      decay={2}
      distance={10}
    />

    {/* Bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={10} // قللت من 40 → 10
      color="#4cc9f0"
      decay={2}
      distance={8}
    />

    {/* Purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={12} // قللت من 60 → 12
      color="#9d4edd"
      decay={2}
      distance={10}
    />

    {/* Area light for soft fill */}
    <primitive
      object={new THREE.RectAreaLight(new THREE.Color('#a259ff'), 5, 3, 2)} // intensity: 5 بدل 15
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    {/* Subtle point lights for atmosphere */}
    <pointLight position={[0, 1, 0]} intensity={3} color="#7209b7" decay={2} distance={5} />
    <pointLight position={[1, 2, -2]} intensity={3} color="#0d00a4" decay={2} distance={5} />

    {/* Optional ambient light to slightly lift shadows */}
    <ambientLight intensity={0.1} />
  </>
);

export default HeroLights;
