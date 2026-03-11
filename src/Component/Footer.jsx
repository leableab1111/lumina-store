import React from 'react'

function Footer() {
    return (
        <>
            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <p>CopyRight &#169; 2026 by Limina Store</p>
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Contact us</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">Term and sonditional</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer