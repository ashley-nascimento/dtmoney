import { Container } from './styles'
import entradasImg from '../../assets/Entradas.svg'
import saidasImg  from '../../assets/Saidas.svg'
import totalImg from '../../assets/Total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionContext'

export function Summary(){
    const { transactions } = useContext(TransactionsContext)

    return(
        <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={entradasImg} alt="Entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>

        <div>
            <header>
                <p>Saídas</p>
                <img src={saidasImg} alt="Saídas" />
            </header>
            <strong>- R$500,00</strong>
        </div>

        <div>
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>R$ 500,00</strong>
        </div>

        </Container>
    )
}