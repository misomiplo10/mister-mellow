# Mister Mellow – website

Brand-side for forbrugere og en separat side for forhandlere, bygget med [Astro](https://astro.build).

## Kom i gang

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statisk output i dist/
npm run preview  # se build lokalt
```

## Struktur

```
src/
  data/         produkter, lab-resultater og firmaoplysninger (ret indhold her)
  components/   Header, Footer, AgeGate, ProductCard
  layouts/      BaseLayout (head, fonte, header/footer, aldersbekræftelse)
  pages/        index.astro (forbrugere), forhandler.astro (B2B)
  styles/       global.css (farver og typografi som CSS-variabler i :root)
  scripts/      main.ts (aldersbekræftelse, menu, produktfilter, animationer)
public/
  img/          optimerede billeder, logo-udskæringer og himmelbaggrund
  docs/         katalog og COA-rapporter (PDF)
```

### Typiske ændringer

- **Ny eller ændret produkt/pris:** `src/data/products.ts`. Både produktkort, prisliste og avanceberegning på forhandlersiden læses herfra.
- **Nye lab-resultater:** `src/data/lab.ts`, og læg PDF'en i `public/docs/`.
- **Kontaktoplysninger:** `src/data/company.ts`.

## Noter

- Siden er ikke koblet til mistermellow.dk endnu. `dist/` kan hostes statisk (fx Vercel, Netlify eller Cloudflare Pages).
- Produkter med THC-A er reguleret – få teksterne juridisk gennemgået før lancering.
