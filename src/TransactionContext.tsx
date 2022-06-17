import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    category: string;
    createAt: string;
    type: string;
}

// interface TransactionInput {
//     id: number;
//     title: string;
//     amount: number;
//     category: string;
//     createAt: string;
//     type: string;
// } Cria nova interface

// type TransactionInput = Omit<Transactions, 'id' | 'createAt'> // Omit cria nova interface igual a Transactions e omite id e createAt


type TransactionInput = Pick<Transactions, 'title' | 'amount' | 'category' | 'type'> // Omit cria nova interface e adicionar as chaves de Transactions


interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transactions[];
    createTransaction: (transactions: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
     api.get('transactions').then((response) =>  setTransactions(response.data.transactions))   
    }, [])

    function createTransaction(transaction:TransactionInput){
        api.post('/transactions', transaction)
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}