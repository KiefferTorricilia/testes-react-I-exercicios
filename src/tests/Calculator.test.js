import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event/"
import Calculator from "../components/Calculator"

describe("Tests do componente Calculator", () => {
    test("Os dígitos de operações são renderizados corretamente", () => {
        //renderizar o componente a ser testado
        render(<Calculator />)
        //buscar pela funcionalidade a ser testada
        const buttonVezes = screen.getByRole('button', { name: /\*/i })
        const buttonMais = screen.getByRole('button', { name: /\+/i })
        const buttonMenos = screen.getByRole('button', { name: /\-/i })
        const buttonDivisao = screen.getByRole('button', { name: /\//i })
        expect(buttonVezes).toBeInTheDocument()
        expect(buttonMais).toBeInTheDocument()
        expect(buttonMenos).toBeInTheDocument()
        expect(buttonDivisao).toBeInTheDocument()
    })

    test("A multiplicação deve funcionar corretamente", async () => {
        //criar um usuário para a simulação
        const user = userEvent.setup()
        //renderizar o componente a ser testado
        render(<Calculator />)
        //buscar pela funcionalidade a ser testada
        const buttonFive = screen.getByRole('button', { name: /5/i })
        const buttonVezes = screen.getByRole('button', { name: /\*/i })
        const buttonTwo = screen.getByRole('button', { name: /2/i })
        const buttonEqual = screen.getByRole('button', { name: /=/i })
        //simular o usuário digitando
        await user.click(buttonFive)
        await user.click(buttonVezes)
        await user.click(buttonTwo)
        await user.click(buttonEqual)
        //buscar pela tarefa realizada pelo usuário
        const value = screen.getByText("10")
        //ter certeza que o componente atualiza quando o usuário digitar algo
        expect(value).toBeInTheDocument()
    })

    test("A concatenação de operações deve funcionar corretamente", async () => {
        //criar um usuário para a simulação
        const user = userEvent.setup()
        //renderizar o componente a ser testado
        render(<Calculator />)
        //buscar pela funcionalidade a ser testada
        const buttonOne = screen.getByRole('button', { name: /1/i })
        const buttonZero = screen.getByRole('button', { name: /0/i })
        const buttonFive = screen.getByRole('button', { name: /5/i })
        const buttonVezes = screen.getByRole('button', { name: /\*/i })
        const buttonTwo = screen.getByRole('button', { name: /2/i })
        const buttonEqual = screen.getByRole('button', { name: /=/i })
        const buttonMais = screen.getByRole('button', { name: /\+/i })
        //simular o usuário digitando
        await user.click(buttonFive)
        await user.click(buttonVezes)
        await user.click(buttonTwo)
        await user.click(buttonMais)
        await user.click(buttonOne)
        await user.click(buttonZero)
        await user.click(buttonEqual)
        //buscar pela tarefa realizada pelo usuário
        const value = screen.getByText("20")
        //ter certeza que o componente atualiza quando o usuário digitar algo
        expect(value).toBeInTheDocument()
    })

   
})