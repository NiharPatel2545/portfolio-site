// Copied from a real AgriShield check (agrishieldai.com), pin at the centre of Horsham, Victoria.
// Re-run the check and update these figures if the model changes.
export const check = {
  place: 'Horsham, Victoria',
  coords: '-36.715, 142.202',
  date: '30 October 2026',
  verdict: 'Grow wheat. No lime needed.',
  figures: [
    { label: 'Soil pH', value: '7.02', note: '5.49 to 8.03' },
    { label: 'Rain a year', value: '455 mm', note: 'Dry 2 seasons in 10' },
    { label: 'Wheat, well run', value: '2.8 t/ha', note: '2.5 to 3.2' },
  ],
  crops: [
    { name: 'Wheat', fit: 52, yield: '2.8 t/ha', seasons: '8 in 10' },
    { name: 'Barley', fit: 66, yield: '2.7 t/ha', seasons: '10 in 10' },
    { name: 'Canola', fit: 71, yield: '2 t/ha', seasons: '10 in 10' },
    { name: 'Oats', fit: 56, yield: '1.9 t/ha', seasons: '9 in 10' },
  ],
}
