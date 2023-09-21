import React from 'react';
import Banner from '../Banner';
// PROJECT SPECIFIC COMPONENT
// KEEPS INDIVIDUAL COMPONENTS SIMPLES
// EASY TO UNDERSTAND
// - USES COMPOSITION
function LostBanner({ answer }) {
  return <Banner status='sad'>
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </Banner>;
}

export default LostBanner;
