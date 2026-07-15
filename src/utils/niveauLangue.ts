export function getNiveauLabel(niveau: number): string {
  switch (niveau) {
    case 1: return 'Débutant';
    case 2: return 'Élémentaire';
    case 3: return 'Intermédiaire';
    case 4: return 'Avancé';
    case 5: return 'Courant / Natif';
    default: return 'Non précisé';
  }
}