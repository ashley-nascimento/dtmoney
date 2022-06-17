import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./style"
import closeImg from "../../assets/Vector.svg"
import entradaImg from "../../assets/Entradas.svg"
import saidaImg from "../../assets/Saidas.svg"
import { useState, FormEvent, useContext } from "react"
import { TransactionsContext } from "../../TransactionContext"

interface NewTransactionModalProps{
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps){

    const { createTransaction } = useContext(TransactionsContext)

    const [type, setType] = useState('deposit')

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    createTransaction({
        title,
        amount,
        category,
        type
    })
    
    function handleCreateNewTransaction (e: FormEvent) {
        e.preventDefault()


    }
    
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
            > 
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h1>Cadastrar Transação</h1>

                <input 
                type="text" 
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="number" 
                placeholder="Valor" 
                value={amount}
                onChange={(e) => setAmount(+e.target.value)} //ou Number(e.target.value)
                />
                <TransactionTypeContainer>
                    <RadioBox 
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor={'green'}
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                    type="button"
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor={'red'}
                    >
                        <img src={saidaImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                type="text" 
                placeholder="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}