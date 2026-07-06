import type { CvDto } from '../types/cv';

interface Props {
  cv: CvDto;
}

export function ClassicTemplate({ cv }: Props) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 30, maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 5 }}>{cv.prenom} {cv.nom}</h1>
      <p style={{ color: '#555' }}>{cv.email} | {cv.telephone} | {cv.adresse}</p>

      <hr style={{ margin: '20px 0' }} />

      {cv.experiences.length > 0 && (
        <section style={{ marginBottom: 20 }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: 5 }}>Expériences</h2>
          {cv.experiences.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 15 }}>
              <strong>{exp.poste} — {exp.entreprise}</strong>
              <p style={{ fontSize: 13, color: '#777' }}>
                {exp.dateDebut} - {exp.enCours ? 'En cours' : exp.dateFin}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {cv.formations.length > 0 && (
        <section style={{ marginBottom: 20 }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: 5 }}>Formations</h2>
          {cv.formations.map((formation) => (
            <div key={formation.id} style={{ marginBottom: 15 }}>
              <strong>{formation.diplome} — {formation.etablissement}</strong>
              <p style={{ fontSize: 13, color: '#777' }}>
                {formation.dateDebut} - {formation.enCours ? 'En cours' : formation.dateFin}
              </p>
            </div>
          ))}
        </section>
      )}

      {cv.competences.length > 0 && (
        <section>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: 5 }}>Compétences</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {cv.competences.map((comp) => (
              <span
                key={comp.id}
                style={{ background: '#eee', padding: '5px 12px', borderRadius: 15, fontSize: 13 }}
              >
                {comp.nom} ({comp.niveau}/5)
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}