import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/articles/articles";

const Articles = () => {
    const dispatch = useDispatch();
    const { allArticles } = useSelector(state => state.articles);

    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])

    console.log('All articles', allArticles);

    return (
        <div>
            Enter
        </div>
    );
}

export default Articles;