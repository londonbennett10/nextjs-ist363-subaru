import Link from 'next/link';

const Header = () => {
    return <header> 
        logo <br />
        <nav>
            <ul>
                <li> 
                    <Link href="/">
                        Home
                    </Link>
                </li>

                <li> 
                    <Link href="/vehicles">
                        Vehicles
                    </Link>
                </li>

                <li> 
                    <Link href="/about">
                        about
                    </Link>
                </li>

                <li> 
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>


            </ul>
        </nav>
    </header>
}

export default Header;
//testt