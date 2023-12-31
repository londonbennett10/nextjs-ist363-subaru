import Image from 'next/image';
import styles from './stars.module.scss';

const Stars = () => {
    return <nav>
        <ul className={styles.starrating}>               
                <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={20}
                        height={20}
                    />
                
            </li>
            
        
        </ul>
</nav>
}

export default Stars;