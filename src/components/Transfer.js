import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const TransferComponent = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [transactionStatus, setTransactionStatus] = useState(''); // State to store transaction status

    const fetchBalance = async () => {
        // Simulating balance fetching logic
        try {
            // Simulate an API call to fetch balance
            const simulatedFetchedBalance = 1000; // Example static value for demonstration
            setBalance((simulatedFetchedBalance / Math.pow(10, 18)).toFixed(2)); // Assuming balance is in smallest unit (like wei)
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    const handleTransfer = () => {
        // Simulate transaction completion
        setTransactionStatus('Transaction completed');
        // Clear status after a few seconds, if desired
        setTimeout(() => setTransactionStatus(''), 3000);
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
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
                            {/* Navigation Buttons */}
                            <button onClick={() => navigate('/')} className="text-white text-sm font-medium leading-normal">Home</button>
                        </div>
                        <div className="flex gap-2"></div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                        <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">Transfer CDO</h3>
                        
                        {/* Recipient Address Input */}
                        <label className="flex flex-col min-w-40 flex-1 px-4 py-3">
                            <p className="text-white text-base font-medium leading-normal pb-2">Recipient Address</p>
                            <input
                                id="recipientAddress"
                                placeholder="Paste recipient address"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal"
                                value={recipientAddress}
                                onChange={(e) => setRecipientAddress(e.target.value)}
                            />
                        </label>

                        {/* Amount Input */}
                        <label className="flex flex-col min-w-40 flex-1 px-4 py-3">
                            <p className='text-white text-base font-medium leading-normal pb-2'>Amount</p>
                            <input
                                id='amount'
                                placeholder='How much would you like to send?'
                                className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#344d65] bg-[#1a2632] focus:border-[#344d65] h-14 placeholder:text-[#93adc8] p-[15px] text-base font-normal leading-normal'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </label>

                        {/* Check Balance Button and Remaining Balance Display */}
                        <div className='flex px-4 py-3 justify-end'>
                            <button
                                id='checkBalance'
                                onClick={fetchBalance}
                                className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]'
                            >
                                Check Balance
                            </button>
                            <p id='remainingBalance' className='text-white pl-4'>Remaining Balance: $<span id='balanceValue'>{balance}</span></p>
                        </div>

                        {/* Transaction Completed Message */}
                        {transactionStatus && (
                            <div className="text-green-500 text-sm font-bold leading-normal pl-4 pr-4 py-3">
                                {transactionStatus}
                            </div>
                        )}

                        {/* Transfer Button */}
                        <div className='flex px-4 py-3 justify-end'>
                            <button
                                onClick={handleTransfer}
                                className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]'
                            >
                                <span className='truncate'>Transfer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferComponent;
