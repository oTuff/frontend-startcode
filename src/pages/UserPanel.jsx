import React, {useEffect, useState} from 'react';
import trainingFacade from "../utils/trainingFacade.js";
import userFacade from "../utils/userFacade.js";

function UserPanel() {
    const [myTraining, setMyTraining] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const user = userFacade.getUserName();

    useEffect(() => {
        const getData = async () => {
            await trainingFacade.getTrainingSessionsByUser(user, (data) => {
                setMyTraining(data)
            }, "Error can't fetch user's training sessions!")
        }
        getData();
    }, [refresh]);

    const handleRefresh = (evt) => {
        evt.preventDefault
    }

    return (
        <div className="tableBody">
            <h1>My Training Schedule</h1>
            <table>
                <thead>
                <tr className={"blue"}>
                    <th>TITLE</th>
                    <th>TIME</th>
                    <th>DATE</th>
                    <th>FULL ADDRESS</th>
                    <th>CATEGORY</th>
                    <th>PARTICIPANTS</th>
                    <td>DEREGISTER</td>
                </tr>
                </thead>
                <tbody>
                {myTraining.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.title}</td>
                            <td>{data.time}</td>
                            <th>{data.date}</th>
                            <th>{data.fullAddress}</th>
                            <th>{data.category.categoryName}</th>
                            <td>
                                <p>{data.users.length}/{data.maxParticipants}</p>
                            </td>
                            <td>
                                <button onSubmit={handleRefresh} onClick={() => {
                                    // userFacade.removeUserToTrainingSession(userFacade.getUserName(), data.id).then(() => {
                                        setRefresh(!refresh)
                                    // })
                                }}>Deregister
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UserPanel;
