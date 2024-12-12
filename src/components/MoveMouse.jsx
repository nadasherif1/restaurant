"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const MoveMouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handelMouse = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        };
        window.addEventListener("mousemove", handelMouse);
        return () => {
            window.removeEventListener("mousemove", handelMouse)
        }
    }, [])
    return (
        <motion.div
            className="fixed z-[100] border-2 border-yellow-500 rounded-full pointer-events-none"
            style={{
                width: 30,
                height: 30,
                left: `${mousePosition.x - 15}px`,
                top: `${mousePosition.y - 15}px`,
            }}
        >
            <motion.div
                className="bg-yellow-500 rounded-full"
                style={{
                    width: 10,
                    height: 10,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            ></motion.div>
        </motion.div>
    )
}
export default MoveMouse
