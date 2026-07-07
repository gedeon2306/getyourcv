import { useEffect, useState } from 'react';
import { getCvs, deleteCv } from '../api/cvApi';
import type { CvDto } from '../types/cv';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export function CvList() {
  const [cvs, setCvs] = useState<CvDto[]>([]);
  const [chargement, setChargement] = useState(true);
  const { logout } = useAuth();

  useEffect(() => {
    chargerCvs();
  }, []);

  const chargerCvs = async () => {
    try {
      const data = await getCvs();
      setCvs(data);
    } catch (err) {
      console.error('Erreur lors du chargement des CV', err);
    } finally {
      setChargement(false);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteCv(id);
    chargerCvs();
  };

  if (chargement) {
    return <p>Chargement...</p>;
  }

return (
  <div className="page">
    <div className="header-bar">
      <h2 style={{ color: 'var(--paper)', margin: 0 }}>Mes CV</h2>
      <button onClick={logout} className="btn btn-secondary">Se déconnecter</button>
    </div>

    <div style={{ marginBottom: 20 }}>
      <Link to="/cvs/new" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
        + Créer un nouveau CV
      </Link>
    </div>

    {cvs.length === 0 ? (
      <div className="card">
        <p style={{ margin: 0, color: 'var(--muted)' }}>Aucun CV pour l'instant. Créez-en un pour commencer.</p>
      </div>
    ) : (
      <div>
        {cvs.map((cv) => (
          <div key={cv.id} className="cv-item">
            <div>
              <strong>{cv.prenom} {cv.nom}</strong>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--muted)' }}>{cv.email}</p>
            </div>
            <div className="cv-item-actions">
              <Link to={`/cvs/${cv.id}`}>Aperçu</Link>
              <Link to={`/cvs/edit/${cv.id}`}>Modifier</Link>
              <button
                onClick={() => handleDelete(cv.id)}
                className="btn btn-danger"
                style={{ padding: '4px 10px', fontSize: 12 }}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
}