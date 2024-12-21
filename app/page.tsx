'use client';

import Image from 'next/image';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
          <div className='header'>
            <Image src="/logo.png" alt="SuperViral.ai logo" width={150} height={40} />
            <p>Talk to <span className='special-text'>The Last</span></p>
          </div>
        <Chat />
      </div>
    </main>
  )
}

