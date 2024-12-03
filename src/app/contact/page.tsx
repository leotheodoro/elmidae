import { Link, LinkedinIcon, Mail } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <main className="py-10">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EM</AvatarFallback>
            <AvatarImage src="https://github.com/leotheodoro.png" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Eduardo Mallet</h3>
          <span className="text-sm text-muted-foreground">
            Engenheiro Ambiental
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <LinkedinIcon />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <Mail />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EM</AvatarFallback>
            <AvatarImage src="https://github.com/leotheodoro.png" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Eduardo Mallet</h3>
          <span className="text-sm text-muted-foreground">
            Engenheiro Ambiental
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <LinkedinIcon />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <Mail />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EM</AvatarFallback>
            <AvatarImage src="https://github.com/leotheodoro.png" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Eduardo Mallet</h3>
          <span className="text-sm text-muted-foreground">
            Engenheiro Ambiental
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <LinkedinIcon />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <Mail />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback>EM</AvatarFallback>
            <AvatarImage src="https://github.com/leotheodoro.png" />
          </Avatar>
          <h3 className="font-semibold text-foreground">Eduardo Mallet</h3>
          <span className="text-sm text-muted-foreground">
            Engenheiro Ambiental
          </span>
          <div>
            <Button size={'icon'} variant={'ghost'}>
              <LinkedinIcon />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <Mail />
            </Button>
          </div>
        </div>
      </div>

      <Alert className="mx-auto mt-10 max-w-[680px]">
        <AlertTitle>Atencão!</AlertTitle>
        <AlertDescription className="flex flex-col items-center justify-center">
          Se você possui material referente à família Elmidae que possam ser
          adicionados ao banco de dados, entre em contato!
          <div className="flex gap-2">
            <Button size={'icon'}>
              <Link />
            </Button>
            <Button size={'icon'}>
              <Mail />
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </main>
  )
}
