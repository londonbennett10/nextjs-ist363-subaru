import Link from 'next/Link';

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