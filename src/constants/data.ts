export const BRANDS = [
  { name: "Crompton", logo: "/brands/crompton.png" },
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "ABB", logo: "/brands/abb.svg" },
  { name: "Bharat Bijlee", logo: "/brands/bharat-bijlee.jpg" },
  { name: "Kirloskar", logo: "/brands/kirloskar.svg" },
  { name: "Bonfiglioli", logo: "/brands/bonfiglioli.svg" },
  { name: "SEW", logo: "/brands/sew.svg" },
  { name: "Motovario", logo: "/brands/motovario.png" },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "motors",
    title: "Electric Motors",
    description: "High-efficiency 3-phase and single-phase induction motors for all industrial applications.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gearboxes",
    title: "Industrial Gearboxes",
    description: "Robust worm, helical, and planetary gearboxes for precise torque transmission.",
    image: "/products/catalog/gearboxes/industrial-helical-gearbox-1.jpeg",
    images: [
      "/products/catalog/gearboxes/industrial-helical-gearbox-1.jpeg",
      "/products/catalog/gearboxes/industrial-helical-gearbox-2.jpeg",
      "/products/catalog/gearboxes/industrial-helical-gearbox-3.jpeg",
      "/products/catalog/gearboxes/industrial-helical-gearbox-4.jpeg",
    ],
    href: "/products/industrial-gearboxes",
  },
  {
    id: "vfd",
    title: "VFD / AC Drives",
    description: "Advanced automation drives for precise speed control and energy saving.",
    image: "/products/vfd-drive.jpg",
  },
  {
    id: "pumps",
    title: "Industrial Pumps",
    description: "Reliable centrifugal, monoblock, and submersible pumps for water management.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "automation",
    title: "Automation Products",
    description: "PLC, HMI, and switchgear components for modern smart factories.",
    image: "/products/automation-control-panel.jpg",
  },
  {
    id: "spares",
    title: "Industrial Spares",
    description: "Genuine replacement parts and accessories for power transmission systems.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  }
];

export const INDUSTRIAL_PRODUCT_CATALOGUE = {
  slug: "industrial-gearboxes",
  title: "Industrial Product Categories",
  description:
    "Browse the real product families currently showcased by Kailashpati Enterprises, grouped into motors, gearboxes, pumps, and ready-stock warehouse support.",
  sections: [
    {
      id: "gearboxes",
      eyebrow: "Torque Transmission",
      title: "Industrial Gearboxes",
      description:
        "Heavy-duty gearbox solutions for torque multiplication, speed reduction, and dependable line operation.",
      items: [
        {
          id: "helical-gearboxes",
          title: "Industrial Helical Gearboxes",
          description:
            "Parallel shaft helical gearboxes for smooth, efficient, low-noise industrial duty.",
          images: [
            "/products/catalog/gearboxes/industrial-helical-gearbox-1.jpeg",
            "/products/catalog/gearboxes/industrial-helical-gearbox-2.jpeg",
            "/products/catalog/gearboxes/industrial-helical-gearbox-3.jpeg",
            "/products/catalog/gearboxes/industrial-helical-gearbox-4.jpeg",
          ],
        },
        {
          id: "worm-gearboxes",
          title: "Compact Worm Gearboxes",
          description:
            "Space-saving worm reduction gearboxes suited for compact machinery and controlled output speed.",
          images: [
            "/products/catalog/gearboxes/compact-worm-gearbox-1.jpeg",
            "/products/catalog/gearboxes/compact-worm-gearbox-2.jpeg",
            "/products/catalog/gearboxes/compact-worm-gearbox-3.jpeg",
            "/products/catalog/gearboxes/compact-worm-gearbox-4.jpeg",
          ],
        },
      ],
    },
    {
      id: "motors",
      eyebrow: "Drive Systems",
      title: "Electric Motors",
      description:
        "Industrial motor configurations for conveyor lines, packaged machines, and general-purpose rotating equipment.",
      items: [
        {
          id: "flange-mount-motors",
          title: "Flange Mount Electric Motors",
          description:
            "Rigid flange-mounted motors for direct equipment integration and compact footprint installations.",
          images: [
            "/products/catalog/motors/flange-mount-motor-1.jpeg",
            "/products/catalog/motors/flange-mount-motor-2.jpeg",
            "/products/catalog/motors/flange-mount-motor-3.jpeg",
            "/products/catalog/motors/flange-mount-motor-4.jpeg",
          ],
        },
        {
          id: "foot-mount-motors",
          title: "Foot Mount Electric Motors",
          description:
            "Base-mounted industrial motors for pump sets, line shafts, and flexible plant layouts.",
          images: [
            "/products/catalog/motors/foot-mount-motor-1.jpeg",
            "/products/catalog/motors/foot-mount-motor-2.jpeg",
            "/products/catalog/motors/foot-mount-motor-3.jpeg",
          ],
        },
        {
          id: "brake-motors",
          title: "Electromagnetic Brake Motors",
          description:
            "Motor and brake assemblies for controlled stopping, holding, and safety-focused motion systems.",
          images: [
            "/products/catalog/motors/brake-motor-1.jpeg",
            "/products/catalog/motors/brake-motor-2.jpeg",
          ],
        },
      ],
    },
    {
      id: "pumps",
      eyebrow: "Fluid Handling",
      title: "Industrial Pumps",
      description:
        "Water movement systems for agriculture, plant process lines, and submerged pumping applications.",
      items: [
        {
          id: "monoblock-pumps",
          title: "Compact Monoblock Pumps",
          description:
            "Compact monoblock pumps designed for dependable field and utility water transfer.",
          images: [
            "/products/catalog/pumps/compact-monoblock-pump-1.jpeg",
            "/products/catalog/pumps/compact-monoblock-pump-2.jpeg",
            "/products/catalog/pumps/compact-monoblock-pump-3.jpeg",
            "/products/catalog/pumps/compact-monoblock-pump-4.jpeg",
          ],
        },
        {
          id: "centrifugal-pumps",
          title: "Industrial Centrifugal Water Pumps",
          description:
            "Centrifugal pumping systems for process water circulation and industrial water management.",
          images: [
            "/products/catalog/pumps/industrial-centrifugal-pump-1.jpeg",
            "/products/catalog/pumps/industrial-centrifugal-pump-2.jpeg",
            "/products/catalog/pumps/industrial-centrifugal-pump-3.jpeg",
            "/products/catalog/pumps/industrial-centrifugal-pump-4.jpeg",
          ],
        },
        {
          id: "submersible-pumps",
          title: "Submersible Industrial Water Pumps",
          description:
            "Submersible pump systems for underground, pit, sump, and deep-water discharge use cases.",
          images: [
            "/products/catalog/pumps/submersible-water-pump-1.jpeg",
            "/products/catalog/pumps/submersible-water-pump-2.jpeg",
            "/products/catalog/pumps/submersible-water-pump-3.jpeg",
            "/products/catalog/pumps/submersible-water-pump-4.jpeg",
          ],
        },
      ],
    },
    {
      id: "warehouse",
      eyebrow: "Ready Stock",
      title: "Warehouse & Inventory Support",
      description:
        "Large ready-stock storage that supports faster dispatch for motors, drives, pumps, and gearbox assemblies.",
      items: [
        {
          id: "inventory-warehouse",
          title: "Industrial Inventory Warehouse",
          description:
            "Organized storage and dispatch infrastructure for quick availability across multiple product lines.",
          images: [
            "/products/catalog/warehouse/inventory-warehouse-1.jpeg",
            "/products/catalog/warehouse/inventory-warehouse-2.jpeg",
            "/products/catalog/warehouse/inventory-warehouse-3.jpeg",
            "/products/catalog/warehouse/inventory-warehouse-4.jpeg",
          ],
        },
      ],
    },
  ],
};

export const INDUSTRIES = [
  { name: "Manufacturing Plants", icon: "Factory" },
  { name: "OEMs", icon: "Settings" },
  { name: "Builders & Infrastructure", icon: "Construction" },
  { name: "Water Treatment", icon: "Droplets" },
  { name: "HVAC Systems", icon: "Wind" },
  { name: "Textile Industry", icon: "Shirt" },
  { name: "Packaging Industry", icon: "Package" },
  { name: "Food Processing", icon: "Utensils" },
  { name: "Chemical Plants", icon: "FlaskConical" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Genuine Brands",
    description: "Authorized supply of leading global and domestic industrial brands.",
    icon: "ShieldCheck",
  },
  {
    title: "Fast Delivery",
    description: "Strategic warehouse location in Ghaziabad for rapid PAN-India dispatch.",
    icon: "Truck",
  },
  {
    title: "Technical Assistance",
    description: "Expert guidance for product selection and technical troubleshooting.",
    icon: "HardHat",
  },
  {
    title: "Competitive Pricing",
    description: "Direct relationship with manufacturers ensuring the best B2B rates.",
    icon: "TrendingDown",
  },
];
