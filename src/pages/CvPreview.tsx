import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCvById } from '../api/cvApi';
import type { CvDto } from '../types/cv';
import { ClassicTemplate } from '../templates/ClassicTemplate';
import { ModernTemplate } from '../templates/ModernTemplate';

type TemplateKey = 'classic' | 'modern';

export function CvPreview() {
  const { id } = useParams<{ id: string }>();
  const [cv, setCv] = useState<CvDto | null>(null);
  const [template, setTemplate] = useState<TemplateKey>('classic');
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    if (id) {
      getCvById(Number(id))
        .then(setCv)
        .finally(() => setChargement(false));
    }
  }, [id]);

  if (chargement) return <p>Chargement...</p>;
  if (!cv) return <p>CV introuvable.</p>;

  return (
    <div>
      <div style={{ padding: 20, textAlign: 'center' }}>
        <button onClick={() => setTemplate('classic')}>Modèle Classique</button>
        <button onClick={() => setTemplate('modern')}>Modèle Moderne</button>
      </div>

      {template === 'classic' && <ClassicTemplate cv={cv} />}
      {template === 'modern' && <ModernTemplate cv={cv} />}
    </div>
  );
}