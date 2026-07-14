export const formaterDate = (dateString: string | undefined | null): string => {
  if (!dateString) return '';
  
  const seulementLaDate = dateString.split('T')[0]; 
  const [annee, mois, jour] = seulementLaDate.split('-');
  
  if (!annee || !mois || !jour) return dateString;

  return `${jour}/${mois}/${annee}`;
};