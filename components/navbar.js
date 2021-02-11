import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navigation">
            <Link href="/">
            <h1>Covid Tracker</h1>
            </Link>
            <Link href="about">
            <h2>about</h2>
            </Link>
            
        </div>
    )
}
