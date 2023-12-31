import Heading from './Heading';
import styles from './reviews.module.scss';import Paragraph from './Paragraph';
import Container from './Container';
import Stars from './Stars';
import ReviewPicker from './ReviewPicker'


 //Array of social media reviews
 const socialmediareviews = [

        {   author: 'John Smith', 
            date: '1/1/23', 
            text: 'Great car, highly recommend!' },
        {   author: 'Jack Murphy', 
            date: '1/1/23', 
            text: 'Amazing quality and service.' },
        {   
            author: 'Alex Johnson', 
            date: '1/1/23', 
            text: 'Very satisfied with my purchase.' }
    ];
    


// maps over each item in given array above 
const Reviews = () => {
    return (
        <Container>
        <div className={styles.reviews}>
            <ReviewPicker />
            <Stars />
            <Heading level={3}>Customer Reviews</Heading>
            <br></br>
            {socialmediareviews.map((review, index) => (
                <div key={index} className={styles.review}>
                    <Heading>{review.author}</Heading>
                    <Paragraph className={styles.date}>{review.date}</Paragraph>
                    <Paragraph>{review.text}</Paragraph>
                </div>
            ))}
        </div>
        </Container>
    );
};


export default Reviews;