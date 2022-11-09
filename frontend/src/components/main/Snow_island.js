/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Andreas (https://sketchfab.com/adam4sx)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/floating-snowland-7be7ee3c147448c191d67cde706d53fd
title: Floating Snowland
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function SnowIsland(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/snow_island.glb')
  // const { ref, actions, names } = useAnimations(animations, group)
  // const [index, setIndex] = useState(0)
  // useEffect(() => {
  //   // Reset and fade in animation after an index has been changed
  //   actions[names[index]].reset().fadeIn(0.5).play()
  //   // In the clean-up phase, fade it out
  //   return () => actions[names[index]]
  // }, [index, actions, names])
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene" scale={12} position={[0, -15, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              {/* <group name="Sphere002_44" position={[0.01, 3.57, -0.61]} scale={0.11}>
                <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.material_0} />
              </group>
              <group name="Sphere003_45" position={[-0.28, 3.6, -0.6]} rotation={[0, 0, -0.05]} scale={0.11}>
                <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.material_0} />
              </group> */}
              <group name="Sphere_2" rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
              </group>
              {/* <group name="TembokBelakang_Cube004_3" position={[0.02, 3.18, 0.7]} rotation={[Math.PI / 2, 0, -1.55]} scale={0.12}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.003']} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.007']} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Material.004']} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.006']} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.005']} />
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.008']} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.013']} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.011']} />
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Material.010']} />
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.012']} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.016']} />
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.014']} />
                <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Material.017']} />
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.015']} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Material.009']} />
              </group>
              <group name="Cube001_4" position={[-0.04, 3.17, 0.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials['Material.018']} />
              </group>
              <group name="Cube005_5" position={[0.05, 3.17, 0.5]} rotation={[0, 1.43, -Math.PI]} scale={0}>
                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.material_0} />
              </group>
              <group name="Cube009_6" position={[0, 3.34, 0.96]} rotation={[-1.67, 0.01, 1.42]} scale={0.05}>
                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials['Material.019']} />
              </group> */}
              <group name="Cylinder_7" position={[1.34, 2.47, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder002_8" position={[1.34, 2.47, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder001_9" position={[1.69, 2.38, 0.7]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder000_10" position={[1.69, 2.38, 0.7]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder002_11" position={[0.48, 2.48, 2.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder001_12" position={[0.48, 2.48, 2.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder003_13" position={[1.75, 2.52, -0.79]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder003_14" position={[1.75, 2.52, -0.79]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder004_15" position={[0.79, 2.38, -1.36]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder004_16" position={[0.79, 2.38, -1.36]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder005_17" position={[1.35, 2.51, -1.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder005_18" position={[1.35, 2.51, -1.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials['Material.021']} />
              </group>
              {/* <group name="Cylinder006_19" position={[1.47, 2.44, -0.4]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder006_20" position={[1.47, 2.44, -0.4]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder007_21" position={[1.67, 2.43, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder007_22" position={[1.67, 2.43, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder008_23" position={[0.93, 2.46, 2.39]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder008_24" position={[0.93, 2.46, 2.39]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder009_25" position={[0.24, 2.42, 2.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder009_26" position={[0.24, 2.42, 2.52]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder010_27" position={[1.52, 2.38, 1.68]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder010_28" position={[1.52, 2.38, 1.68]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder011_29" position={[1.36, 2.42, 2.02]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder011_30" position={[1.36, 2.42, 2.02]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder012_31" position={[1.72, 2.34, 1.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder012_32" position={[1.72, 2.34, 1.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder013_33" position={[1.23, 2.38, 1.21]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder013_34" position={[1.23, 2.38, 1.21]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder014_35" position={[2.45, 2.34, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder014_36" position={[2.45, 2.34, 0.46]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder015_37" position={[2.15, 2.36, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder015_38" position={[2.15, 2.36, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cylinder016_39" position={[0.93, 2.3, 1.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_Cylinder016_40" position={[0.93, 2.3, 1.62]} rotation={[Math.PI / 2, 0, 0]} scale={0.17}>
                <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials['Material.021']} />
              </group> */}
              {/* <group name="Cylinder017_41" position={[-0.03, 3.23, 0.98]} rotation={[1.44, -0.18, 0.05]} scale={0.01}>
                <mesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials.None} />
              </group>
              <group name="Cube_Cube003_42" position={[-0.03, 3.23, 0.98]} rotation={[1.44, -0.18, 0.05]} scale={0.01}>
                <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.None} />
              </group>
              <group name="Sphere001_43" position={[-0.03, 3.23, 0.98]} rotation={[1.44, -0.18, 0.05]} scale={0.01}>
                <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials.None} />
              </group>
              <group name="Icosphere_46" position={[-1.77, 2.55, 0]}>
                <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.material_0} />
              </group>
              <group name="Cube_47" position={[-0.05, 3.29, 0.6]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                <mesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials['Material.022']} />
              </group>
              <group name="Cube002_48" position={[-0.05, 3.3, 0.59]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                <mesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials['Material.022']} />
              </group>
              <group name="Cube003_49" position={[-0.05, 3.32, 0.59]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials['Material.022']} />
              </group>
              <group name="Cube004_50" position={[-0.05, 3.29, 0.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['Material.022']} />
              </group>
              <group name="Cube006_51" position={[-0.05, 3.3, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                <mesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials['Material.022']} />
              </group>
              <group name="Cube007_52" position={[-0.02, 3.29, 0.6]} rotation={[Math.PI / 2, 0, -2.59]} scale={0.03}>
                <mesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials['Material.022']} />
              </group> */}
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/snow_island.glb')
