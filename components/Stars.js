import Image from 'next/image';
import styles from './stars.module.scss';

const Stars = () => {
    return <nav>
        <ul className={styles.starrating}>               
                <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={32}
                        height={32}
                    />
                
            </li>

            <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={32}
                        height={32}
                    />
                
            </li>

            <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={32}
                        height={32}
                    />
                
            </li>

            <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={32}
                        height={32}
                    />
                
            </li>


            <li>
                
                    <Image 
                        src={`/images/icons/star.svg`}
                        alt={`star icon`}
                        width={32}
                        height={32}
                    />
                
            </li>

            
        
        </ul>
</nav>
}

export default Stars;