import React from 'react'
import './CompetencyСards.scss'

const CompetencyСards = (props) => {
    return (
        <div className="card">
            <p className='cardSkill'>{props.skill}</p>
            <p className='cardMastering'>Уровень освоения: <br /> <span className='cardMasteringPercent'>  {props.mastering}</span> </p>
            <p className='cardDescription'>{props.description}</p>
            <button onClick={() => props.deleteItem(props.id)} className='cardDelete'> удалить из списка </button>
        </div>
    );
}

export default CompetencyСards