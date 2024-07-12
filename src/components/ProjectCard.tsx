import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from './Badge.astro';

type Props = {
  name: string;
  link: string;
  thumbnail: string;
  stack: string[];
  description: string;
}

export default function ProjectCard({ link, name, stack, thumbnail, description }: Props) {

  return (
    <Card className="inter-var w-full lg:grid lg:grid-cols-2 gap-4  bg-black/20 border-gray-900">
      <div>
        <CardHeader>
          <CardTitle className='text-white '>{name}</CardTitle>
          <CardDescription className='text-white opacity-90 text-justify text-[16px]' title={description}>
            {description}
          </CardDescription>
        </CardHeader>
        <ProjectCardStacks stacks={stack} />

      </div>
      <CardContent>
        <div className='mt-5'>
          <VideoPlayer src={thumbnail} />
        </div>
      </CardContent>
    </Card>
  )
}


interface VideoPlayerProps {
  src: string;
}


function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }}>
      <iframe src={src}
        className='rounded-sm'
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      </iframe>
    </div>
  )
}



function ProjectCardStacks({ stacks }: { stacks: string[] }) {
  return (
    <div className='flex flex-wrap gap-3 pl-6'>
      {
        stacks.map((item) => (
          <span
            key={`stack-icon-${item}-project-card`}
            className="px-2 py-1 max-h-fit transition bg-foreground rounded-md text-[12px] md:text-base  gap-2  hover:bg-[#393939] text-white font-bold"
          >
            {item}
          </span>

        ))
      }
    </div>
  )
}

