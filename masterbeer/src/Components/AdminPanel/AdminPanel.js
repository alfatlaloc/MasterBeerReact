import React from 'react';
import manageBotella from '../../img/AdminPanel/manageBotella.png';
import manageIngrediente from '../../img/AdminPanel/ManageIngrediente.png';
import manageRecipiente from '../../img/AdminPanel/ManageRecipiente.png';
import manageExtras from '../../img/AdminPanel/ManageExtras.png';
import bartender from '../../img/AdminPanel/bartender.png';

import {Link} from 'react-router-dom';

class AdminP extends React.Component{
    render(){
        return(
            <div className='AdminPanel'>
                <h2 className="subPageTitleH">Admin Panel</h2>
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
                    <Link to="/ManageRecipiente">
                     <img src={manageRecipiente} alt=""/>
                    </Link>
                </div>
                <div className="cardAP">
                    <h3>Editar Extras</h3>
                    <Link to="/ManageExtras">
                     <img src={manageExtras} alt=""/>
                    </Link>
                </div>
                <div className="cardAP">
                    <h3>Registrar Bartender</h3>
                    <Link to="/BartenderRegister">
                     <img src={bartender} alt=""/>
                    </Link>
                </div>
                
                </div>
            </div>

        );
    }
}

export default AdminP;