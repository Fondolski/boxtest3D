import {useState, useEffect, useRef, useLayoutEffect} from 'react'
import {PerspectiveCamera, OrbitControls, Environment} from '@react-three/drei'
import {useLoader, useFrame,  extend} from '@react-three/fiber'
import anglesToRadian from '../utils/anglesToRadian'
import angleToRadian from '../utils/anglesToRadian';
import gsap from 'gsap';




export default function ThreeBody() {

    const doorRef = useRef(null)
    const doorGroupRef = useRef(null)
    const [open, setOpen] = useState(false)

    useFrame((state)=> {
       // console.log(doorRef.current)
       doorRef.current.position.set(-20, 0, 0)
       doorGroupRef.current.position.set(40, 40, 40)
    })


    const handleBoxOpen = (open) => {

        if(doorRef && !open) {
            console.log('1')
            gsap.to(doorGroupRef.current.rotation, {
                z: -angleToRadian(90),
                duration: 5
            })
            setOpen(!open)
             /**gsap.to(doorRef.current.rotation, {
                x: -angleToRadian(90),
                duration: 5
             }) */
             
        }
        if(doorRef && open) {

            console.log('2')
            gsap.to(doorGroupRef.current.rotation, {
                z: 0,
                duration: 5
            })

            setOpen(!open)
             /**gsap.to(doorRef.current.rotation, {
                x: -angleToRadian(90),
                duration: 5
             }) */
             
        }

    }


    return(
        <>
        <PerspectiveCamera makeDefault position={[0, 100, 200]} />
        <OrbitControls />
        <mesh position={[0,0,0]} rotation={[-(anglesToRadian(90)), 0 ,0]} castShadow receiveShadow>
          <boxGeometry args={[500, 300]}  castShadow receiveShadow  />
          <meshStandardMaterial color={'#FFC0CB'}/>
        </mesh>
        
        <group onClick={()=> handleBoxOpen(open)}>
        <mesh position={[20, 20, 20]} castShadow receiveShadow rotation={[0, 0, (angleToRadian(90))]}>
            <boxGeometry  args={[40, 40]} color={'red'} />
            <meshStandardMaterial castShadow receiveShadow color={'red'} />
        </mesh>
        <mesh position={[20, 20, 60]} rotation={[0, 0, (-angleToRadian(90))]}>
            <boxGeometry args={[40, 40]} color={'blue'} />
            <meshStandardMaterial color={'blue'} />
        </mesh>
        <mesh position={[0, 20, 40]} castShadow receiveShadow  rotation={[0, (-angleToRadian(90)), 0]}>
            <boxGeometry args={[40, 40]} castShadow receiveShadow  color={'green'} />
            <meshStandardMaterial color={'green'} />
        </mesh>
        <mesh position={[40, 20, 40]} rotation={[0, (-angleToRadian(90)), 0]}>
            <boxGeometry args={[40, 40]} castShadow receiveShadow  color={'green'} />
            <meshStandardMaterial color={'green'} />
        </mesh>
      <group ref={doorGroupRef}>
            <mesh ref={doorRef}  castShadow receiveShadow  rotation={[-(anglesToRadian(90)), 0, 0]}>
                <boxGeometry args={[40, 40]} color={'yellow'} />
                <meshStandardMaterial color={'yellow'} />
            </mesh>
        </group>
        </group>
        <ambientLight args={['#ffffff', 3]}/>
        </>
    )
}