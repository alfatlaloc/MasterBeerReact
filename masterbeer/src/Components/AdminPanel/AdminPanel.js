import React from 'react';
import manageBotella from '../../img/AdminPanel/manageBotella.png';
import manageIngrediente from '../../img/AdminPanel/ManageIngrediente.png';
import {Link} from 'react-router-dom';

class AdminP extends React.Component{
    render(){
        return(
            <div className='AdminPanel'>
                <h2>Admin Panel</h2>
                <div className='cardsAdminPanel'>
                <div className="cardAP">
                    <h3 className="cardAPT">Editar Botellas</h3>
                    <Link to="/ManageBotella">
                     <img src={manageBotella} alt=""/>
                    </Link>
                </div>
                <div className="cardAP">
                    <h3 className="cardAPT">Editar Ingredientes</h3>
                    <Link to="/ManageIngrediente">
                     <img src={manageIngrediente} alt=""/>
                    </Link>
                </div>
                <div className="cardAP">
                    <h3 className="cardAPT">Editar Recipientes</h3>

                </div>
                <div className="cardAP">
                    <h3>Editar Extras</h3>
                </div>
                </div>
            </div>

        );
    }
}

export default AdminP;