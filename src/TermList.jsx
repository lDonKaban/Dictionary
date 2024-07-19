import { TermCard } from "./TermCard.jsx";
import './TermList.css'
export const TermList = () => {
    return (
        <ul className='term-list'>
            <li>
                <TermCard
                    title='React'
                    description='Библиотека для создания пользовательских интерфейсов'
                />
            </li>
            <li>
                <TermCard
                    title='React-компонент'
                    description='Функция, которая возвращает React-элемент'
                />
            </li>
        </ul>
    )
}
