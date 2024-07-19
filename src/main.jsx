import './index.css';
import { createRoot } from 'react-dom/client'
import { TermList } from "./TermList.jsx";

const syncTermList = () => {
  reactRoot.render(<TermList terms={terms} onDelete={deleteTerm}/>);
}

let terms = []
const addTerm = (title, description) => {
  terms.push({
    id: Date.now(),
    title,
    description
  });

  terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1));

  syncTermList();
}

const deleteTerm = (id) => {
  terms = terms.filter(term => term.id !== id);

  syncTermList();
}

const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);

syncTermList();

const form = document.getElementById('add-description');


form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  // Выводим термин в консоль
  addTerm(title, description)
});
