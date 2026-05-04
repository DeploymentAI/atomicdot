const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const templatePath = path.join(root, 'index.html');
let tpl = fs.readFileSync(templatePath, 'utf8');

const pages = [
  { file: 'sleep-paralysis.html', title: 'Sleep Paralysis Liberation | 2 Hz Delta Binaural Beats | Atomicdot', desc: 'Drift into deep, restorative sleep without the freeze. 2 Hz delta beats with pink noise layer – study‑backed to extend deep sleep by 11 minutes per night. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'sleep-paralysis' },
  { file: 'game-day-focus.html', title: 'Game‑Day Focus | 16 Hz Beta Binaural Beats | Atomicdot', desc: 'Laser‑sharp, game‑day clarity. 16 Hz beta waves with gamma bursts match your brain’s sustained‑attention window. Ad‑free, browser‑native sound therapy for ADHD and concentration.', id: 'adhd-focus' },
  { file: 'memory-enhancement.html', title: 'Entrainment for a Lifetime | 6 Hz Theta Binaural Beats | Atomicdot', desc: 'Memory forms best at 6 Hz theta. Hippocampal theta oscillations tied to successful long‑term memory encoding. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'memory-enhancement' },
  { file: 'super-sleep.html', title: 'Super Sleep Delta Descent | 4 Hz Deep Sleep Binaural Beats | Atomicdot', desc: '4 Hz delta binaural beat at 256 Hz Pythagorean C4 carrier – 8‑hour arc for deep NREM 3 sleep. Multi‑layer Voss‑McCartney pink noise. Ad‑free, browser‑native, pure sound therapy by Atomicdot.', id: 'deep-sleep' },
  { file: 'mother-earth.html', title: 'Mother Earth Schumann Resonance | 7.83 Hz Isochronic Pulse | Atomicdot', desc: 'The Schumann resonance delivered as an exact 7.83 Hz isochronic pulse – no musical carrier, only the Earth’s rhythm. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'schumann-reset' },
  { file: 'monday-blues-buster.html', title: 'Monday Blues Buster | 18 Hz Beta Binaural Beats | Atomicdot', desc: 'Cut cortisol, wake your prefrontal cortex without the crash. 18 Hz beta onset signals readiness without triggering anxiety. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'morning-activation' },
  { file: 'cosmic-octave.html', title: 'Cosmic Octave Earth‑Tone | 136.1 Hz OM Frequency | Atomicdot', desc: '136.1 Hz is the exact orbital frequency of Earth around the Sun, octave‑reduced to audible range. Ancient tuning, modern acoustics. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'aum-frequency' },
  { file: 'inaudible-removal.html', title: 'Inaudible Removal of Invisible | Harmonic Overtone Sweep | Atomicdot', desc: 'Ascending traversal through the first eight overtones of a 32 Hz fundamental – the audible harmonic series, the purest structured sound in nature. Ad‑free, browser‑native sound therapy by Atomicdot. Speculative.', id: 'harmonic-sweep' },
  { file: 'flow-state.html', title: 'Flow State | 12 Hz Alpha‑Beta Crossover | Atomicdot', desc: 'Alpha‑beta crossover at 10–12 Hz. Csikszentmihalyi’s neural signature of peak performance. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'flow-state' },
  { file: 'neural-experiments.html', title: 'Neural Experiments | Custom Binaural Beats 1–40 Hz | Atomicdot', desc: 'Your brain, your rules. Dial in any frequency from 1 to 40 Hz, choose carrier wave and noise type. Full laboratory control, browser‑native. Ad‑free sound therapy by Atomicdot.', id: 'custom-entrainment' },
  { file: 'sacred-pagoda.html', title: 'A Sacred Pagoda | Bronze Singing Bowl Sound | Atomicdot', desc: 'Antique bronze bowl, mathematically struck every 16 seconds. Thin‑shell inharmonic partials with shimmer LFO and temple reverb. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'singing-bowl' },
  { file: 'church-bells.html', title: 'Church Bells at Mass | Campanological Bell Synthesis | Atomicdot', desc: 'Five campanological partials – hum, prime, tierce, quint, nominal – at exact measured bell ratios. Percussive noise burst, exponential decays. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'church-bell' },
  { file: 'planetary-resonance.html', title: 'Divine Thought Sequencing | Jupiter Saturn Mars Frequencies | Atomicdot', desc: 'Jupiter, Saturn, Mars – their orbital periods octave‑reduced to audible range. The music of the spheres, precisely calculated. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'planetary-resonance' },
  { file: 'sri-yantra.html', title: 'Sri Yantra Mandala | 432 Hz Golden Ratio Harmonics | Atomicdot', desc: '432 Hz stacked through golden ratio harmonics. Temple reverb layer. Your nervous system recognises these ratios before your mind does. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'sri-yantra' },
  { file: 'celestial-communication.html', title: 'Celestial Communication | Sacred Geometry Frequencies | Atomicdot', desc: 'Seven sacred geometry ratios – Vesica Piscis, Flower of Life, Metatron’s Cube, Tree of Life – over a 5 Hz theta OBE carrier. Ad‑free, browser‑native sound therapy by Atomicdot. Speculative.', id: 'celestial-contact' },
  { file: 'asmr-textures.html', title: 'ASMR Precision Textures | Whisper Tapping Nature | Atomicdot', desc: 'Dopamine in three flavours. Whisper formants, φ‑timed wood taps, 1/f leaf rustle. Choose your trigger. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'asmr-textures' },
  { file: 'solfeggio-stack.html', title: 'Solfeggio Stack | 396–963 Hz Ancient Tonal Frequencies | Atomicdot', desc: '396 through 963 Hz – six ancient tonal frequencies played simultaneously. Gregorian monks used these intervals for centuries. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'solfeggio-stack' },
  { file: 'hydrogen-alpha.html', title: 'Hydrogen‑Alpha Light Octave | 415.3 Hz Spectral Tone | Atomicdot', desc: 'The exact frequency of the hydrogen‑alpha spectral line, octave‑reduced into the audible band. A direct translation of physical light into sound. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'ultrasonic-boundary' },
  { file: 'karma-40hz.html', title: 'Karma: 40 Hz Gamma + Light | Isochronic Entrainment | Atomicdot', desc: '40 Hz isochronic click train entrains gamma oscillations linked to memory and clarity. Optional full‑screen warm flicker overlay (MIT‑Harvard GENUS). Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'karma-40hz' },
  { file: 'turiya-alpha.html', title: 'Turiya: Alpha‑Ganzfeld Journey | 10.5 Hz Isochronic | Atomicdot', desc: '10.5 Hz isochronic tone over pink noise induces the alpha‑Ganzfeld state – dissolve the boundary between waking and dreaming. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'turiya-alpha' },
  { file: 'hrv-vagus.html', title: 'HRV: Vagus Resonator | 5.5 BPM Breath Pacing | Atomicdot', desc: '40–80 Hz humming tone panned L‑R at 5.5 bpm with exhale emphasis, entrained to the cardiac autonomic cycle. eLife 2024. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'hrv-vagus' },
  { file: 'harmonic-fountain.html', title: 'Harmonic Fountain | First 8 Overtones of C=64 Hz | Atomicdot', desc: 'The first eight overtones of C=64 Hz played simultaneously – the raw harmonic series, the Pythagorean sound of creation. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'harmonic-fountain' },
  { file: 'pythagorean-spiral.html', title: 'Pythagorean Spiral | Perfect Fifth Stacking at 256 Hz | Atomicdot', desc: 'Stacking perfect fifths (3:2) and folding them back into the octave – the spiral of creation, audible. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'pythagorean-spiral' },
  { file: 'hydrogen-chord.html', title: 'Hydrogen Chord – Light Octaves | Three Spectral Lines | Atomicdot', desc: 'The three visible spectral lines of hydrogen, octave‑reduced into a single chord – the atomic fingerprint of the universe. Ad‑free, browser‑native sound therapy by Atomicdot.', id: 'hydrogen-chord' }
];

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newTitle}</title>`);
}

function replaceMetaDescription(html, newDesc) {
  if (html.match(/<meta[^>]+name="description"[^>]*>/i)) {
    return html.replace(/<meta[^>]+name="description"[^>]*>/i, `<meta name="description" content="${newDesc}">`);
  }
  // fallback: insert into head
  return html.replace(/<head>/i, `<head>\n  <meta name="description" content="${newDesc}">`);
}

function injectAutoStart(html, genId) {
  const script = `\n  <script>\n    // Auto-start generator by simulating a click on its Listen button\n    window.addEventListener('DOMContentLoaded', function() {\n      try {\n        setTimeout(function() {\n          var btn = document.querySelector('.listen-btn[data-id="${genId}"]');\n          if (btn && typeof btn.click === 'function') btn.click();\n        }, 200);\n      } catch (e) {}\n    });\n  <\/script>\n`;
  return html.replace(/<\/body>/i, script + '</body>');
}

pages.forEach(p => {
  let out = tpl;
  out = replaceTitle(out, p.title);
  out = replaceMetaDescription(out, p.desc.replace(/"/g, '&quot;'));
  out = injectAutoStart(out, p.id);
  const outPath = path.join(root, p.file);
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Wrote', outPath);
});

console.log('Done. Generated', pages.length, 'pages.');
