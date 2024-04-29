import React from "react"
import './CreateCompetency.scss'
 

const CreateCompetency = ({newCompetency, setNewCompetency, addNewCompetensy}) => {
    return (
        <div className="imputForNewCompetency">
            <input
                className="skillNewCompetency"
                type="text"
                name="skill"
                id="skill"
                placeholder="название навыка"
                onChange={(el) => {
                    setNewCompetency({...newCompetency, skill: el.target.value})
                }}
            />
            <input
                className="descriptionNewCompetency"
                type="text"
                name="description"
                id="description"
                placeholder="описание навыка"
                onChange={(el) => {
                    setNewCompetency({...newCompetency, description: el.target.value})
                }}
            />
            <input 
                className="masteringNewCompetency"
                type="number"
                name="mastering"
                id="mastering"
                placeholder="освоение навыка в %"
                onChange={(el) => {
                    setNewCompetency({...newCompetency, mastering: el.target.value})
                }}
            />
            <button className="buttonNewCompetency" onClick={addNewCompetensy}> Добавить новые компетенции </button>
        </div>
    )
}

export default CreateCompetency