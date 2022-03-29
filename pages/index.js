import { useForm } from "react-hook-form"
import Tweet from '../components/Tweet'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BiShareAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Index = () => {
  const router = useRouter()
  const { register, watch, setValue } = useForm()
  const content = watch('content')
  const showCounter = watch('showCounter') || false
  const separator = watch('separator') || '/'

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

    toast.configure()
    toast.info('Conteúdo copiado. Abra uma nova aba no seu navegador e cole o endereço,',
      {
        position: toast.POSITION.TOP_LEFT
      })
  }

  return (
    <div className='max-w-6xl m-auto'>
      <p className='px-4 py-4 text-white text-center'>
        <label>
          <input type='checkbox' {...register('showCounter')} />
          <label className='mr-2 text-white'> Mostrar contador{'    '} </label>
        </label>
        <label className='m-4 text-white'>
          Separador do contador{'    '}
          <select className='rounded-lg text-black'
            {...register('separator')}>
            <option value='/'>/</option>
            <option value='-'>-</option>
            <option value=':'>:</option>
          </select>
        </label>
        <button
          type='button'
          className='py-2 px-2 text-white bg-sky-400 rounded-lg block md:inline-block'
          onClick={share}>
          <BiShareAlt className='inline mr-2 text-white' />
          Compartilhar
        </button>
      </p>
      <div className='flex flex-none'>
        <div className='flex-1 max-w-xl p-2'>
          <h2 className='text-white'>Conteúdo: </h2>
          <textarea
            placeholder="Digite seu conteúdo do fio aqui"
            {...register('content')}
            className='w-full h-screen rounded-lg'>

          </textarea>
        </div>
        <div className='flex-1 p-2'>
          <h2 className='text-white'>Tweets: </h2>
          {content && tweets.map((tweet, index) => (
            <Tweet
              key={tweet + '-' + index}
              tweet={tweet}
              showCounter={showCounter}
              separator={separator}
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