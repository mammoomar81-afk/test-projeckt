"use client";

import { useState, useEffect } from "react";

// تعريف الأنواع
type PlanetAngles = {
  merkur: number;
  venus: number;
  erde: number;
  mars: number;
  jupiter: number;
  saturn: number;
  uranus: number;
  neptun: number;
};

type LanguageText = {
  de: string;
  en: string;
};

type Planet = {
  name: string;
  nameDe: string;
  nameEn: string;
  distance: number;
  size: number;
  color: string;
  emoji: string;
  glow: string;
  hasRing?: boolean;
  description: LanguageText;
};

type Phenomenon = {
  id: number;
  name: LanguageText;
  icon: string;
  category: string;
  description: LanguageText;
  facts: {
    de: string[];
    en: string[];
  };
  animationFrames: string[];
};

type Rock = {
  id: number;
  name: LanguageText;
  image: string;
  emoji: string;
  detailImage: string;
  description: LanguageText;
  properties: {
    hardness: string;
    color: LanguageText;
    usage: LanguageText;
  };
  locations: LanguageText;
};

type Mineral = {
  id: number;
  name: LanguageText;
  symbol: string;
  image: string;
  emoji: string;
  detailImage: string;
  description: LanguageText;
  properties: {
    hardness: string;
    color: LanguageText;
    usage: LanguageText;
  };
  locations: LanguageText;
};

type Category = {
  id: string;
  name: LanguageText;
};

export default function Home() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [angles, setAngles] = useState<PlanetAngles>({
    merkur: 0,
    venus: 0,
    erde: 0,
    mars: 0,
    jupiter: 0,
    saturn: 0,
    uranus: 0,
    neptun: 0
  });

  // Animation für alle Planeten
  useEffect(() => {
    const interval = setInterval(() => {
      setAngles(prev => ({
        merkur: (prev.merkur + 2.5) % 360,     
        venus: (prev.venus + 1.8) % 360,
        erde: (prev.erde + 1.2) % 360,
        mars: (prev.mars + 1) % 360,
        jupiter: (prev.jupiter + 0.5) % 360,
        saturn: (prev.saturn + 0.4) % 360,
        uranus: (prev.uranus + 0.25) % 360,
        neptun: (prev.neptun + 0.2) % 360
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Planetendaten
  const planets: Planet[] = [
    { 
      name: 'Merkur', 
      nameDe: 'MERCUR',
      nameEn: 'MERCURY',
      distance: 120, 
      size: 24, 
      color: '#9ca3af',
      emoji: '☿',
      glow: '#d1d5db',
      description: { de: 'Der kleinste Planet', en: 'The smallest planet' }
    },
    { 
      name: 'Venus', 
      nameDe: 'VENUS',
      nameEn: 'VENUS',
      distance: 170, 
      size: 28, 
      color: '#fbbf24',
      emoji: '♀',
      glow: '#fcd34d',
      description: { de: 'Der heißeste Planet', en: 'The hottest planet' }
    },
    { 
      name: 'Erde', 
      nameDe: 'ERDE',
      nameEn: 'EARTH',
      distance: 220, 
      size: 30, 
      color: '#3b82f6',
      emoji: '🌍',
      glow: '#60a5fa',
      description: { de: 'Unser Zuhause', en: 'Our home' }
    },
    { 
      name: 'Mars', 
      nameDe: 'MARS',
      nameEn: 'MARS',
      distance: 270, 
      size: 26, 
      color: '#ef4444',
      emoji: '♂',
      glow: '#f87171',
      description: { de: 'Der rote Planet', en: 'The red planet' }
    },
    { 
      name: 'Jupiter', 
      nameDe: 'JUPITER',
      nameEn: 'JUPITER',
      distance: 340, 
      size: 48, 
      color: '#b45309',
      emoji: '♃',
      glow: '#f59e0b',
      description: { de: 'Der größte Planet', en: 'The largest planet' }
    },
    { 
      name: 'Saturn', 
      nameDe: 'SATURN',
      nameEn: 'SATURN',
      distance: 410, 
      size: 42, 
      color: '#d97706',
      emoji: '🪐',
      glow: '#fbbf24',
      hasRing: true,
      description: { de: 'Der Ringplanet', en: 'The ringed planet' }
    },
    { 
      name: 'Uranus', 
      nameDe: 'URANUS',
      nameEn: 'URANUS',
      distance: 480, 
      size: 36, 
      color: '#06b6d4',
      emoji: '⛢',
      glow: '#22d3ee',
      description: { de: 'Der eisige Planet', en: 'The icy planet' }
    },
    { 
      name: 'Neptun', 
      nameDe: 'NEPTUN',
      nameEn: 'NEPTUNE',
      distance: 550, 
      size: 36, 
      color: '#2563eb',
      emoji: '♆',
      glow: '#3b82f6',
      description: { de: 'Der windige Planet', en: 'The windy planet' }
    }
  ];

  // Berechne Positionen - مع تحديد الأنواع
  const getPlanetPosition = (distance: number, angle: number): { x: number; y: number } => {
    const x = distance * 1.5 * Math.cos(angle * Math.PI / 180);
    const y = distance * 0.9 * Math.sin(angle * Math.PI / 180);
    return { x, y };
  };

  // Phänomene
  const earthPhenomena: Phenomenon[] = [
    {
      id: 1,
      name: { de: "Vulkanismus", en: "Volcanoes" },
      icon: "🌋",
      category: "geologisch",
      description: {
        de: "Vulkane sind Öffnungen in der Erdkruste, durch die geschmolzenes Gestein (Magma), Asche und Gase aus dem Erdinneren an die Oberfläche gelangen. Wenn Magma austritt, nennt man es Lava. Vulkane können Berge bilden und neue Inseln erschaffen.",
        en: "Volcanoes are openings in the Earth's crust where molten rock (magma), ash, and gases from inside the Earth reach the surface. When magma emerges, it's called lava. Volcanoes can form mountains and create new islands."
      },
      facts: {
        de: [
          "Es gibt etwa 1500 aktive Vulkane weltweit",
          "Der größte Vulkan des Sonnensystems ist auf dem Mars (Olympus Mons)",
          "Vulkanausbrüche können das Klima beeinflussen"
        ],
        en: [
          "There are about 1,500 active volcanoes worldwide",
          "The largest volcano in the solar system is on Mars (Olympus Mons)",
          "Volcanic eruptions can affect the climate"
        ]
      },
      animationFrames: ["🌋", "🌋🔥", "🌋💥", "🌋🌋", "🌋🔥🔥", "🌋💥💥"]
    },
    {
      id: 2,
      name: { de: "Erdbeben", en: "Earthquakes" },
      icon: "📉",
      category: "geologisch",
      description: {
        de: "Erdbeben sind Erschütterungen der Erdoberfläche, die durch plötzliche Bewegungen der Erdplatten entstehen. Sie entstehen, wenn sich Spannungen in der Erdkruste lösen. Die Stärke wird mit der Richterskala gemessen.",
        en: "Earthquakes are shaking of the Earth's surface caused by sudden movements of tectonic plates. They occur when stress in the Earth's crust is released. Their strength is measured by the Richter scale."
      },
      facts: {
        de: [
          "Jährlich gibt es etwa 500.000 Erdbeben weltweit",
          "Die meisten sind zu schwach, um gespürt zu werden",
          "Das stärkste je gemessene Erdbeben hatte Stärke 9.5 (Chile 1960)"
        ],
        en: [
          "About 500,000 earthquakes occur worldwide each year",
          "Most are too weak to be felt",
          "The strongest ever measured was magnitude 9.5 (Chile 1960)"
        ]
      },
      animationFrames: ["📉", "📉💥", "📉🌊", "📉📉", "📉💥💥", "📉🌊🌊"]
    },
    {
      id: 3,
      name: { de: "Treibhauseffekt", en: "Greenhouse Effect" },
      icon: "🌡️",
      category: "klimatisch",
      description: {
        de: "Der Treibhauseffekt ist ein natürlicher Prozess, bei dem Gase in der Atmosphäre Wärme speichern und so die Erde warm halten. Durch menschliche Aktivitäten (CO2-Ausstoß) wird dieser Effekt verstärkt, was zur globalen Erwärmung führt.",
        en: "The greenhouse effect is a natural process where gases in the atmosphere trap heat, keeping the Earth warm. Human activities (CO2 emissions) strengthen this effect, leading to global warming."
      },
      facts: {
        de: [
          "Die wichtigsten Treibhausgase: CO2, Methan, Wasserdampf",
          "Ohne Treibhauseffekt wäre die Erde -18°C kalt",
          "Der CO2-Gehalt ist seit 1750 um 50% gestiegen"
        ],
        en: [
          "Main greenhouse gases: CO2, methane, water vapor",
          "Without greenhouse effect, Earth would be -18°C cold",
          "CO2 levels have risen 50% since 1750"
        ]
      },
      animationFrames: ["🌡️", "🌡️🔥", "🌡️🌍", "🌡️🌡️", "🌡️🌍🔥", "🌡️🔥🔥"]
    },
    {
      id: 4,
      name: { de: "Tornado", en: "Tornado" },
      icon: "🌪️",
      category: "meteorologisch",
      description: {
        de: "Ein Tornado ist eine schnell rotierende Luftsäule, die von einem Gewitter bis zum Boden reicht. Sie sehen aus wie riesige Trichter und können enorme Geschwindigkeiten erreichen. Tornados entstehen, wenn warme und kalte Luft aufeinandertreffen.",
        en: "A tornado is a rapidly rotating column of air that extends from a thunderstorm to the ground. They look like giant funnels and can reach enormous speeds. Tornadoes form when warm and cold air meet."
      },
      facts: {
        de: [
          "Tornados können Windgeschwindigkeiten bis 500 km/h erreichen",
          "Die meisten Tornados gibt es in den USA (Tornado Alley)",
          "Ein Tornado kann Häuser komplett zerstören"
        ],
        en: [
          "Tornadoes can reach wind speeds up to 500 km/h",
          "Most tornadoes occur in the USA (Tornado Alley)",
          "A tornado can completely destroy houses"
        ]
      },
      animationFrames: ["🌪️", "🌪️💨", "🌪️🌀", "🌪️🌪️", "🌪️💨💨", "🌪️🌀🌀"]
    },
    {
      id: 5,
      name: { de: "Tsunami", en: "Tsunami" },
      icon: "🌊",
      category: "maritim",
      description: {
        de: "Ein Tsunami ist eine riesige Welle, die durch Erdbeben unter dem Meer, Vulkanausbrüche oder Erdrutsche ausgelöst wird. Im tiefen Wasser ist die Welle kaum sichtbar, wird aber am Ufer sehr hoch und gefährlich.",
        en: "A tsunami is a huge wave caused by earthquakes under the sea, volcanic eruptions, or landslides. In deep water, the wave is barely visible but becomes very high and dangerous at the shore."
      },
      facts: {
        de: [
          "Tsunamis können bis zu 500 km/h schnell sein",
          "Die höchste je gemessene Welle war 524 m hoch (Alaska 1958)",
          "Ein Tsunami sieht aus wie eine schnell steigende Flut"
        ],
        en: [
          "Tsunamis can travel up to 500 km/h",
          "The highest wave ever recorded was 524 m (Alaska 1958)",
          "A tsunami looks like a rapidly rising tide"
        ]
      },
      animationFrames: ["🌊", "🌊🌊", "🌊🌊🌊", "🌊💧", "🌊🌊💧", "🌊🌊🌊💧"]
    },
    {
      id: 6,
      name: { de: "Regenbogen", en: "Rainbow" },
      icon: "🌈",
      category: "optisch",
      description: {
        de: "Ein Regenbogen entsteht, wenn Sonnenlicht auf Regentropfen trifft. Das Licht wird in den Tropfen gebrochen und in seine Farben aufgespalten. Man sieht ihn immer gegenüber der Sonne. Jeder Regenbogen hat sieben Farben: Rot, Orange, Gelb, Grün, Blau, Indigo und Violett.",
        en: "A rainbow forms when sunlight hits raindrops. The light is refracted in the drops and split into its colors. You always see it opposite the sun. Every rainbow has seven colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet."
      },
      facts: {
        de: [
          "Jeder Mensch sieht seinen eigenen Regenbogen",
          "Regenbögen sind eigentlich Kreise - wir sehen nur die Hälfte",
          "Doppelte Regenbögen haben die Farben umgekehrt"
        ],
        en: [
          "Every person sees their own rainbow",
          "Rainbows are actually circles - we only see half",
          "Double rainbows have reversed colors"
        ]
      },
      animationFrames: ["🌈", "🌈☀️", "🌈🌈", "🌈☀️☀️", "🌈🌈🌈", "🌈☁️"]
    },
    {
      id: 7,
      name: { de: "Schneesturm", en: "Blizzard" },
      icon: "❄️",
      category: "meteorologisch",
      description: {
        de: "Ein Schneesturm (auch Blizzard genannt) ist ein starker Sturm mit viel Schnee und eisigen Temperaturen. Die Sicht ist sehr schlecht, oft sieht man kaum die Hand vor Augen. Schneestürme können tagelang dauern und ganze Regionen lahmlegen.",
        en: "A blizzard is a strong storm with heavy snow and freezing temperatures. Visibility is very poor, often you can barely see your hand in front of you. Blizzards can last for days and paralyze entire regions."
      },
      facts: {
        de: [
          "Windgeschwindigkeiten müssen mindestens 56 km/h erreichen",
          "Die Sichtweite kann unter 400 Meter fallen",
          "Schneestürme können mehrere Tage andauern"
        ],
        en: [
          "Wind speeds must reach at least 56 km/h",
          "Visibility can drop below 400 meters",
          "Blizzards can last for several days"
        ]
      },
      animationFrames: ["❄️", "❄️🌨️", "❄️❄️🌨️", "❄️❄️❄️", "❄️🌨️💨", "❄️❄️🌨️💨"]
    }
  ];

  // Gesteinsarten
  const rockTypes: Rock[] = [
    { 
      id: 1,
      name: { de: "Granit", en: "Granite" },
      image: "⛰️",
      emoji: "🏔️",
      detailImage: "🗻",
      description: { 
        de: "Tiefengestein aus Quarz, Feldspat und Glimmer. Sehr hart und langlebig.",
        en: "Intrusive igneous rock composed of quartz, feldspar and mica. Very hard and durable."
      },
      properties: {
        hardness: "6-7",
        color: { de: "Hell mit dunklen Punkten", en: "Light with dark spots" },
        usage: { de: "Küchenarbeitsplatten, Gebäude", en: "Kitchen countertops, buildings" }
      },
      locations: { 
        de: "Bayerischer Wald, Schwarzwald", 
        en: "Bavarian Forest, Black Forest" 
      }
    },
    { 
      id: 2,
      name: { de: "Basalt", en: "Basalt" },
      image: "🌋",
      emoji: "⚫",
      detailImage: "🌑",
      description: { 
        de: "Schwarzes Vulkangestein. Bildet oft sechseckige Säulen.",
        en: "Black volcanic rock. Often forms hexagonal columns."
      },
      properties: {
        hardness: "5-6",
        color: { de: "Dunkelgrau bis schwarz", en: "Dark gray to black" },
        usage: { de: "Straßenbau, Steinwolle", en: "Road construction, rock wool" }
      },
      locations: { 
        de: "Eifel, Island, Vogelsberg", 
        en: "Eifel, Iceland, Vogelsberg" 
      }
    },
    { 
      id: 3,
      name: { de: "Kalkstein", en: "Limestone" },
      image: "⛰️",
      emoji: "🤍",
      detailImage: "🦴",
      description: { 
        de: "Weiches Gestein mit vielen Fossilien. Bildet Höhlen.",
        en: "Soft rock with many fossils. Forms caves."
      },
      properties: {
        hardness: "3-4",
        color: { de: "Weiß, grau, beige", en: "White, gray, beige" },
        usage: { de: "Zement, Bauwesen", en: "Cement, construction" }
      },
      locations: { 
        de: "Schwäbische Alb, Fränkische Alb", 
        en: "Swabian Alb, Franconian Alb" 
      }
    },
    { 
      id: 4,
      name: { de: "Marmor", en: "Marble" },
      image: "✨",
      emoji: "⚪",
      detailImage: "🏛️",
      description: { 
        de: "Edles Gestein mit schönen Maserungen. Wird für Statuen verwendet.",
        en: "Elegant rock with beautiful veins. Used for statues."
      },
      properties: {
        hardness: "3-4",
        color: { de: "Weiß mit grauen Adern", en: "White with gray veins" },
        usage: { de: "Skulpturen, Gebäude", en: "Sculptures, buildings" }
      },
      locations: { 
        de: "Carrara (Italien), Tirol", 
        en: "Carrara (Italy), Tyrol" 
      }
    },
    { 
      id: 5,
      name: { de: "Sandstein", en: "Sandstone" },
      image: "🏜️",
      emoji: "🟫",
      detailImage: "🪨",
      description: { 
        de: "Aus Sandkörnern verfestigt. Deutliche Schichten sichtbar.",
        en: "Solidified sand grains. Visible layers."
      },
      properties: {
        hardness: "4-5",
        color: { de: "Rotbraun, gelb", en: "Reddish-brown, yellow" },
        usage: { de: "Bau- und Dekostein", en: "Building stone" }
      },
      locations: { 
        de: "Sächsische Schweiz, Pfalz", 
        en: "Saxon Switzerland, Palatinate" 
      }
    },
    { 
      id: 6,
      name: { de: "Schiefer", en: "Schist" },
      image: "⚡",
      emoji: "⬛",
      detailImage: "📚",
      description: { 
        de: "Blättriges Gestein. Lässt sich in dünne Platten spalten.",
        en: "Layered rock. Can be split into thin plates."
      },
      properties: {
        hardness: "4-5",
        color: { de: "Dunkelgrau, schwarz", en: "Dark gray, black" },
        usage: { de: "Dachplatten, Boden", en: "Roofing tiles, flooring" }
      },
      locations: { 
        de: "Rheinisches Schiefergebirge", 
        en: "Rhenish Massif" 
      }
    },
    { 
      id: 7,
      name: { de: "Gneis", en: "Gneiss" },
      image: "🗻",
      emoji: "🔘",
      detailImage: "⚪⚫",
      description: { 
        de: "Gebändertes Gestein. Ähnlich wie Granit mit Streifen.",
        en: "Banded rock. Similar to granite with stripes."
      },
      properties: {
        hardness: "6-7",
        color: { de: "Hell-dunkel gebändert", en: "Light-dark banded" },
        usage: { de: "Bau- und Dekostein", en: "Building stone" }
      },
      locations: { 
        de: "Alpen, Schwarzwald", 
        en: "Alps, Black Forest" 
      }
    },
    { 
      id: 8,
      name: { de: "Quarzit", en: "Quartzite" },
      image: "💎",
      emoji: "🥚",
      detailImage: "✨",
      description: { 
        de: "Sehr hartes Gestein aus Quarzsand. Glasartiger Glanz.",
        en: "Very hard rock from quartz sand. Glassy shine."
      },
      properties: {
        hardness: "7",
        color: { de: "Weiß, grau, rötlich", en: "White, gray, reddish" },
        usage: { de: "Bauindustrie, Feuersteine", en: "Construction, fire stones" }
      },
      locations: { 
        de: "Fichtelgebirge", 
        en: "Fichtel Mountains" 
      }
    },
    { 
      id: 9,
      name: { de: "Dolomit", en: "Dolomite" },
      image: "🧂",
      emoji: "◻️",
      detailImage: "🏔️",
      description: { 
        de: "Ähnlich Kalkstein, aber härter. Bildet ganze Bergketten.",
        en: "Similar to limestone, but harder. Forms mountain ranges."
      },
      properties: {
        hardness: "3.5-4",
        color: { de: "Weiß, grau, rosa", en: "White, gray, pink" },
        usage: { de: "Baustoff, Dünger", en: "Building material, fertilizer" }
      },
      locations: { 
        de: "Dolomiten (Italien)", 
        en: "Dolomites (Italy)" 
      }
    }
  ];

  // Mineralien
  const minerals: Mineral[] = [
    { 
      id: 1,
      name: { de: "Gold", en: "Gold" },
      symbol: "Au",
      image: "🏆",
      emoji: "🟡",
      detailImage: "💰",
      description: { 
        de: "Gelbglänzendes Edelmetall. Rostet nicht und ist sehr wertvoll.",
        en: "Yellow shiny precious metal. Does not rust and is very valuable."
      },
      properties: {
        hardness: "2.5-3",
        color: { de: "Goldgelb", en: "Golden yellow" },
        usage: { de: "Schmuck, Elektronik", en: "Jewelry, electronics" }
      },
      locations: { 
        de: "Österreich, Rumänien, Finnland", 
        en: "Austria, Romania, Finland" 
      }
    },
    { 
      id: 2,
      name: { de: "Diamant", en: "Diamond" },
      symbol: "C",
      image: "💎",
      emoji: "✨",
      detailImage: "👑",
      description: { 
        de: "Das härteste Mineral. Funkelt in allen Farben.",
        en: "The hardest mineral. Sparkles in all colors."
      },
      properties: {
        hardness: "10",
        color: { de: "Farblos, gelb, blau", en: "Colorless, yellow, blue" },
        usage: { de: "Schmuck, Schneidwerkzeuge", en: "Jewelry, cutting tools" }
      },
      locations: { 
        de: "Russland, Botswana, Kanada", 
        en: "Russia, Botswana, Canada" 
      }
    },
    { 
      id: 3,
      name: { de: "Silber", en: "Silver" },
      symbol: "Ag",
      image: "🔮",
      emoji: "⚪",
      detailImage: "🥄",
      description: { 
        de: "Weiß glänzendes Metall. Beste elektrische Leitfähigkeit.",
        en: "White shiny metal. Best electrical conductivity."
      },
      properties: {
        hardness: "2.5-3",
        color: { de: "Silberweiß", en: "Silver-white" },
        usage: { de: "Schmuck, Münzen", en: "Jewelry, coins" }
      },
      locations: { 
        de: "Mexiko, Peru, China", 
        en: "Mexico, Peru, China" 
      }
    },
    { 
      id: 4,
      name: { de: "Kupfer", en: "Copper" },
      symbol: "Cu",
      image: "⚱️",
      emoji: "🟠",
      detailImage: "🔌",
      description: { 
        de: "Rötliches Metall. Wichtig für Elektrokabel.",
        en: "Reddish metal. Important for electrical wires."
      },
      properties: {
        hardness: "3",
        color: { de: "Rotbraun", en: "Reddish-brown" },
        usage: { de: "Elektrokabel, Rohre", en: "Electrical wires, pipes" }
      },
      locations: { 
        de: "Chile, USA, Sambia", 
        en: "Chile, USA, Zambia" 
      }
    },
    { 
      id: 5,
      name: { de: "Smaragd", en: "Emerald" },
      symbol: "Be₃Al₂Si₆O₁₈",
      image: "🟢",
      emoji: "💚",
      detailImage: "🍀",
      description: { 
        de: "Tiefgrüner Edelstein. Sehr selten und wertvoll.",
        en: "Deep green gemstone. Very rare and valuable."
      },
      properties: {
        hardness: "7.5-8",
        color: { de: "Smaragdgrün", en: "Emerald green" },
        usage: { de: "Hochwertiger Schmuck", en: "High-quality jewelry" }
      },
      locations: { 
        de: "Kolumbien, Sambia", 
        en: "Colombia, Zambia" 
      }
    },
    { 
      id: 6,
      name: { de: "Rubin", en: "Ruby" },
      symbol: "Al₂O₃",
      image: "🔴",
      emoji: "❤️",
      detailImage: "🔥",
      description: { 
        de: "Leuchtend roter Edelstein. Sehr hart.",
        en: "Bright red gemstone. Very hard."
      },
      properties: {
        hardness: "9",
        color: { de: "Rot", en: "Red" },
        usage: { de: "Schmuck", en: "Jewelry" }
      },
      locations: { 
        de: "Myanmar, Sri Lanka", 
        en: "Myanmar, Sri Lanka" 
      }
    },
    { 
      id: 7,
      name: { de: "Saphir", en: "Sapphire" },
      symbol: "Al₂O₃",
      image: "🔵",
      emoji: "💙",
      detailImage: "💎",
      description: { 
        de: "Blauer Edelstein. Zweithärtester Edelstein.",
        en: "Blue gemstone. Second hardest gemstone."
      },
      properties: {
        hardness: "9",
        color: { de: "Blau", en: "Blue" },
        usage: { de: "Schmuck", en: "Jewelry" }
      },
      locations: { 
        de: "Sri Lanka, Myanmar", 
        en: "Sri Lanka, Myanmar" 
      }
    },
    { 
      id: 8,
      name: { de: "Opal", en: "Opal" },
      symbol: "SiO₂·nH₂O",
      image: "🌈",
      emoji: "✨",
      detailImage: "🎨",
      description: { 
        de: "Schillert in allen Farben. Enthält Wasser.",
        en: "Shimmers in all colors. Contains water."
      },
      properties: {
        hardness: "5.5-6.5",
        color: { de: "Regenbogenfarben", en: "Rainbow colors" },
        usage: { de: "Schmuck", en: "Jewelry" }
      },
      locations: { 
        de: "Australien, Äthiopien", 
        en: "Australia, Ethiopia" 
      }
    },
    { 
      id: 9,
      name: { de: "Topas", en: "Topaz" },
      symbol: "Al₂SiO₄",
      image: "🟨",
      emoji: "💛",
      detailImage: "⭐",
      description: { 
        de: "Edelstein in vielen Farben. Oft goldgelb.",
        en: "Gemstone in many colors. Often golden yellow."
      },
      properties: {
        hardness: "8",
        color: { de: "Gelb, blau, rosa", en: "Yellow, blue, pink" },
        usage: { de: "Schmuck", en: "Jewelry" }
      },
      locations: { 
        de: "Brasilien, Russland", 
        en: "Brazil, Russia" 
      }
    }
  ];

  const content = {
    de: {
      title: "GEOLOGISCHER ENTDECKER",
      subtitle: "Die Erde und ihre Geheimnisse",
      rocks: "GESTEINSARTEN",
      minerals: "EDELMINERALIEN",
      phenomena: "NATURPHÄNOMENE",
      categories: {
        alle: "Alle Phänomene",
        geologisch: "Geologische Phänomene",
        klimatisch: "Klimatische Phänomene",
        meteorologisch: "Meteorologische Phänomene",
        maritim: "Maritime Phänomene",
        optisch: "Optische Phänomene"
      },
      properties: "Eigenschaften",
      hardness: "Härte",
      color: "Farbe",
      usage: "Verwendung",
      locations: "Fundorte",
      facts: "Wichtige Fakten",
      back: "← Zurück",
      readMore: "Mehr erfahren"
    },
    en: {
      title: "GEOLOGICAL EXPLORER",
      subtitle: "Earth and its Secrets",
      rocks: "ROCK TYPES",
      minerals: "PRECIOUS MINERALS",
      phenomena: "NATURAL PHENOMENA",
      categories: {
        alle: "All Phenomena",
        geologisch: "Geological Phenomena",
        klimatisch: "Climatic Phenomena",
        meteorologisch: "Meteorological Phenomena",
        maritim: "Maritime Phenomena",
        optisch: "Optical Phenomena"
      },
      properties: "Properties",
      hardness: "Hardness",
      color: "Color",
      usage: "Usage",
      locations: "Locations",
      facts: "Important Facts",
      back: "← Back",
      readMore: "Read more"
    }
  };

  const [selectedRock, setSelectedRock] = useState<Rock | null>(null);
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [selectedPhenomenon, setSelectedPhenomenon] = useState<Phenomenon | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('alle');
  const [animationFrame, setAnimationFrame] = useState<number>(0);

  // Animation für ausgewähltes Phänomen
  useEffect(() => {
    if (selectedPhenomenon) {
      const interval = setInterval(() => {
        setAnimationFrame(prev => (prev + 1) % selectedPhenomenon.animationFrames.length);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [selectedPhenomenon]);

  const current = content[language];

  // Kategorien für Filter
  const categories: Category[] = [
    { id: 'alle', name: { de: 'Alle Phänomene', en: 'All Phenomena' } },
    { id: 'geologisch', name: { de: 'Geologische', en: 'Geological' } },
    { id: 'klimatisch', name: { de: 'Klimatische', en: 'Climatic' } },
    { id: 'meteorologisch', name: { de: 'Meteorologische', en: 'Meteorological' } },
    { id: 'maritim', name: { de: 'Maritime', en: 'Maritime' } },
    { id: 'optisch', name: { de: 'Optische', en: 'Optical' } }
  ];

  // Gefilterte Phänomene
  const filteredPhenomena: Phenomenon[] = selectedCategory === 'alle' 
    ? earthPhenomena 
    : earthPhenomena.filter(p => p.category === selectedCategory);

  // Detailansicht für Naturphänomene mit Animation
  if (selectedPhenomenon) {
    return (
      <div style={{minHeight: '100vh', background: '#000', color: '#fff', padding: '20px'}}>
        <button onClick={() => {
          setSelectedPhenomenon(null);
          setAnimationFrame(0);
        }} style={{
          padding: '12px 24px',
          background: '#fbbf24',
          color: '#000',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>{current.back}</button>
        
        <div style={{maxWidth: '800px', margin: '0 auto', background: 'rgba(0,0,0,0.8)', padding: '40px', borderRadius: '30px', border: '2px solid #fbbf24'}}>
          <div style={{
            fontSize: '150px', 
            textAlign: 'center', 
            marginBottom: '20px', 
            textShadow: '0 0 30px #fbbf24',
            animation: 'pulse 0.5s infinite',
            transform: 'scale(1.2)',
            transition: 'all 0.3s'
          }}>
            {selectedPhenomenon.animationFrames[animationFrame]}
          </div>
          <h1 style={{fontSize: '56px', textAlign: 'center', color: '#fbbf24', marginBottom: '30px', fontWeight: 'bold'}}>
            {selectedPhenomenon.name[language]}
          </h1>
          
          <div style={{background: '#111', padding: '30px', borderRadius: '20px', marginBottom: '30px', border: '1px solid #fbbf24'}}>
            <p style={{fontSize: '20px', lineHeight: '1.6', color: '#fff'}}>
              {selectedPhenomenon.description[language]}
            </p>
          </div>
          
          <div style={{background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #fbbf24'}}>
            <h3 style={{color: '#fbbf24', fontSize: '28px', marginBottom: '20px'}}>{current.facts}</h3>
            <ul style={{fontSize: '18px', lineHeight: '2'}}>
              {selectedPhenomenon.facts[language].map((fact: string, index: number) => (
                <li key={index} style={{marginBottom: '10px'}}>• {fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Detailansicht für Gestein
  if (selectedRock) {
    return (
      <div style={{minHeight: '100vh', background: '#000', color: '#fff', padding: '20px'}}>
        <button onClick={() => setSelectedRock(null)} style={{
          padding: '12px 24px',
          background: '#fbbf24',
          color: '#000',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>{current.back}</button>
        
        <div style={{maxWidth: '800px', margin: '0 auto', background: 'rgba(0,0,0,0.8)', padding: '40px', borderRadius: '30px', border: '2px solid #fbbf24'}}>
          <div style={{fontSize: '150px', textAlign: 'center', marginBottom: '20px', textShadow: '0 0 30px #fbbf24'}}>
            {selectedRock.detailImage} {selectedRock.image}
          </div>
          <h1 style={{fontSize: '56px', textAlign: 'center', color: '#fbbf24', marginBottom: '20px', fontWeight: 'bold'}}>
            {selectedRock.name[language]}
          </h1>
          <p style={{fontSize: '22px', textAlign: 'center', marginBottom: '40px', color: '#fff', background: '#111', padding: '20px', borderRadius: '15px'}}>
            {selectedRock.description[language]}
          </p>
          
          <div style={{display: 'grid', gap: '20px'}}>
            <div style={{background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #fbbf24'}}>
              <h3 style={{color: '#fbbf24', fontSize: '28px', marginBottom: '15px'}}>{current.properties}</h3>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.hardness}:</strong> {selectedRock.properties.hardness} (Mohs)</p>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.color}:</strong> {selectedRock.properties.color[language]}</p>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.usage}:</strong> {selectedRock.properties.usage[language]}</p>
            </div>
            
            <div style={{background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #fbbf24'}}>
              <h3 style={{color: '#fbbf24', fontSize: '28px', marginBottom: '15px'}}>{current.locations}</h3>
              <p style={{fontSize: '20px'}}>{selectedRock.locations[language]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detailansicht für Mineral
  if (selectedMineral) {
    return (
      <div style={{minHeight: '100vh', background: '#000', color: '#fff', padding: '20px'}}>
        <button onClick={() => setSelectedMineral(null)} style={{
          padding: '12px 24px',
          background: '#fbbf24',
          color: '#000',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>{current.back}</button>
        
        <div style={{maxWidth: '800px', margin: '0 auto', background: 'rgba(0,0,0,0.8)', padding: '40px', borderRadius: '30px', border: '2px solid #fbbf24'}}>
          <div style={{fontSize: '150px', textAlign: 'center', marginBottom: '20px', textShadow: '0 0 30px #fbbf24'}}>
            {selectedMineral.detailImage} {selectedMineral.image}
          </div>
          <h1 style={{fontSize: '56px', textAlign: 'center', color: '#fbbf24', marginBottom: '20px', fontWeight: 'bold'}}>
            {selectedMineral.name[language]}
          </h1>
          <p style={{fontSize: '22px', textAlign: 'center', marginBottom: '20px', color: '#fff', background: '#111', padding: '20px', borderRadius: '15px'}}>
            {selectedMineral.description[language]}
          </p>
          <p style={{fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#fbbf24', background: '#111', padding: '15px', borderRadius: '50px', display: 'inline-block', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            {selectedMineral.symbol}
          </p>
          
          <div style={{display: 'grid', gap: '20px'}}>
            <div style={{background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #fbbf24'}}>
              <h3 style={{color: '#fbbf24', fontSize: '28px', marginBottom: '15px'}}>{current.properties}</h3>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.hardness}:</strong> {selectedMineral.properties.hardness} (Mohs)</p>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.color}:</strong> {selectedMineral.properties.color[language]}</p>
              <p style={{fontSize: '18px'}}><strong style={{color: '#fbbf24'}}>{current.usage}:</strong> {selectedMineral.properties.usage[language]}</p>
            </div>
            
            <div style={{background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #fbbf24'}}>
              <h3 style={{color: '#fbbf24', fontSize: '28px', marginBottom: '15px'}}>{current.locations}</h3>
              <p style={{fontSize: '20px'}}>{selectedMineral.locations[language]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hauptansicht
  return (
    <div style={{minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden'}}>
      {/* Stars Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 3px 3px, #fff 2px, transparent 2px), radial-gradient(circle at 15px 20px, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '40px 40px, 80px 80px',
        opacity: 0.8,
        zIndex: 0
      }} />

      {/* Sonne */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '220px',
        height: '220px',
        background: '#fbbf24',
        borderRadius: '50%',
        boxShadow: '0 0 200px #fbbf24, 0 0 400px #f59e0b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '100px',
        zIndex: 1,
        border: '4px solid #fff'
      }}>
        ☀️
      </div>

      {/* Umlaufbahnen */}
      {[120, 170, 220, 270, 340, 410, 480, 550].map((distance: number, index: number) => (
        <div key={index} style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${distance * 3}px`,
          height: `${distance * 1.8}px`,
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.2)',
          zIndex: 1
        }} />
      ))}

      {/* Alle Planeten */}
      {planets.map((planet: Planet, index: number) => {
        const angleKey = planet.name.toLowerCase() as keyof PlanetAngles;
        const pos = getPlanetPosition(planet.distance, angles[angleKey]);
        
        return (
          <div key={planet.name}>
            {/* Planet */}
            <div style={{
              position: 'fixed',
              top: `calc(50% + ${pos.y}px)`,
              left: `calc(50% + ${pos.x}px)`,
              transform: 'translate(-50%, -50%)',
              width: `${planet.size * 2.2}px`,
              height: `${planet.size * 2.2}px`,
              background: planet.color,
              borderRadius: '50%',
              boxShadow: `0 0 60px ${planet.glow}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${planet.size}px`,
              zIndex: 2,
              border: '3px solid white'
            }}>
              {planet.emoji}
            </div>
            
            {/* Ring für Saturn */}
            {planet.hasRing && (
              <div style={{
                position: 'fixed',
                top: `calc(50% + ${pos.y}px)`,
                left: `calc(50% + ${pos.x}px)`,
                transform: 'translate(-50%, -50%) rotate(15deg)',
                width: '90px',
                height: '25px',
                borderRadius: '50%',
                border: '4px solid rgba(255, 255, 255, 0.8)',
                zIndex: 1
              }} />
            )}

            {/* Planetenname */}
            <div style={{
              position: 'fixed',
              top: `calc(50% + ${pos.y - 50}px)`,
              left: `calc(50% + ${pos.x}px)`,
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '0 0 20px #000, 0 0 30px #fbbf24',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(251,191,36,0.3))',
              padding: '8px 20px',
              borderRadius: '40px',
              whiteSpace: 'nowrap',
              zIndex: 3,
              border: '2px solid #fbbf24',
              letterSpacing: '2px'
            }}>
              {language === 'de' ? planet.nameDe : planet.nameEn} ⬇️
            </div>

            {/* Beschreibung */}
            <div style={{
              position: 'fixed',
              top: `calc(50% + ${pos.y + 45}px)`,
              left: `calc(50% + ${pos.x}px)`,
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              fontSize: '16px',
              background: 'rgba(0,0,0,0.8)',
              padding: '5px 15px',
              borderRadius: '20px',
              border: '1px solid #fbbf24',
              zIndex: 3
            }}>
              {planet.description[language]}
            </div>
          </div>
        );
      })}

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(0,0,0,0.95)',
        padding: '15px 20px',
        zIndex: 100,
        borderBottom: '3px solid #fbbf24'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 style={{margin: 0, color: '#fbbf24', fontSize: '28px', fontWeight: 'bold', letterSpacing: '2px'}}>{current.title}</h1>
          <div>
            <button 
              onClick={() => setLanguage('de')}
              style={{
                padding: '10px 25px',
                margin: '0 5px',
                background: language === 'de' ? '#fbbf24' : '#333',
                color: language === 'de' ? '#000' : '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('en')}
              style={{
                padding: '10px 25px',
                margin: '0 5px',
                background: language === 'en' ? '#fbbf24' : '#333',
                color: language === 'en' ? '#000' : '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '120px 20px 60px',
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(5px)',
        minHeight: '100vh'
      }}>
        
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(251,191,36,0.2))',
          padding: '50px',
          borderRadius: '40px',
          textAlign: 'center',
          marginBottom: '50px',
          border: '2px solid #fbbf24'
        }}>
          <h2 style={{fontSize: '56px', marginBottom: '20px', color: '#fff', fontWeight: 'bold', textShadow: '0 0 20px #fbbf24'}}>
            {current.subtitle}
          </h2>
          <p style={{fontSize: '28px', color: '#fbbf24', fontWeight: 'bold'}}>
            {rockTypes.length} {current.rocks} · {minerals.length} {current.minerals} · {earthPhenomena.length} {current.phenomena}
          </p>
        </div>

        {/* SEKTION: Naturphänomene */}
        <section style={{marginBottom: '80px'}}>
          <h2 style={{
            fontSize: '42px',
            color: '#fbbf24',
            marginBottom: '30px',
            borderBottom: '3px solid #fbbf24',
            paddingBottom: '15px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            {current.phenomena} ({earthPhenomena.length})
          </h2>

          {/* Kategorie-Filter */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '30px',
            justifyContent: 'center'
          }}>
            {categories.map((cat: Category) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '10px 20px',
                  background: selectedCategory === cat.id ? '#fbbf24' : 'rgba(0,0,0,0.5)',
                  color: selectedCategory === cat.id ? '#000' : '#fff',
                  border: selectedCategory === cat.id ? '2px solid #fbbf24' : '1px solid #fbbf24',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: selectedCategory === cat.id ? 'bold' : 'normal',
                  transition: 'all 0.3s'
                }}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {filteredPhenomena.map((phenomenon: Phenomenon) => (
              <div
                key={phenomenon.id}
                onClick={() => setSelectedPhenomenon(phenomenon)}
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(251,191,36,0.15))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #fbbf24',
                  borderRadius: '25px',
                  padding: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(251,191,36,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '70px', 
                  marginBottom: '15px', 
                  textShadow: '0 0 20px #fbbf24'
                }}>
                  {phenomenon.icon}
                </div>
                <h3 style={{fontSize: '28px', color: '#fbbf24', marginBottom: '10px', fontWeight: 'bold'}}>
                  {phenomenon.name[language]}
                </h3>
                <p style={{color: '#fbbf24', fontSize: '14px', marginBottom: '15px', fontStyle: 'italic'}}>
                  {current.categories[phenomenon.category as keyof typeof current.categories]}
                </p>
                <p style={{color: '#fff', fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
                  {phenomenon.description[language].substring(0, 100)}...
                </p>
                <div style={{
                  background: '#111',
                  padding: '12px',
                  borderRadius: '12px',
                  width: '100%',
                  border: '1px solid #fbbf24'
                }}>
                  <p style={{color: '#fbbf24', fontSize: '15px', fontWeight: 'bold'}}>
                    {current.readMore} →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rocks Section */}
        <section style={{marginBottom: '80px'}}>
          <h2 style={{
            fontSize: '42px',
            color: '#fbbf24',
            marginBottom: '40px',
            borderBottom: '3px solid #fbbf24',
            paddingBottom: '15px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            {current.rocks} ({rockTypes.length})
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {rockTypes.map((rock: Rock) => (
              <div
                key={rock.id}
                onClick={() => setSelectedRock(rock)}
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(251,191,36,0.1))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #fbbf24',
                  borderRadius: '25px',
                  padding: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(251,191,36,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{fontSize: '80px', marginBottom: '15px', textShadow: '0 0 20px #fbbf24'}}>
                  {rock.image} {rock.emoji}
                </div>
                <h3 style={{fontSize: '28px', color: '#fbbf24', marginBottom: '10px', fontWeight: 'bold'}}>
                  {rock.name[language]}
                </h3>
                <p style={{color: '#fff', fontSize: '16px', marginBottom: '20px'}}>
                  {rock.description[language]}
                </p>
                <div style={{
                  background: '#111',
                  padding: '15px',
                  borderRadius: '15px',
                  width: '100%',
                  border: '1px solid #fbbf24'
                }}>
                  <p style={{color: '#fbbf24', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold'}}>
                    {current.hardness}: {rock.properties.hardness}
                  </p>
                  <p style={{color: '#fff', fontSize: '14px'}}>
                    {rock.properties.color[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minerals Section */}
        <section style={{marginBottom: '80px'}}>
          <h2 style={{
            fontSize: '42px',
            color: '#fbbf24',
            marginBottom: '40px',
            borderBottom: '3px solid #fbbf24',
            paddingBottom: '15px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            {current.minerals} ({minerals.length})
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {minerals.map((mineral: Mineral) => (
              <div
                key={mineral.id}
                onClick={() => setSelectedMineral(mineral)}
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(251,191,36,0.2))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #fbbf24',
                  borderRadius: '25px',
                  padding: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(251,191,36,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{fontSize: '80px', marginBottom: '15px', textShadow: '0 0 20px #fbbf24'}}>
                  {mineral.image} {mineral.emoji}
                </div>
                <h3 style={{fontSize: '28px', color: '#fbbf24', marginBottom: '5px', fontWeight: 'bold'}}>
                  {mineral.name[language]}
                </h3>
                <p style={{color: '#fbbf24', fontSize: '18px', marginBottom: '10px', fontWeight: 'bold'}}>
                  {mineral.symbol}
                </p>
                <p style={{color: '#fff', fontSize: '16px', marginBottom: '20px'}}>
                  {mineral.description[language]}
                </p>
                <div style={{
                  background: '#111',
                  padding: '15px',
                  borderRadius: '15px',
                  width: '100%',
                  border: '1px solid #fbbf24'
                }}>
                  <p style={{color: '#fbbf24', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold'}}>
                    {current.hardness}: {mineral.properties.hardness}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          paddingTop: '30px',
          borderTop: '3px solid #fbbf24',
          textAlign: 'center',
          color: '#fff',
          fontSize: '18px'
        }}>
          <p>© 2024 Geological Explorer - {rockTypes.length} Gesteinsarten · {minerals.length} Edelmineralien · {earthPhenomena.length} Naturphänomene</p>
        </footer>
      </main>

      {/* Globale Animationen */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes wave {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.2); }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 5px #fbbf24; }
          50% { text-shadow: 0 0 30px #fbbf24, 0 0 50px #f59e0b; }
          100% { text-shadow: 0 0 5px #fbbf24; }
        }
        
        @keyframes snow {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
