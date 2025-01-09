'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import MobileMenu from './mobileMenu'
import AuthButton from '../buttons/authButton'

export type MenuItemType = {
  displayText: string
  href: string
  isMobileOnly: boolean
  isExternal?: boolean
}

const MENU_ITEMS: MenuItemType[] = [
  {
    displayText: 'programa',
    href: '/#programa',
    isMobileOnly: false,
  },
  {
    displayText: 'recursos',
    href: 'https://cryptoconexion.com/category/inteligencia-artificial/',
    isExternal: true,
    isMobileOnly: false,
  },
  { displayText: 'faq', href: '/#faq', isMobileOnly: false },
  // { displayText: 'account', href: '/account', isMobileOnly: false },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="top-0 h-20 w-full bg-secondary">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <Link className="flex items-center text-3xl" href="/">
            <Image
              src="/images/logos/agentcamp-connie-logo.png"
              alt="Connie: el agente de agentcamp"
              width={128}
              height={128}
              className="w-10 transition duration-300 ease-in-out hover:scale-110"
            />
            <span className="sr-only">Agentcamp</span>
          </Link>
        </div>
        <div className="lg:col-span-3">
          <div className="z-10 col-span-3 flex items-center justify-center">
            <nav className="hidden gap-6 lg:flex">
              {MENU_ITEMS.filter((menuItem) => !menuItem.isMobileOnly).map(
                (menuItem, index) => (
                  <Link
                    key={`${menuItem.displayText}-menuItem-${index}`}
                    className={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-secondary-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none ${pathname === menuItem.href &&
                      'pointer-events-none underline decoration-primary decoration-[1.5px] underline-offset-[6px] hover:!text-foreground'
                      }`}
                    href={menuItem.href}
                    target={menuItem.isExternal ? '_blank' : ''}
                  >
                    {menuItem.displayText}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="hidden lg:flex lg:justify-end">
            <AuthButton />
          </div>

          <MobileMenu menuItems={MENU_ITEMS} pathname={pathname} />
        </div >
      </div>
    </header >
  )
}
