export default function usuarioReducer(state =[],action)
{
    switch(action.type)
    {
        case "CREATE_USUARIO":
            return [...state,{...action.USUARIO}];

        default:
            return state;
    }
}