
import FiveStars from './FiveStars';
import FourStars from './FourStars';
import ThreeStars from './ThreeStars';
import TwoStars from './TwoStars';
import OneStar from './OneStar';

const RatingMessage = ({ rating }) => {

  const getStars = () => {
    if (rating === 5) {
      return <FiveStars />;
    } else if (rating === 4) {
      return <FourStars />
    } else if (rating === 3) {
      return <ThreeStars />
    }else if (rating === 2) {
      return <TwoStars />
    } else {
      return <OneStar />
    }
  };

  return (
    <div>
      {getStars()}
    </div>
  );
};

export default RatingMessage;