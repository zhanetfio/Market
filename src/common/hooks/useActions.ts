import {AppDispatch} from '../../App/store';
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {ActionCreatorsMapObject, bindActionCreators} from "redux";

export const useActions = <T extends ActionCreatorsMapObject<any>>(actions: T) => {
    const dispatch = useDispatch<AppDispatch>()

    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [])

    return boundActions
}