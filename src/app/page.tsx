
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Home() {
  const channels = [
    'universal channel',
    'channel-39334',
    'channel-39338'
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 20,
          marginRight: 100
        }}
      >
        <ConnectButton />
      </div>
      
      <div className='flex py-0 px-[150px] items-center justify-start'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Create Custom Channel</button>
      </div>

      <div className='flex flex-col py-0 px-[400px] items-start justify-start'>
        <div className='font-bold p-4 m-1'>List Channel</div>
        {channels.map((channel, index) => (
          <div key={index} className="flex items-center justify-between border p-4 m-1 bg-white cursor-pointer hover:bg-cyan-200" style={{ width: '500px' }}>
            <p>{channel}</p>
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Send Packet
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
