import { IconType } from 'react-icons';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface SkillRatingProps {
  level: number;
}

const SkillRating = ({ level }: SkillRatingProps) => {
  // Calcula quantas estrelas devem ser preenchidas com base na proporção 2:1
  const filledStars = Math.floor(level / 2);
  const halfStar = level % 2 === 1;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  const FilledStarIcon: IconType = FaStar;
  const EmptyStarIcon: IconType = FaRegStar;
  const HalfStarIcon: IconType = FaStarHalfAlt;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <div key={index}><FilledStarIcon color="gold" size={20} /></div>
      ))}
      {halfStar && <div><HalfStarIcon color="gold" size={20} /></div>}
      {[...Array(emptyStars)].map((_, index) => (
        <div key={index}><EmptyStarIcon color="gold" size={20} /></div>
      ))}
      <span style={{ marginLeft: 5, color: "#FFFF" }}>{level}</span>
    </div>
  );
};

export default SkillRating;