import './index.css';
import { createRoot } from 'react-dom/client'
import { TermList } from "./TermList.jsx";

let terms = []
const addTerm = (title, description) => {
  terms.push({
    title,
    description
  });

  console.log('terms =', terms)

  terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1));

  reactRoot.render(<TermList terms={terms} />);
}

const descriptionList = document.getElementById('description-list');

const reactRoot = createRoot(descriptionList);

reactRoot.render(<TermList terms={terms} />);

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
