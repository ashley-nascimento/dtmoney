import { Container } from "./styles";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>16/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">- R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>16/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">- R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>16/06/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$1000,00</td>
                        <td>Desenvolvimento</td>
                        <td>16/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}