import type { CvDto } from '../types/cv';

interface Props {
  cv: CvDto;
}

export function ModernTemplate({ cv }: Props) {
  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', maxWidth: 800, margin: '0 auto' }}>
      {/* Sidebar */}
      <aside style={{ background: '#2c3e50', color: 'white', padding: 25, width: 250 }}>
        <h1 style={{ fontSize: 22, marginBottom: 5 }}>{cv.prenom}</h1>
        <h1 style={{ fontSize: 22, marginBottom: 20 }}>{cv.nom}</h1>

        <div style={{ fontSize: 13, marginBottom: 25 }}>
          <p>{cv.email}</p>
          <p>{cv.telephone}</p>
          <p>{cv.adresse}</p>
        </div>

        {cv.competences.length > 0 && (
          <div>
            <h3 style={{ borderBottom: '1px solid #7f8c8d', paddingBottom: 5 }}>Compétences</h3>
            {cv.competences.map((comp) => (
              <div key={comp.id} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 13, marginBottom: 3 }}>{comp.nom}</p>
                <div style={{ background: '#7f8c8d', height: 5, borderRadius: 3 }}>
                  <div
                    style={{
                      background: '#3498db',
                      height: 5,
                      borderRadius: 3,
                      width: `${(comp.niveau / 5) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* Contenu principal */}
      <main style={{ padding: 25, flex: 1 }}>
        {cv.experiences.length > 0 && (
          <section style={{ marginBottom: 25 }}>
            <h2 style={{ color: '#2c3e50' }}>Expériences</h2>
            {cv.experiences.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 15, borderLeft: '3px solid #3498db', paddingLeft: 12 }}>
                <strong>{exp.poste}</strong>
                <p style={{ fontSize: 13, color: '#7f8c8d' }}>
                  {exp.entreprise} • {exp.dateDebut} - {exp.enCours ? 'En cours' : exp.dateFin}
                </p>
                <p style={{ fontSize: 14 }}>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {cv.formations.length > 0 && (
          <section>
            <h2 style={{ color: '#2c3e50' }}>Formations</h2>
            {cv.formations.map((formation) => (
              <div key={formation.id} style={{ marginBottom: 15, borderLeft: '3px solid #3498db', paddingLeft: 12 }}>
                <strong>{formation.diplome}</strong>
                <p style={{ fontSize: 13, color: '#7f8c8d' }}>
                  {formation.etablissement} • {formation.dateDebut} - {formation.enCours ? 'En cours' : formation.dateFin}
                </p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}