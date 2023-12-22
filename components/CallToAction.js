// components
import Button from './Button';
import ButtonGroup from './ButtonGroup.js';
import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph';

// styles
import styles from './calltoaction.module.scss';

const CallToAction = ({ vehicleName }) => {
    return <section className={styles.calltoaction}>
        <Container>
            <div className={styles.calltoaction__flexbox}>
                <Heading level={2}>Get Behind the Wheel</Heading>
                <Paragraph color="white">
                    Start customizing your {vehicleName} today, or contact your local Subaru dealer to experience one in person.
                </Paragraph>
                <ButtonGroup>
                    <Button  type="primary"> Build & Price </Button>
                    <Button  type="secondary"> Contact Dealer</Button> 
                </ButtonGroup>
            </div>
        </Container>
    </section>
}
export default CallToAction;