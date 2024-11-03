export const connect = async () => {
    if (window && window.aptos) {
        try {
            const accounts = await window.aptos.connect();
            return accounts[0]; 
        } catch (error) {
            console.error('Connection failed:', error);
            throw new Error('Failed to connect to wallet');
        }
    } else {
        throw new Error('Aptos wallet is not installed');
    }
};
