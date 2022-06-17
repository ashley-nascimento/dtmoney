import { Container } from './styles'
import entradasImg from '../../assets/Entradas.svg'
import saidasImg  from '../../assets/Saidas.svg'
import totalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/useTransactions'


export function Summary(){
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return(
        <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={entradasImg} alt="Entradas" />
            </header>
            <strong>                           
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}
            </strong>
        </div>

        <div>
            <header>
                <p>Saídas</p>
                <img src={saidasImg} alt="Saídas" />
            </header>
            <strong>
                -
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraw)}    
            </strong>
        </div>

        <div>
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}   
            </strong>
        </div>

        </Container>
    )
}

