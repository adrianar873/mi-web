import { personal } from '../data/content';

export default function Bio() {
  return (
    <div className="bio">
      {personal.bio.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
}
