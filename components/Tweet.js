import { IoMdCopy } from 'react-icons/io'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Tweet = ({ tweet, showCounter = false, separator, current, total }) => {
  let content = tweet.trim()
  /*if (showCounter) {
    content += '\n' + current + separator + total
  }*/
  const len = content.length

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)

    toast.configure()
    toast.info('Conteúdo copiado.',
      {
        position: toast.POSITION.TOP_RIGHT
      })
  }

  return (
    <div
      className='max-w-lg group transition-all relative shadow border bg-white rounded-lg p-4 my-2 cursor pointer hover:bg-blue-200'
      onClick={copyToClipboard}>
      <IoMdCopy
        className='opacity-0 absolute top-4 right-4 group-hover:opacity-100'
      />
      {showCounter && <span className='text-left text-sm font-bold'>{current + separator + total}</span>}

      <p className='md:break-all font-sans'>{content}</p>
      <p className='text-right text-sm'>
        {len <= 280 && (
          <span className='text-green-800 p-1'>{len}</span>
        )}
        {len > 280 && (
          <span className='text-red-800 p-1'>{280 + '-' + len}</span>
        )}
      </p>
    </div>
  )
}

export default Tweet