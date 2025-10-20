'use client'

import { GithubIcon, Instagram, Link, LinkedinIcon, Mail } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguageContext } from '@/contexts/language-context'

type TeamMember = {
  name: string
  role:
    | 'environmentalEngineer'
    | 'elytonDescription'
    | 'viniciusDescription'
    | 'developer'
    | 'techLeadWebDeveloper'
    | 'machineLearningEngineer'
  avatar: string
  fallback: string
  links: Array<{
    icon: typeof LinkedinIcon | typeof Mail | typeof Link | typeof Instagram
    href: string
  }>
}

export default function Contact() {
  const { getTranslation } = useLanguageContext()

  const team: TeamMember[] = [
    {
      name: 'Eduardo Mallet',
      role: 'environmentalEngineer',
      avatar: '/assets/contact/eduardo.jpg',
      fallback: 'EM',
      links: [
        {
          icon: LinkedinIcon,
          href: 'https://www.linkedin.com/in/eduardo-mallet-114567212',
        },
        { icon: Mail, href: 'mailto:eng_mallet@outlook.com' },
      ],
    },
    {
      name: 'Elynton Alves do Nascimento',
      role: 'elytonDescription',
      avatar: '/assets/contact/elyton.jpeg',
      fallback: 'EA',
      links: [
        {
          icon: Link,
          href: 'https://collectory.sibbr.gov.br/collectory/public/show/co464',
        },
        { icon: Mail, href: 'mailto:elynton@gmail.com' },
      ],
    },
    {
      name: 'Vinicius Ferreira de Souza',
      role: 'viniciusDescription',
      avatar: '/assets/contact/vinicius_ferreira.png',
      fallback: 'VF',
      links: [
        { icon: Link, href: 'https://cantharoid.com/' },
        { icon: Mail, href: 'mailto:vinicius.ferreira@senckenberg.de' },
      ],
    },
    {
      name: 'Leonardo Theodoro',
      role: 'techLeadWebDeveloper',
      avatar: '/assets/contact/leonardo.jpg',
      fallback: 'LT',
      links: [
        {
          icon: LinkedinIcon,
          href: 'https://www.linkedin.com/in/leonardo-theodoro/',
        },
        { icon: Instagram, href: 'https://instagram.com/leeootheodoro' },
        { icon: GithubIcon, href: 'https://github.com/leotheodoro' },
      ],
    },
    {
      name: 'Nathan Camolez',
      role: 'machineLearningEngineer',
      avatar: '/assets/contact/nathan.jpeg',
      fallback: 'NC',
      links: [
        {
          icon: LinkedinIcon,
          href: 'https://www.linkedin.com/in/nathancamolez/',
        },
        { icon: GithubIcon, href: 'https://github.com/nathancamolez-dev' },
      ],
    },
  ]

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {getTranslation('contact')}
          </h1>
          <p className="text-muted-foreground">
            {getTranslation('meetOurTeam')}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Avatar className="h-32 w-32 ring-4 ring-muted">
                  <AvatarFallback className="text-xl">
                    {member.fallback}
                  </AvatarFallback>
                  <AvatarImage src={member.avatar} alt={member.name} />
                </Avatar>
                <div className="text-center">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {getTranslation(member.role)}
                  </span>
                </div>
                <div className="flex gap-2">
                  {member.links.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <Button
                        key={index}
                        size="icon"
                        variant="ghost"
                        className="hover:bg-primary/10"
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert className="mx-auto mt-12 max-w-2xl">
          <AlertTitle className="text-lg">
            {getTranslation('warning')}!
          </AlertTitle>
          <AlertDescription className="mt-2 flex flex-col items-center gap-4">
            <p className="text-center">{getTranslation('contactWarning')}</p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Link className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </main>
  )
}
