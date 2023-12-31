import { useState, useEffect } from 'react';
import FormGroup from './FormGroup';
import Heading from './Heading';
import Label from './Label';
import styles from './reviewpicker.module.scss';
import Paragraph from './Paragraph';
import GetStars from './GetStars';



const ReviewPicker = ({ reviews }) => {
    const [selectedRating, setSelectedRating] = useState('all');
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [sortOrder, setSortOrder] = useState('recent');
    
    
    const sortReviews = (reviewsList) => {
        switch (sortOrder) {
          case 'highest':
            return [...reviewsList].sort((a, b) => b.rating - a.rating);
          case 'lowest':
            return [...reviewsList].sort((a, b) => a.rating - b.rating);
          case 'recent':
          default:
            return [...reviewsList]; // reviews are already in the 'recently added' order
        }
      };


    useEffect(() => {
        let filtered = reviews;
        if (selectedRating !== 'all') {
          filtered = reviews.filter(review => review.rating === parseInt(selectedRating));
        }
        setFilteredReviews(sortReviews(filtered));
      }, [selectedRating, sortOrder, reviews]);
      

    const starOptions = [
        { label: '1 Star', value: '1' },
        { label: '2 Stars', value: '2' },
        { label: '3 Stars', value: '3' },
        { label: '4 Stars', value: '4' },
        { label: '5 Stars', value: '5' }
    ];

    const sortOptions = [
        { label: 'Recently Added', value: 'recent' },
        { label: 'Highest Rated', value: 'highest' },
        { label: 'Lowest Rated', value: 'lowest' }
        
    ];

    

    return (
        <section className={styles.reviewpicker}>
            <div className={styles.reviewpicker__text}>
                <Heading level={2} color="black" marginBottom={2}
                textAlign="center">
                    Customer Reviews
                </Heading>
                
                    <form className={styles.reviewpicker__form}>
                        <FormGroup >
                            <Heading level={4} className={styles.reviewpicker__label}>Rating</Heading>
                            <select className={styles.reviewpicker__select} value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
                                <option value="all">All Ratings</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                        <Heading level={4} className={styles.reviewpicker__label}>Sort By</Heading>
                            <select className={styles.reviewpicker__select} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="recent">Recently Added</option>
                                <option value="highest">Highest Rated</option>
                                <option value="lowest">Lowest Rated</option>
                            </select>
                        </FormGroup>
                        </form>
            
            </div>
            <div >
                <div className={styles.reviewpicker__results}>
                    {filteredReviews.map((review, index) => (
                    <div className={styles.reviewpicker__card} key={index}>
                         <img src={`/images/${review.authorphoto}.jpeg`} alt={`${review.author}'s profile`} className={styles.reviewpicker__headshot}/>
                        <div className={styles.reviewpicker__content}>
                            <div className={styles.reviewpicker__header}>
                                <Heading level={4}>{review.author}</Heading>
                                <Paragraph>{review.date}</Paragraph>
                            </div>
                            <GetStars className={styles.reviewpicker__star} rating={review.rating}/>
                            
                            
                            <Paragraph>{review.text}</Paragraph>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewPicker;