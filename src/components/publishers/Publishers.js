import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { fetchPublishers } from "../../redux/publishers/publisherArticles";

const Publishers = () => {
    const dispatch = useDispatch();
    const { publisherArticles } = useSelector(state => state.publishers)

    useEffect(() => {
        dispatch(fetchPublishers('techcrunch.com'))
    }, [dispatch])

    console.log(publisherArticles)

    return (
        <div>
            
        </div>
    );
}

export default Publishers;