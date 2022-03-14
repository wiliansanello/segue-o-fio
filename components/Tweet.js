import { IoMdCopy } from 'react-icons/io'
const Tweet = ({ tweet, showCounter = false, current, total }) => {
  let content = tweet.trim()
  if (showCounter) {
    content += '\n' + current + '/' + total
  }
  const len = content.length

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)
  }

  return (
    <div
      className='group transition-all relative shadow border bg-white rounded-lg p-4 my-2 cursor pointer hover:bg-blue-200'
      onClick={copyToClipboard}>
      <IoMdCopy
        className='opacity-0 absolute top-4 right-4 group-hover:opacity-100'
      />
      <pre className='font-sans'>{content}</pre>
      <p className='text-right text-sm'>
        {len <= 280 && (
          <span className='text-green-800 p-1'>{len}</span>
        )}
        {len > 280 && (
          <span className='text-red-800 p-1'>{280 - len}</span>
        )}
      </p>
    </div>
  )
}

export default Tweet