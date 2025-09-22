// Mock blockchain functionality for the prototype
// In a real implementation, this would interface with Hyperledger Fabric or similar

export interface BlockchainTransaction {
  hash: string;
  timestamp: string;
  type: string;
  data: any;
  verified: boolean;
}

export interface SmartContract {
  id: string;
  name: string;
  rules: string[];
  active: boolean;
}

class MockBlockchain {
  private transactions: BlockchainTransaction[] = [];
  private contracts: SmartContract[] = [
    {
      id: "contract_001",
      name: "Sustainability Enforcement",
      rules: [
        "GPS coordinates must be within approved harvesting zones",
        "Seasonal restrictions must be respected",
        "Maximum daily collection limits enforced"
      ],
      active: true
    },
    {
      id: "contract_002", 
      name: "Quality Validation",
      rules: [
        "Moisture content < 10%",
        "Pesticide levels within AYUSH limits",
        "DNA barcoding verification required"
      ],
      active: true
    }
  ];

  // Record a new transaction on the blockchain
  async recordTransaction(type: string, data: any): Promise<string> {
    const transaction: BlockchainTransaction = {
      hash: this.generateHash(),
      timestamp: new Date().toISOString(),
      type,
      data,
      verified: true
    };
    
    this.transactions.push(transaction);
    
    // Simulate blockchain confirmation delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return transaction.hash;
  }

  // Validate against smart contract rules
  validateTransaction(type: string, data: any): { valid: boolean; violations: string[] } {
    const violations: string[] = [];
    
    // Example validations (in real implementation, these would be more sophisticated)
    if (type === "collection") {
      if (!data.coordinates) {
        violations.push("GPS coordinates required");
      }
      if (!data.species) {
        violations.push("Species identification required");
      }
      if (data.quantity > 50) {
        violations.push("Daily collection limit exceeded");
      }
    }
    
    if (type === "testing") {
      if (data.moisture && data.moisture > 10) {
        violations.push("Moisture content exceeds limit");
      }
    }
    
    return {
      valid: violations.length === 0,
      violations
    };
  }

  // Get transaction history for a batch
  getTransactionHistory(batchId: string): BlockchainTransaction[] {
    return this.transactions.filter(tx => 
      tx.data.batchId === batchId || tx.data.id === batchId
    );
  }

  // Get all transactions
  getAllTransactions(): BlockchainTransaction[] {
    return [...this.transactions];
  }

  // Get active smart contracts
  getSmartContracts(): SmartContract[] {
    return this.contracts.filter(contract => contract.active);
  }

  // Generate mock blockchain hash
  private generateHash(): string {
    return '0x' + Array.from({length: 64}, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }

  // Network statistics
  getNetworkStats() {
    return {
      totalTransactions: this.transactions.length,
      verifiedTransactions: this.transactions.filter(tx => tx.verified).length,
      activeContracts: this.contracts.filter(c => c.active).length,
      blockHeight: Math.floor(Math.random() * 1000000) + 800000,
      networkHealth: "healthy"
    };
  }
}

// Singleton instance
export const blockchain = new MockBlockchain();

// Utility functions
export const generateQRCode = (batchId: string): string => {
  // In real implementation, this would generate an actual QR code
  return `QR-${batchId}-${Date.now()}`;
};

export const verifyQRCode = (qrCode: string): { valid: boolean; batchId?: string } => {
  // Mock QR code verification
  if (qrCode.startsWith('QR-') || qrCode === 'BTH001') {
    return { valid: true, batchId: qrCode.includes('BTH') ? qrCode : 'BTH001' };
  }
  return { valid: false };
};

export const formatBlockchainHash = (hash: string): string => {
  return hash.length > 20 ? `${hash.slice(0, 10)}...${hash.slice(-10)}` : hash;
};