import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Container from './Container';
import styles from './header.module.scss';
import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import Row from './Row'

const Header = () => {
    const [isMobileNaveOpen, setIsMobileNavOpen] = useState(false);

         return <header className={styles.header}>
            <Container>
                <Row justifyContent="space-between">
                    <Link href="/"> <Logo />
                    </Link> 
                    <Nav.Desktop />
                    <ButtonUI icon="menu"
                        clickHandler={() => {
                            setIsMobileNavOpen(true);
                        }}
                    />
                    <AnimatePresence>
                        {isMobileNaveOpen && <Nav.Mobile closeHandler={() => {
                            setIsMobileNavOpen(false);
                        }}/>}
                    </AnimatePresence>
                    
                </Row>
                    
    
            </Container>
         </header>
    
}

export default Header;
//testt