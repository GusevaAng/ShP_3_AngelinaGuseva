import { useState } from 'react'
import React from 'react'
import './List.scss'
import CompetencyСards from './CompetencyСards/CompetencyСards'
import CreateCompetency from './CreateCompetency/CreateCompetency'



let arrCompet = [
  {id: 0,
  skill: 'HTML', 
  description: 'Этот базовый язык разметки описывает структуру и содержимое веб-страниц и веб-приложений, и каждый начинающий веб-разработчик должен понимать HTML, будь то фронтенд или бэкенд.', 
  mastering: 70,
  deletButton: 'button'},

  {id: 1,
  skill: 'CSS', 
  description: 'Каскадные таблицы стилей — это язык стилей, который определяет визуальный вид и представление HTML-кода. Другими словами, это расширение к HTML, которое управляет расположением элементов на веб-страницах и отвечает за шрифт, формат, цвета на странице.', 
  mastering: 75,
  deletButton: 'button'},

  {id: 2,
  skill: 'JavaScript', 
  description: 'Распространенный и широко используемый язык сценариев для веб-разработки. Он позволяет изменять элементы HTML и CSS, делая веб-сайт более интерактивным, динамичным и привлекательным. Это включает в себя, среди прочего, видео или интерактивные карты, меню и панели поиска.', 
  mastering: 45,
  deletButton: 'button'},

  {id: 3,
  skill: 'Тестирование и отладка', 
  description: 'Каждый веб-разработчик должен знать, как тестировать и отлаживать свой код. Это важные действия в процессе разработки и обслуживания, и они должны выполняться регулярно. Таким образом, вы убедитесь, что код функционирует правильно, создавая тем самым положительный пользовательский опыт.', 
  mastering: 10,
  deletButton: 'button'},

  {id: 4,
  skill: 'Оптимизирование двигателя поиска (SEO)', 
  description: 'Поисковая оптимизация — еще один жизненно важный аспект проектирования веб-сайтов. Вы можете создавать визуально привлекательные и технически совершенные веб-сайты, но игнорирование основ SEO приведет к снижению трафика и коэффициентов конверсии. Поскольку это имеет решающее значение для успеха компаний, настоятельно рекомендуется, чтобы веб-разработчики овладели навыками SEO и разрабатывали SEO-дружественные и конкурентоспособные веб-сайты.', 
  mastering: 1,
  deletButton: 'button'},

  {id: 5,
  skill: 'Адаптивность и гибкость', 
  description: 'Адаптируемые веб-разработчики открыты, осваивают новые навыки и быстро реагируют на меняющиеся идеи, обязанности, тенденции и ожидания. Такие качества выгодны и высоко ценятся в непредсказуемом мире проектов веб-разработки и меняющихся потребностей клиентов.', 
  mastering: 70,
  deletButton: 'button'},

  {id: 6,
  skill: 'Коммуникация', 
  description: 'Важно практиковать развитие своих коммуникативных навыков, включая письмо, чтение, аудирование и разговорную речь. Успешная коммуникация приводит к успешным проектам, сокращая разрыв между требованиями и конечным продуктом. Это экономит время, уменьшает количество ошибок и создает лучшую рабочую среду.', 
  mastering: 75,
  deletButton: 'button'},

  {id: 7,
  skill: 'Обучение и открытость новым технологиям', 
  description: 'То, что сегодня является обычной практикой, может устареть через несколько лет. Если вы хотите быть превосходным разработчиком и оставаться впереди на конкурентном рынке, вы должны идти в ногу с тенденциями и изучать новые технологии и языки программирования.', 
  mastering: 85,
  deletButton: 'button'},

  {id: 8,
  skill: 'Внедрение практических и интеллектуальных решений', 
  description: 'Этот навык нужно развивать уже на раннем этапе вашей профессиональной деятельности, и лучший способ — это практика. Ознакомьтесь с распространенными отраслевыми проблемами и учитесь у более опытных сотрудников.', 
  mastering: 35,
  deletButton: 'button'},

  {id: 9,
  skill: 'Тайм-менеджмент', 
  description: 'Плохие навыки управления временем могут повлиять на качество вашей работы, привести к срыву дедлайнов и потере клиентов. Чтобы оставаться эффективным и здоровым, крайне важно иметь стратегию тайм-менеджмента. Вы должны научиться планировать заранее, расставлять приоритеты, забыть о многозадачности и использовать методы управления временем.', 
  mastering: 75,
  deletButton: 'button'},
]
const List  = ({opening}) => {
  
  const [list, setList] = useState(arrCompet)
  const [newCompetency, setNewCompetency] = useState({})

  const addNewCompetensy = () => {
    const newList = JSON.parse(JSON.stringify(list))

    let lastId;
    list.forEach(({id}) => {
      if (!lastId) {
        lastId = id
      } else if (id > lastId) {
          lastId = id
      }
    })    

    if (!newCompetency.skill) {
      alert('Введите название навыка!')
      return;
    }
    if (!newCompetency.description) {
      alert('Введите описание навыка!')
      return;
    }
    if (!newCompetency.mastering || newCompetency.mastering <= 0) {
      alert('Введите % освоения навыка!')
      return;
    }

    const newItem = {...newCompetency, id: lastId + 1}

    newList.push(newItem)
    arrCompet.push(newItem)

    setList(newList)

  }

  if (!opening) {
    return;
  }

  const setMoreElements = () => {
    const newList = arrCompet.filter((item) => item.mastering > 50)
    
    setList(newList)
  }

  const setLessElements = () => {
    const newList = arrCompet.filter((item) => item.mastering < 50)
    
    setList(newList)
  }


  const deleteItem = (id) => {    
    const newList = [...list.filter((el) => el.id != id)]
    arrCompet = arrCompet.filter((el) => el.id != id)
    setList(newList)
  }

  return (
    <div className='list'>
      <div className="blockOfCompetencies">
        <div className='sortButton'>
          <p className='sortTitle'> отсортировать компетенции по уровню освоения </p>
          <button className='sortButtonMore' onClick={setMoreElements}> больше 50% </button>
          <button className='sortButtonLess' onClick={setLessElements}> меньше 50% </button>
        </div>
         {list.sort((a, b) => b.mastering - a.mastering).map((obj) => (
            <CompetencyСards
              key={obj.id}
              skill={obj.skill}
              description={obj.description}
              mastering={obj.mastering}
              id={obj.id}
              deleteItem={deleteItem}
            />
          ))}
          <CreateCompetency 
            addNewCompetensy={addNewCompetensy} 
            newCompetency={newCompetency} 
            setNewCompetency={setNewCompetency} 
          />
      </div>
    </div>
  );
}
  

  export default List