import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from '../utils/walletSDK';

const Home = () => {
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const handleConnectWallet = async () => {
        try {
            const address = await connect(); // Connect to WellDone Wallet
            setWalletAddress(address); // Set the wallet address
            setIsConnected(true); // Update connection status
            alert(`Connected`); // Notify user of successful connection
        } catch (error) {
            console.error(error);
            alert('Failed to connect wallet');
        }
    };

    const handleTransferClick = () => {
        navigate('/transfer'); // Redirect to Transfer page
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group-design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243647] px-10 py-3">
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CDO Transfer</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <button 
                                onClick={handleTransferClick} 
                                className="text-white text-sm font-medium leading-normal"
                            >
                                Transfer
                            </button>
                        </div>
                    </div>
                </header>

                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="@ [480px]:p-4">
                                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                                     style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/5463c41d-6c83-48ea-8f00-bf754f25c469.png")' }}>
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center">Transfer CDOs from your wallet to another wallet.</h1>
                                    <button 
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                                        onClick={handleConnectWallet}
                                    >
                                        {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
                                    </button>
                                    {isConnected && <p className="text-white mt-2">{walletAddress}</p>} {/* Display wallet address */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
