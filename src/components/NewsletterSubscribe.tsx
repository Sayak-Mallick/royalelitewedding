export default function NewsletterSubscribe() {
  return (
    <div className='border-[#B6965B] px-20 py-20'>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#c2a87a] p-40 md:p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-[#B6965B]">
      <div className='px-10 flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mx-auto'>
      <h2 className="text-white text-lg md:text-2xl font-semibold mb-4 md:mb-0">
        SUBSCRIBE NEWSLETTER
      </h2>
      <div className="flex w-full md:w-auto space-x-2">
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 rounded-md w-full md:w-64 text-black focus:outline-none"
        />
        <button className="bg-[#3a3a2e] text-white px-4 py-2 rounded-md hover:bg-[#2a2a1e]">
          Subscribe
        </button>
      </div>
      </div>
    </div>
    </div>
  )
}
