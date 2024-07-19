import { TermCard } from "./TermCard.jsx";
import './TermList.css'

const terms = [
    {
        title: 'React',
        description: 'Библиотека для создания пользовательских интерфейсов',
    },
    {
        title: 'React-компонент',
        description: 'Функция, которая возвращает React-элемент',
    },
    {
        title: 'Render',
    },
]
export const TermList = () => {
    return (
        <ul className='term-list'>
            {terms.map((item) => (
                <li>
                    <TermCard
                        title={item.title}
                        description={item.description}
                    />
                </li>
            ))}
        </ul>
    )
}
