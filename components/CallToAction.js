import Button from './Button';
import TwoButtons from './TwoButtons.js';
import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './calltoaction.module.scss';

// new section 
//Inside container 
// div box for content 
//includes heading that calls in formatting from previous heading component created

// has a paragrph that includes whatever vehicles name

// then uses component for two buttons to be displayed side by side

//uses formatting from button component 


const CallToAction = ({ vehicleName }) => {
    return <section className={styles.calltoaction}>
        <Container>
            <div className={styles.calltoaction__flexbox}>
                <Heading level={2}>Get Behind the Wheel</Heading>
                
                <Paragraph color="white">
                    Start customizing your {vehicleName} today, or contact your local Subaru dealer to experience one in person.
                </Paragraph>

                <TwoButtons>
                    <Button  type="primary"> Build & Price </Button>
                    <Button  type="secondary"> Contact Dealer</Button> 
                </TwoButtons>

            </div>
        </Container>
    </section>
}
export default CallToAction;