import PitchHero from './Sections/PitchHero/PitchHero';
import PitchThesis from './Sections/PitchThesis/PitchThesis';
import PitchCriteria from './Sections/PitchCriteria/PitchCriteria';
import PitchProcess from './Sections/PitchProcess/PitchProcess';
import PitchForm from './Sections/PitchForm/PitchForm';
import PitchCTA from './Sections/PitchCTA/PitchCTA';

export default function PitchPage() {
  return (
    <>
      <PitchHero />
      <PitchThesis />
      <PitchCriteria />
      <PitchProcess />
      <PitchForm />
      <PitchCTA />
    </>
  );
}
