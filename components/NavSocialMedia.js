import Image from 'next/image';
import styles from './navsocialmedia.module.scss';


// Array of social media platform information
// const socialMediaLinks = [
//     {
//         name: "Facebook",
//         slug: "facebook",
//         url: "https://www.facebook.com/subaruofamerica"
//     },
//     {
//         name: "Twitter",
//         slug: "twitter",
//         url: "https://www.twitter.com/subaru_usa"
//     },
//     {
//         name: "Instagram",
//         slug: "instagram",
//         url: "https://instagram.com/subaru_usa"
//     },
//     {
//         name: "YouTube",
//         slug: "youtube",
//         url: "https://www.youtube.com/user/Subaru"
//     },
// ];


// maps over each item in given array above 
// looks at the name slug and url to form each list item
// creates a list item that has key socialMediaLink#
//has linked url using info from array, as well as uses the name for the alt text, and slug to get the source image file, retrieving it from images folder

// const SocialMediaNav = () => {
//     return <nav>
//         <ul className={styles.navsocialmedia}>
//             {socialMediaLinks.map((account, index) => {
//                 const { name, slug, url } = account;
         
//                 return <li key={`socialMediaLink${index}`}>
//                     <a href={url} target="_blank">
//                         <Image 
//                             src={`/images/icons/${slug}.svg`}
//                             alt={`${name} icon`}
//                             width={32}
//                             height={32}
//                         />
//                     </a>
//                 </li>
//             })}
//         </ul>
//     </nav>
// }



const SocialMediaNav = () => {
    return <nav>
        <ul className={styles.navsocialmedia}>
        
         
                 <li>
                    <a href="https://www.facebook.com/subaruofamerica" target="_blank">
                        <Image 
                            src={`/images/icons/facebook.svg`}
                            alt={`facebook icon`}
                            width={32}
                            height={32}
                        />
                    </a>
                </li>

                <li>
                    <a href="https://www.twitter.com/subaru_usa" target="_blank">
                        <Image 
                            src={`/images/icons/twitter.svg`}
                            alt={`twitter icon`}
                            width={32}
                            height={32}
                        />
                    </a>
                </li>

                <li>
                    <a href="https://instagram.com/subaru_usa" target="_blank">
                        <Image 
                            src={`/images/icons/instagram.svg`}
                            alt={`instagram icon`}
                            width={32}
                            height={32}
                        />
                    </a>
                </li>

                <li>
                    <a href="https://www.youtube.com/user/Subaru" target="_blank">
                        <Image 
                            src={`/images/icons/youtube.svg`}
                            alt={`youtube icon`}
                            width={32}
                            height={32}
                        />
                    </a>
                </li>
            
        </ul>
    </nav>
}

// Export the component
export default SocialMediaNav;