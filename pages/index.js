import { useForm } from "react-hook-form"
import Tweet from '../components/Tweet'

const Index = () => {
  const { register, watch } = useForm()
  const content = watch('content')

  const tweets = content?.split('\n\n\n')

  return (
    <div className='max-w-6xl m-auto'>
      <div className='flex flex-row p-6'>
        <div className='flex-1 p-2'>
          <h2>Conteúdo: </h2>
          <textarea {...register('content')} className='w-full h-screen'></textarea>
        </div>
        <div className='flex-1 p-2'>
          <h2>Tweets: </h2>
          {content && tweets.map(tweet => (<Tweet tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index