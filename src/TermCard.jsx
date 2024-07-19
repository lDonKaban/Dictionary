import './TermCard.css'
export const TermCard = ({ title, description }) => {
    return (
        <div className='term-card'>
            <h2 className='term-card_title'>{title}</h2>
            <p className='term-card_description'>{description}</p>
        </div>
    )
}
