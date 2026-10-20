import { company } from "./company";

export interface FaqItem {
  q: string;
  /** One paragraph per entry. */
  a: string[];
  list?: string[];
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faq: FaqGroup[] = [
  {
    title: "Cannabinoider",
    items: [
      {
        q: "Hvad er THC-A?",
        a: [
          "THC-A (tetrahydrocannabinolsyre) er en cannabinoid, der dannes naturligt i den rå cannabisplante. I sin rå form er THC-A ikke psykoaktiv – det er forstadiet til THC, det stof, der giver den kendte rus.",
          "Når THC-A opvarmes, fx ved rygning eller bagning, omdannes det til THC. Processen kaldes decarboxylering. Derfor er indholdet af THC-A det tal, der siger mest om styrken i et produkt – og det er det tal, vi viser på hver pakke og i lab-rapporterne.",
        ],
      },
      {
        q: "Hvad er CBD?",
        a: [
          "CBD (cannabidiol) er en anden naturlig cannabinoid fra cannabisplanten. CBD er ikke psykoaktiv og giver ingen rus. Mængden af CBD varierer fra sort til sort, og du kan se det præcise indhold i lab-rapporterne.",
        ],
      },
      {
        q: "Er produkterne laboratorietestet?",
        a: [
          "Ja. Alt testes af LabCore, et EMA-akkrediteret laboratorium (GMP), før det kommer i posen. Du kan se tallene og hente de fulde rapporter under Lab-rapporter.",
        ],
      },
      {
        q: "Hvad er forskellen på Fresh Frozen og Dry Sift?",
        a: [
          "Fresh Frozen er lavet af frisk frosset plantemateriale og er blød og aromatisk. Dry Sift er klassisk hash, hvor tørrede trichomer sigtes fra – ren, tør og aromatisk.",
        ],
      },
      {
        q: "Hvordan opbevarer jeg produkterne?",
        a: [
          "Køligt, tørt og mørkt i den lukkede emballage. THC-A omdannes langsomt ved varme og lys, så undgå vindueskarme og varmekilder. Opbevares altid utilgængeligt for børn og dyr.",
        ],
      },
    ],
  },
  {
    title: "Bestilling og levering",
    items: [
      {
        q: "Hvor kan jeg købe Mister Mellow?",
        a: [
          `Hos udvalgte butikker og her i webshoppen. Spørg efter os ved kassen, eller følg ${company.instagram} på Instagram for at se, hvor du finder os.`,
        ],
      },
      {
        q: "Bliver min pakke sendt diskret?",
        a: [
          "Ja. Vi pakker i en neutral, lugttæt forsendelse uden logo eller tekst, der afslører indholdet. Udefra ligner den enhver anden pakke.",
        ],
      },
      {
        q: "Kan jeg købe større mængder?",
        a: [
          `Ja. Skriv til ${company.email}, så finder vi en løsning sammen.`,
        ],
      },
      {
        q: "Hvad er aldersgrænsen?",
        a: [
          "Vi sælger kun til personer over 18 år – både i webshoppen og i butikkerne, hvor der spørges efter legitimation. Det har vi valgt af tre grunde:",
        ],
        list: [
          "Ansvarligt salg: Vores produkter skal kun ende hos voksne, der kan træffe et informeret valg.",
          "Branchestandard: 18 år er den grænse, de seriøse aktører i branchen arbejder efter, og den står vi bag.",
          "Ingen misforståelser: Produkterne kan forveksles med andre cannabisprodukter, og vi vil undgå unødige konflikter.",
        ],
      },
    ],
  },
  {
    title: "Lovgivning",
    items: [
      {
        q: "Hvad indeholder produkterne – og hvad indeholder de ikke?",
        a: [
          "Vores produkter er lab-testet og indeholder under 0,2 % Δ9-THC. De indeholder ikke HHC, HHC-P, THC-P, H4CBD eller andre syntetiske eller semisyntetiske cannabinoider. Du kan selv tjekke tallene for hver sort under Lab-rapporter.",
        ],
      },
      {
        q: "Hvad gør jeg, hvis jeg bliver stoppet af politiet?",
        a: [
          "Politiet kan ikke se forskel på vores produkter og andre cannabisprodukter med det blotte øje. Vi anbefaler derfor, at du altid opbevarer produkterne i den originale, forseglede emballage og gemmer din kvittering.",
          "Bliver produkterne taget i bevaring, så bed om en kvittering for beslaglæggelsen og henvis til lab-rapporten for den pågældende sort. Kontakt os gerne bagefter – så hjælper vi med dokumentationen.",
        ],
      },
      {
        q: "Hvad sker der, hvis min pakke bliver beslaglagt?",
        a: [
          "Bliver en forsendelse tilbageholdt, får du normalt besked fra politiet eller toldmyndighederne om hvorfor, og hvad du skal gøre for at få den udleveret.",
          "Typisk sender myndighederne produktet til test for at kontrollere indholdet. Det kan tage tid – nogle gange flere uger – så hav lidt tålmodighed, og kontakt os, så hjælper vi med papirerne.",
        ],
      },
    ],
  },
  {
    title: "Forhandlere",
    items: [
      {
        q: "Hvordan bliver jeg forhandler af Mister Mellow?",
        a: [
          `Ring på ${company.phone} eller skriv til ${company.email} – du finder alle oplysninger på siden For forhandlere. Vi vender tilbage hurtigt, og når samarbejdet er på plads, leverer vi personligt inden for 1–2 dage med opstartspakke og display.`,
        ],
      },
      {
        q: "Hvad kræver I af en forhandler?",
        a: ["Vi vil gerne arbejde sammen med butikker, der deler vores fokus på kvalitet og god service. Vi forventer:"],
        list: [
          "En fysisk butik eller aktiv webshop med gyldigt CVR-nummer.",
          "Interesse for og viden om cannabisprodukter.",
          "At produkterne kun sælges til kunder over 18 år og markedsføres i overensstemmelse med gældende lovgivning.",
        ],
      },
    ],
  },
];
