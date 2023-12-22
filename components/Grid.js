
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './grid.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const Grid = ({items}) => {
    const sectionVariants = {
        closed:{
            opacity:0
        },
        open: {
            opacity: 1,
            transition:{
                staggerChildren: 0.2
            }

        }
    }
    const articleVariants = {
        closed: { y: 50, opactity: 0},
        open: {y:0, opacity:100}
    }
    
    return <motion.section 
        inital="closed"
        animate="open"
        variants={sectionVariants}
        className={styles.grid}
        >

        {items.map((item, index) => {
                    const { title, slug, vehicleInformation } = item.node;
                    const { trimLevels } = vehicleInformation;
                    return <motion.article
                         key={index}
                         variants={articleVariants}
                         >
                        {trimLevels && trimLevels[0].images.thumbnail && 
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }  
                        <Heading 
                        level={3}
                        color = "black"
                         >
                            {title}
                        </Heading>
                        <Paragraph>
                            Starting at $25,000
                        </Paragraph>
                        
                        <Paragraph>
                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
                        </Paragraph>
                    </motion.article>
                })}
                
    </motion.section>
}
export default Grid;