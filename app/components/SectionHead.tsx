type Props = {
  title: string,
  description: string
}

const SectionHead = ({
  title, description
}: Props) => {
  return (
    <>
      <div className='border-t border-b border-dashed border-gray-200 py-4 md:py-8 lg:py-12'>
        <h2 className='h2 text-center mb-4'>{title}</h2>
        <p className='w-auto lg:w-[500px] mx-auto text-black-300 text-opacity-60 text-center leading-6'>
          {description}
        </p>
      </div>
    </>
  )
}

export default SectionHead