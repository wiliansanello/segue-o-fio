import { useForm } from "react-hook-form"
import Tweet from '../components/Tweet'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BiShareAlt } from 'react-icons/bi'

const Index = () => {
  const router = useRouter()
  const { register, watch, setValue } = useForm()
  const content = watch('content')
  const showCounter = watch('showCounter') || false

  useEffect(() => {
    if (router?.query?.content) {
      setValue('content', router.query.content)
    }
    if (router?.query?.showCounter) {
      setValue('showCounter', router.query.showCounter)
    }
  }, [router])

  const tweets = content
    ?.split('\n\n')
    .map((tweet) => tweet.trim())
    .filter((tweet) => tweet)

  const share = async () => {
    const shareUrl = process.env.NEXT_PUBLIC_APP_URL + '?content=' + encodeURI(content) + '&showCounter=' + showCounter
    await navigator.clipboard.writeText(shareUrl)
  }

  return (
    <div className='max-w-6xl m-auto'>
      <p className='px-4 py-4'>
        <label>
          <input type='checkbox' {...register('showCounter')} />
          Mostrar contador{'    '}
        </label>
        <button
          type='button'
          className='mx-4 py-2 px-2 text-white bg-sky-400 rounded-lg block md:inline-block'
          onClick={share}>
          <BiShareAlt className='inline mr-2' />
          Compartilhar
        </button>
      </p>
      <div className='flex flex-row'>
        <div className='flex-1 p-2'>
          <h2>Conteúdo: </h2>
          <textarea
            placeholder="Digite seu conteúdo do fio aqui"
            {...register('content')}
            className='w-full h-screen rounded-lg'>

          </textarea>
        </div>
        <div className='flex-1 p-2'>
          <h2>Tweets: </h2>
          {content && tweets.map((tweet, index) => (
            <Tweet
              key={tweet + '-' + index}
              tweet={tweet}
              showCounter={showCounter}
              current={index + 1}
              total={tweets.length}
            />
          ))}
          {tweets?.length === 0 &&
            (<div class="mt-2 py-3 px-5 bg-red-100 text-red-900 text-sm rounded-md border border-yellow-200" role="alert">
              Comece digitando seu conteúdo.
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Index