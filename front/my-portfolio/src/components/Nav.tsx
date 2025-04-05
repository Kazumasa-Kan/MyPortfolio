
import Link from "next/link";


function MyNav() {
    return (
        <header
            className='
                flex
                justify-between
                bg-blur
                bg-[#ffffff05]
                border-b border-double border-[#88aaffff]
                shadow-md shadow-cyan-500/50
            '
        >
                <Link
                    href ='/'
                    className='
                        flex
                        items-center
                        text-2xl text-brand
                    '
                >
                    Lab
                </Link>
                <nav
                    className='
                        flex
                        items-center
                        gap-4
                        font-semibold
                    '
                >
                    <Link
                        href='/'
                        className="
                            pt-4
                        "
                    >TOP</Link>
                    <Link
                        href='/toolbox'
                        className="
                            pt-4
                        "
                    >Toolbox</Link>
                    <Link
                        href='/toolbox/timer'
                        className="
                            pt-4
                        "
                    >Timer</Link>
                    <Link
                        href='/works'
                        className="
                            pt-4
                        "
                    >Works</Link>
                </nav>
        </header>
    )
};

export default MyNav;
