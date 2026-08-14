"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

// Signature artifact: a live system-architecture graph. Nodes (components) wired
// by edges (dependencies), a few amber "active" nodes carrying signal. Slowly
// rotates, tilts toward the cursor. Grounds the "I architect systems" thesis in
// something you can see through, not a stock hero image.

const CYAN = new THREE.Color("#38bdf8");
const AMBER = new THREE.Color("#f5a623");
const DIM = new THREE.Color("#1f6feb");

function buildGraph(count: number, radius: number) {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    // uniform-ish points inside a sphere volume
    const u = Math.random();
    const v = Math.random();
    const w = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(w);
    nodes.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.82, // slight vertical squash
        r * Math.cos(phi)
      )
    );
  }
  const edges: [number, number][] = [];
  const maxDist = radius * 0.5;
  for (let i = 0; i < count; i++) {
    const near: [number, number][] = [];
    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      const d = nodes[i].distanceTo(nodes[j]);
      if (d < maxDist) near.push([d, j]);
    }
    near.sort((a, b) => a[0] - b[0]);
    for (let k = 0; k < Math.min(3, near.length); k++) {
      const j = near[k][1];
      if (i < j) edges.push([i, j]);
    }
  }
  return { nodes, edges };
}

function Graph({ reduce }: { reduce: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);

  const { nodes, edges, activeSet } = useMemo(() => {
    const { nodes, edges } = buildGraph(140, 2.5);
    const activeSet = new Set<number>();
    while (activeSet.size < 9)
      activeSet.add(Math.floor(Math.random() * nodes.length));
    return { nodes, edges, activeSet };
  }, []);

  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      positions.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [nodes, edges]);

  // Set instanced node transforms + colors once.
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const initialized = useRef(false);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    if (!initialized.current && nodesRef.current) {
      nodes.forEach((p, i) => {
        dummy.position.copy(p);
        const s = activeSet.has(i) ? 0.055 : 0.03;
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        nodesRef.current!.setMatrixAt(i, dummy.matrix);
        nodesRef.current!.setColorAt(i, activeSet.has(i) ? AMBER : CYAN);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
      if (nodesRef.current.instanceColor)
        nodesRef.current.instanceColor.needsUpdate = true;
      initialized.current = true;
    }

    if (reduce) {
      g.rotation.set(0.15, 0.6, 0);
      return;
    }
    g.rotation.y += delta * 0.09;
    const px = state.pointer.x;
    const py = state.pointer.y;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, py * 0.25 + 0.12, 0.04);
    g.position.x = THREE.MathUtils.lerp(g.position.x, px * 0.35, 0.04);
  });

  return (
    <group ref={group}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color={DIM} transparent opacity={0.28} />
      </lineSegments>
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export default function ArchitectureLattice() {
  const reduce = useReducedMotion() ?? false;
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Graph reduce={reduce} />
    </Canvas>
  );
}
