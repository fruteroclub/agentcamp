import Image from "next/image"
import { Section } from "../layout/section"

interface Partner {
  name: string
  logo: string
  tier: 'co-host' | 'sponsor' | 'community partner'
}

export function PartnersSection() {
  const partners: Partner[] = [
    {
      name: "CryptoConexión",
      logo: "/images/partners/cryptoconexion-color.png",
      tier: "co-host"
    },
    {
      name: "Frutero Club",
      logo: "/images/partners/frutero-club-color.png",
      tier: "co-host"
    },
    {
      name: "Dabl Club",
      logo: "/images/partners/dabl-club-black.png",
      tier: "sponsor"
    },
    {
      name: "Polygon",
      logo: "/images/partners/polygon-black.png",
      tier: "sponsor"
    },
    {
      name: "Black Flag DAO",
      logo: "/images/partners/black-flag-dao-color.jpg",
      tier: "community partner"
    },
    {
      name: "CriptoCuriosas",
      logo: "/images/partners/cripto-curiosas-color.png",
      tier: "community partner"
    },
    {
      name: "Espacio Cripto",
      logo: "/images/partners/espacio-cripto-color.png",
      tier: "community partner"
    },
    {
      name: "Ethereum México",
      logo: "/images/partners/ethereum-mexico-color.png",
      tier: "community partner"
    },
    {
      name: "Ethereum Monterrey",
      logo: "/images/partners/ethereum-monterrey-color.jpg",
      tier: "community partner"
    },
    {
      name: "HER DAO México",
      logo: "/images/partners/her-dao-mexico-black.png",
      tier: "community partner"
    },
    {
      name: "Odisea Labs",
      logo: "/images/partners/odisea-labs-black.png",
      tier: "community partner"
    },
    {
      name: "Web3 Familia",
      logo: "/images/partners/web3-familia-color.png",
      tier: "community partner"
    }
  ]

  const partnersByTier = {
    'co-host': partners.filter(p => p.tier === 'co-host'),
    'sponsor': partners.filter(p => p.tier === 'sponsor'),
    'community partner': partners.filter(p => p.tier === 'community partner')
  }

  const tierTitles = {
    'co-host': 'Co-hosts',
    'sponsor': 'Sponsors',
    'community partner': 'Community Partners'
  }

  return (
    <Section>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Nuestros Partners
        </h2>
        <p className="text-xl text-muted-foreground">
          Respaldado por líderes en la industria
        </p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {(Object.keys(partnersByTier) as Array<keyof typeof partnersByTier>).map((tier) => (
          <div key={tier} className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              {tierTitles[tier]}
            </h3>
            <div className={`grid gap-8 items-center justify-items-center ${tier === 'co-host' ? 'md:grid-cols-2' :
              tier === 'sponsor' ? 'md:grid-cols-2' :
                'md:grid-cols-4'
              }`}>
              {partnersByTier[tier].map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center p-6 hover:scale-105 transition-transform"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={tier === 'community partner' ? 120 : 180}
                    height={tier === 'community partner' ? 40 : 60}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 