import React from 'react'

const Archive = () => {
  return (
    <div className={'flex w-full h-screen'}>
        <div className={''}>
            <header className='w-full h-36 text-2xl font-semibold justify-center '></header>
        </div>
        <div className={'inline-flex'}>
        <header>Hello world</header>
        {[...Array(30)].map((_, index) => (
            <div className='gap-2 text-white' key={index}>Hello world</div>
        ))}
        </div>
    </div>
  )
}

export default Archive