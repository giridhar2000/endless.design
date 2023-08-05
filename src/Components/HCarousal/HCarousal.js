import React from 'react'
import "../HCarousal/HCarousal.css"
import comiccafe from "../../Assets/img/comiccafe.jpg"
import chaicup from "../../Assets/img/chaicup.jpg"
import esquare from "../../Assets/img/esquare.jpg"
import mainbrain from "../../Assets/img/mainbrain.jpg"
import mask from "../../Assets/img/mask.png"
import mm from "../../Assets/img/mm.jpg"
import spotlight from "../../Assets/img/spotlight.jpg"
import Tacadamy from "../../Assets/img/Tacadamy.jpg"
import tvs from "../../Assets/img/tvs.jpg"

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

function Items({ w = 0.7, gap = 0.15 }) {
    const { urls } = useSnapshot(state)
    const { width } = useThree((state) => state.viewport)
    const xW = w + gap
    return (
        <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
            <Minimap />
            <Scroll>
                {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */}
            </Scroll>
        </ScrollControls>
    )
}

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
    const ref = useRef()
    const scroll = useScroll()
    const { clicked, urls } = useSnapshot(state)
    const [hovered, hover] = useState(false)
    const click = () => (state.clicked = index === clicked ? null : index)
    const over = () => hover(true)
    const out = () => hover(false)
    useFrame((state, delta) => {
        const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
        ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
        if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
        if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
        if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
        ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
        ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
    })
    return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}

function Minimap() {
    const ref = useRef()
    const scroll = useScroll()
    const { urls } = useSnapshot(state)
    const { height } = useThree((state) => state.viewport)
    useFrame((state, delta) => {
        ref.current.children.forEach((child, index) => {
            const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
            child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, 8, delta)
        })
    })
    return (
        <group ref={ref}>
            {urls.map((_, i) => (
                <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
            ))}
        </group>
    )
}

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])
const state = proxy({
    clicked: null,
    urls: [comiccafe, chaicup, mm, esquare, tvs, Tacadamy, mainbrain, mask, spotlight].map((u) => `${u}`)
})
export default function HCarousal() {
    return (
        <div style={{ height: "100vh" }}>
            <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
                <Items />
            </Canvas>
        </div>
    )
}


